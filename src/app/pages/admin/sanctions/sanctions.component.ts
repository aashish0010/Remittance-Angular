import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-sanctions',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatTableModule, MatButtonModule, MatIconModule, MatTabsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatChipsModule, MatTooltipModule, MatPaginatorModule, MatProgressSpinnerModule,
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

  // Screening Results
  screenings: any[] = [];
  screeningsTotalCount = 0;
  screeningsPage = 1;
  screeningsPageSize = 20;
  screeningsSearch = '';
  loadingScreenings = false;

  // Entry Form
  showEntryForm = false;
  editingEntry: any = null;
  entryForm = {
    name: '',
    entryType: 'Individual',
    listSource: 'Custom',
    aliases: '',
    nationality: '',
    remarks: ''
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
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
    this.loadEntries();
    this.loadCountries();
    this.loadScreenings();
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

  onEntriesPage(event: PageEvent): void {
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
        remarks: entry.remarks || ''
      };
    } else {
      this.entryForm = { name: '', entryType: 'Individual', listSource: 'Custom', aliases: '', nationality: '', remarks: '' };
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
    if (!confirm(`Delete sanction entry "${entry.name}"?`)) return;
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
    if (!confirm(`Remove "${country.countryName}" from sanctioned countries?`)) return;
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
  }

  // ---- Screening Results ----
  loadScreenings(): void {
    this.loadingScreenings = true;
    this.api.getScreeningResultsPaged({ page: this.screeningsPage, pageSize: this.screeningsPageSize, search: this.screeningsSearch })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          if (res?.success && res.data) {
            this.screenings = res.data.items || [];
            this.screeningsTotalCount = res.data.totalCount || 0;
          }
          this.loadingScreenings = false;
        },
        error: () => this.loadingScreenings = false
      });
  }

  onScreeningsSearch(): void {
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.screeningsPage = 1;
      this.loadScreenings();
    }, 400);
  }

  onScreeningsPage(event: PageEvent): void {
    this.screeningsPage = event.pageIndex + 1;
    this.screeningsPageSize = event.pageSize;
    this.loadScreenings();
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
            this.loadScreenings();
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
}
