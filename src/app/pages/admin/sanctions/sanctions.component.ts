import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDeleteService } from '../../../shared/confirm-delete.service';

@Component({
  selector: 'app-sanctions',
  standalone: true,
  imports: [
    CommonModule, FormsModule, DatePipe,
  ],
  templateUrl: './sanctions.component.html',
  styleUrl: './sanctions.component.scss',
})
export class SanctionsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Dashboard
  dashboard: any = {};

  // Tab state
  activeTab = 0;

  // Sanction Entries
  entries: any[] = [];
  entriesTotalCount = 0;
  entriesPage = 1;
  entriesPageSize = 20;
  entriesSearch = '';
  loadingEntries = false;

  // Countries
  countries: any[] = [];
  loadingCountries = false;

  // Flagged Transactions (PotentialMatch)
  flagged: any[] = [];
  flaggedTotalCount = 0;
  flaggedPage = 1;
  flaggedPageSize = 20;
  flaggedSearch = '';
  loadingFlagged = false;

  // Whitelist (FalsePositive)
  whitelist: any[] = [];
  whitelistTotalCount = 0;
  whitelistPage = 1;
  whitelistPageSize = 20;
  whitelistSearch = '';
  loadingWhitelist = false;

  // Entry Form
  showEntryForm = false;
  editingEntry: any = null;
  entryForm = {
    name: '',
    entryType: 'Individual',
    listSource: 'Custom',
    aliases: '',
    nationality: '',
    remarks: '',
    // Individual-specific
    dateOfBirth: '',
    placeOfBirth: '',
    gender: '',
    position: '',
    idDocumentNumber: '',
    // Organization-specific
    registrationNumber: '',
    registrationCountry: '',
    // All types
    address: ''
  };

  // Country Form
  showCountryForm = false;
  editingCountry: any = null;
  countryForm = {
    countryCode: '',
    countryName: '',
    sanctionType: 'Full',
    riskLevel: 'Blocked',
    listSource: 'Custom',
    remarks: ''
  };

  // Review Form
  showReviewForm = false;
  reviewingScreening: any = null;
  reviewForm = {
    status: 'FalsePositive',
    reviewNotes: ''
  };

  entryTypes = ['Individual', 'Organization', 'Vessel', 'Aircraft'];
  genderOptions = ['Male', 'Female', 'Unknown'];
  listSources = ['OFAC-SDN', 'UN', 'EU', 'Custom'];
  sanctionTypes = ['Full', 'Partial'];
  riskLevels = ['Blocked', 'High', 'Medium', 'Low'];

  // Reference country list (from static values)
  referenceCountries: { name: string; currency: string }[] = [];

  entryColumns = ['name', 'entryType', 'listSource', 'aliases', 'nationality', 'isActive', 'createdAt', 'actions'];
  countryColumns = ['countryCode', 'countryName', 'sanctionType', 'riskLevel', 'listSource', 'isActive', 'createdAt', 'actions'];
  screeningColumns = ['screenedName', 'screenedType', 'status', 'matchedName', 'matchScore', 'transactionId', 'createdAt', 'actions'];

  private searchTimer: any;

  constructor(
    private api: ApiService,
    private notify: NotificationService,
    private confirmDelete: ConfirmDeleteService,
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
    this.loadEntries();
    this.loadCountries();
    this.loadFlagged();
    this.loadWhitelist();
    this.loadReferenceCountries();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.searchTimer) clearTimeout(this.searchTimer);
  }

  // ---- Reference Countries ----
  loadReferenceCountries(): void {
    this.api.getCountries().pipe(takeUntil(this.destroy$)).subscribe(res => {
      if (res?.success && res.data) {
        this.referenceCountries = res.data;
      }
    });
  }

  onCountrySelected(countryName: string): void {
    this.countryForm.countryName = countryName;
    this.countryForm.countryCode = countryName; // Use name as code if no ISO code available
  }

  // ---- Dashboard ----
  loadDashboard(): void {
    this.api.getSanctionsDashboard().pipe(takeUntil(this.destroy$)).subscribe(res => {
      if (res?.success) this.dashboard = res.data || {};
    });
  }

  // ---- Entries ----
  loadEntries(): void {
    this.loadingEntries = true;
    this.api.getSanctionEntriesPaged({ page: this.entriesPage, pageSize: this.entriesPageSize, search: this.entriesSearch })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (res?.success && res.data) {
            this.entries = res.data.items || [];
            this.entriesTotalCount = res.data.totalCount || 0;
          }
          this.loadingEntries = false;
        },
        error: () => this.loadingEntries = false
      });
  }

  onEntriesSearch(): void {
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.entriesPage = 1;
      this.loadEntries();
    }, 400);
  }

  onEntriesPage(event: { pageIndex: number; pageSize: number }): void {
    this.entriesPage = event.pageIndex + 1;
    this.entriesPageSize = event.pageSize;
    this.loadEntries();
  }

  openEntryForm(entry?: any): void {
    this.editingEntry = entry || null;
    if (entry) {
      this.entryForm = {
        name: entry.name,
        entryType: entry.entryType,
        listSource: entry.listSource,
        aliases: entry.aliases || '',
        nationality: entry.nationality || '',
        remarks: entry.remarks || '',
        dateOfBirth: entry.dateOfBirth ? entry.dateOfBirth.substring(0, 10) : '',
        placeOfBirth: entry.placeOfBirth || '',
        gender: entry.gender || '',
        position: entry.position || '',
        idDocumentNumber: entry.idDocumentNumber || '',
        registrationNumber: entry.registrationNumber || '',
        registrationCountry: entry.registrationCountry || '',
        address: entry.address || ''
      };
    } else {
      this.entryForm = {
        name: '', entryType: 'Individual', listSource: 'Custom', aliases: '',
        nationality: '', remarks: '', dateOfBirth: '', placeOfBirth: '',
        gender: '', position: '', idDocumentNumber: '', registrationNumber: '',
        registrationCountry: '', address: ''
      };
    }
    this.showEntryForm = true;
  }

  closeEntryForm(): void {
    this.showEntryForm = false;
    this.editingEntry = null;
  }

  saveEntry(): void {
    if (!this.entryForm.name.trim()) {
      this.notify.error('Name is required');
      return;
    }

    const obs = this.editingEntry
      ? this.api.updateSanctionEntry(this.editingEntry.id, this.entryForm)
      : this.api.createSanctionEntry(this.entryForm);

    obs.pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.editingEntry ? 'Entry updated' : 'Entry created');
          this.closeEntryForm();
          this.loadEntries();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || 'Failed');
        }
      },
      error: (err) => this.notify.error(err?.error?.message || 'Failed')
    });
  }

  toggleEntry(entry: any): void {
    this.api.toggleSanctionEntry(entry.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(`Entry ${res.data ? 'activated' : 'deactivated'}`);
          this.loadEntries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || 'Failed')
    });
  }

  deleteEntry(entry: any): void {
    this.confirmDelete.confirm(entry.name).then(() => {
      this.api.deleteSanctionEntry(entry.id).pipe(takeUntil(this.destroy$)).subscribe({
        next: res => {
          if (res?.success) {
            this.notify.success('Entry deleted');
            this.loadEntries();
            this.loadDashboard();
          }
        },
        error: (err) => this.notify.error(err?.error?.message || 'Failed')
      });
    }).catch(() => {});
  }

  // ---- Countries ----
  loadCountries(): void {
    this.loadingCountries = true;
    this.api.getSanctionedCountries().pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        if (res?.success) this.countries = res.data || [];
        this.loadingCountries = false;
      },
      error: () => this.loadingCountries = false
    });
  }

  openCountryForm(country?: any): void {
    this.editingCountry = country || null;
    if (country) {
      this.countryForm = {
        countryCode: country.countryCode,
        countryName: country.countryName,
        sanctionType: country.sanctionType,
        riskLevel: country.riskLevel || 'Blocked',
        listSource: country.listSource,
        remarks: country.remarks || ''
      };
    } else {
      this.countryForm = { countryCode: '', countryName: '', sanctionType: 'Full', riskLevel: 'Blocked', listSource: 'Custom', remarks: '' };
    }
    this.showCountryForm = true;
  }

  closeCountryForm(): void {
    this.showCountryForm = false;
    this.editingCountry = null;
  }

  saveCountry(): void {
    if (!this.countryForm.countryCode.trim() || !this.countryForm.countryName.trim()) {
      this.notify.error('Country code and name are required');
      return;
    }

    const obs = this.editingCountry
      ? this.api.updateSanctionedCountry(this.editingCountry.id, this.countryForm)
      : this.api.createSanctionedCountry(this.countryForm);

    obs.pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.editingCountry ? 'Country updated' : 'Country added');
          this.closeCountryForm();
          this.loadCountries();
          this.loadDashboard();
        } else {
          this.notify.error(res?.message || 'Failed');
        }
      },
      error: (err) => this.notify.error(err?.error?.message || 'Failed')
    });
  }

  toggleCountry(country: any): void {
    this.api.toggleSanctionedCountry(country.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(`Country ${res.data ? 'activated' : 'deactivated'}`);
          this.loadCountries();
          this.loadDashboard();
        }
      },
      error: (err) => this.notify.error(err?.error?.message || 'Failed')
    });
  }

  deleteCountry(country: any): void {
    this.confirmDelete.confirm(country.countryName).then(() => {
      this.api.deleteSanctionedCountry(country.id).pipe(takeUntil(this.destroy$)).subscribe({
        next: res => {
          if (res?.success) {
            this.notify.success('Country removed');
            this.loadCountries();
            this.loadDashboard();
          }
        },
        error: (err) => this.notify.error(err?.error?.message || 'Failed')
      });
    }).catch(() => {});
  }

  // ---- Flagged Transactions (PotentialMatch) ----
  loadFlagged(): void {
    this.loadingFlagged = true;
    this.api.getScreeningResultsPaged({ page: this.flaggedPage, pageSize: this.flaggedPageSize, search: this.flaggedSearch }, 'PotentialMatch')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (res?.success && res.data) {
            this.flagged = res.data.items || [];
            this.flaggedTotalCount = res.data.totalCount || 0;
          }
          this.loadingFlagged = false;
        },
        error: () => this.loadingFlagged = false
      });
  }

  onFlaggedSearch(): void {
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.flaggedPage = 1;
      this.loadFlagged();
    }, 400);
  }

  onFlaggedPage(event: { pageIndex: number; pageSize: number }): void {
    this.flaggedPage = event.pageIndex + 1;
    this.flaggedPageSize = event.pageSize;
    this.loadFlagged();
  }

  // ---- Whitelist (FalsePositive) ----
  loadWhitelist(): void {
    this.loadingWhitelist = true;
    this.api.getScreeningResultsPaged({ page: this.whitelistPage, pageSize: this.whitelistPageSize, search: this.whitelistSearch }, 'FalsePositive')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (res?.success && res.data) {
            this.whitelist = res.data.items || [];
            this.whitelistTotalCount = res.data.totalCount || 0;
          }
          this.loadingWhitelist = false;
        },
        error: () => this.loadingWhitelist = false
      });
  }

  onWhitelistSearch(): void {
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.whitelistPage = 1;
      this.loadWhitelist();
    }, 400);
  }

  onWhitelistPage(event: { pageIndex: number; pageSize: number }): void {
    this.whitelistPage = event.pageIndex + 1;
    this.whitelistPageSize = event.pageSize;
    this.loadWhitelist();
  }

  openReviewForm(screening: any): void {
    this.reviewingScreening = screening;
    this.reviewForm = { status: 'FalsePositive', reviewNotes: '' };
    this.showReviewForm = true;
  }

  closeReviewForm(): void {
    this.showReviewForm = false;
    this.reviewingScreening = null;
  }

  submitReview(): void {
    if (!this.reviewingScreening) return;
    this.api.reviewScreeningResult(this.reviewingScreening.id, this.reviewForm)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (res?.success) {
            this.notify.success('Review submitted');
            this.closeReviewForm();
            this.loadFlagged();
            this.loadWhitelist();
            this.loadDashboard();
          } else {
            this.notify.error(res?.message || 'Failed');
          }
        },
        error: (err) => this.notify.error(err?.error?.message || 'Failed')
      });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Clear': return 'accent';
      case 'PotentialMatch': return 'warn';
      case 'ConfirmedMatch': return 'warn';
      case 'FalsePositive': return 'primary';
      default: return '';
    }
  }

  getScorePercent(score: number | null): string {
    if (score == null) return '-';
    return (score * 100).toFixed(0) + '%';
  }

  exportEntries(format: string): void {
    this.api.exportSanctionEntries(format).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = format === 'csv' ? 'sanction-entries.csv' : 'sanction-entries.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  getRiskLevelDescription(level: string): string {
    switch (level) {
      case 'Blocked': return 'Transactions blocked completely';
      case 'High': return 'Transactions flagged for compliance review';
      case 'Medium': return 'Transactions flagged for compliance review';
      case 'Low': return 'Transactions allowed normally';
      default: return '';
    }
  }

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  get entriesTotalPages(): number {
    return Math.ceil(this.entriesTotalCount / this.entriesPageSize) || 1;
  }

  get flaggedTotalPages(): number {
    return Math.ceil(this.flaggedTotalCount / this.flaggedPageSize) || 1;
  }

  get whitelistTotalPages(): number {
    return Math.ceil(this.whitelistTotalCount / this.whitelistPageSize) || 1;
  }
}

