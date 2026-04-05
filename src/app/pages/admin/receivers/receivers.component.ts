import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ReceiverModel, CustomerModel } from '../../../core/models/customer.models';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

interface ReceiverForm {
  customerId: number | null;
  fullName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  bankName: string;
  accountNumber: string;
  relationship: string;
}

function emptyForm(): ReceiverForm {
  return {
    customerId: null, fullName: '', phone: '', email: '',
    country: '', city: '', bankName: '', accountNumber: '', relationship: '',
  };
}

@Component({
  selector: 'app-receivers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchableSelectDirective,
  ],
  templateUrl: './receivers.component.html',
  styleUrl: './receivers.component.scss',
})
export class ReceiversComponent implements OnInit, OnDestroy {
  receivers: ReceiverModel[] = [];
  customers: CustomerModel[] = [];
  displayedColumns = ['customerName', 'fullName', 'phone', 'country', 'bankName', 'accountNumber', 'status', 'actions'];
  searchString = '';
  loading = true;
  deleteConfirmId: number | null = null;

  // Server-side pagination
  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;
  searchDebounce = new Subject<string>();
  private destroy$ = new Subject<void>();

  // Customer filter
  filterCustomerId: number | null = null;

  // Form popup
  showFormPopup = false;
  isEditing = false;
  editingId = 0;
  saving = false;
  formError = '';
  form: ReceiverForm = emptyForm();

  // Search popup
  showSearchPopup = false;
  searchQuery = '';
  searchResults: ReceiverModel[] = [];
  searching = false;

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
    private exportService: ExportService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(s => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadReceivers();
    });
    this.loadCustomers();
    this.loadReceivers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadReceivers(): void {
    this.loading = true;
    this.api.getReceiversPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.receivers = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.receivers = [];
          this.totalCount = 0;
          this.notify.error(res?.message || 'Failed to load receivers.');
        }
        this.loading = false;
      },
      error: () => {
        this.receivers = [];
        this.totalCount = 0;
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  loadCustomers(): void {
    this.api.getCustomers().subscribe(res => {
      if (res?.success && res.data) {
        this.customers = res.data;
      }
    });
  }

  filterByCustomer(): void {
    this.pageIndex = 0;
    this.loadReceivers();
  }

  onPageChange(event: { pageIndex: number; pageSize: number; length: number }): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadReceivers();
  }

  exportData(format: string): void {
    this.exportService.export('api/admin/receivers/export', { search: this.searchString }, format as any);
  }

  // ---------------------------------------------------------------------------
  // Search Popup
  // ---------------------------------------------------------------------------
  openSearchPopup(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.showSearchPopup = true;
  }

  closeSearchPopup(): void {
    this.showSearchPopup = false;
  }

  performSearch(): void {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.searchResults = [];
      return;
    }
    this.searching = true;
    // Search across all receivers by name or phone
    this.searchResults = this.receivers.filter(r =>
      r.fullName.toLowerCase().includes(q) ||
      r.phone.toLowerCase().includes(q) ||
      r.customerName.toLowerCase().includes(q)
    );
    this.searching = false;
  }

  selectSearchResult(receiver: ReceiverModel): void {
    this.closeSearchPopup();
    this.openEditPopup(receiver);
  }

  // ---------------------------------------------------------------------------
  // Create / Edit
  // ---------------------------------------------------------------------------
  openCreatePopup(): void {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = '';
    this.showFormPopup = true;
  }

  openEditPopup(receiver: ReceiverModel): void {
    this.isEditing = true;
    this.editingId = receiver.id;
    this.form = {
      customerId: receiver.customerId,
      fullName: receiver.fullName,
      phone: receiver.phone,
      email: receiver.email || '',
      country: receiver.country,
      city: receiver.city || '',
      bankName: receiver.bankName || '',
      accountNumber: receiver.accountNumber || '',
      relationship: receiver.relationship || '',
    };
    this.formError = '';
    this.showFormPopup = true;
  }

  closeFormPopup(): void { this.showFormPopup = false; }

  // Validation patterns
  private safeNamePattern = /^[\p{L}\s\-'.]+$/u;
  private safePhonePattern = /^[\d\s\+\-()]+$/;
  private safeAlphanumPattern = /^[\p{L}\d\s\-]+$/u;

  private validateSpecialChars(value: string, pattern: RegExp, fieldName: string): string | null {
    if (value && !pattern.test(value)) {
      return `${fieldName} contains invalid special characters.`;
    }
    return null;
  }

  saveReceiver(): void {
    this.formError = '';
    const f = this.form;
    if (!f.customerId) { this.formError = 'Please select a customer.'; return; }
    if (!f.fullName || !f.phone || !f.country) { this.formError = 'Full Name, Phone and Country are required.'; return; }

    // Special character validation
    const checks = [
      this.validateSpecialChars(f.fullName, this.safeNamePattern, 'Full Name'),
      this.validateSpecialChars(f.phone, this.safePhonePattern, 'Phone'),
      this.validateSpecialChars(f.city, this.safeNamePattern, 'City'),
      this.validateSpecialChars(f.bankName, this.safeNamePattern, 'Bank Name'),
      this.validateSpecialChars(f.accountNumber, this.safeAlphanumPattern, 'Account Number'),
      this.validateSpecialChars(f.relationship, this.safeNamePattern, 'Relationship'),
    ];
    const firstError = checks.find(e => e !== null);
    if (firstError) {
      this.formError = firstError;
      return;
    }

    this.saving = true;
    const dto: any = {
      customerId: f.customerId,
      fullName: f.fullName,
      phone: f.phone,
      email: f.email || null,
      country: f.country,
      city: f.city || null,
      bankName: f.bankName || null,
      accountNumber: f.accountNumber || null,
      relationship: f.relationship || null,
    };

    const obs = this.isEditing
      ? this.api.updateReceiver(this.editingId, dto)
      : this.api.createReceiver(dto);

    obs.subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.isEditing ? 'Receiver updated.' : 'Receiver created.');
          this.showFormPopup = false;
          this.loadReceivers();
        } else {
          this.formError = res?.message || 'Failed.';
        }
        this.saving = false;
      },
      error: () => {
        this.formError = 'Server error.';
        this.saving = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Toggle Status
  // ---------------------------------------------------------------------------
  toggleReceiverStatus(receiver: ReceiverModel): void {
    this.api.toggleReceiverStatus(receiver.id).subscribe(r => {
      if (r?.success) {
        const status = receiver.isActive ? 'disabled' : 'enabled';
        this.notify.success(`Receiver '${receiver.fullName}' ${status}.`);
        this.loadReceivers();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  deleteReceiver(receiver: ReceiverModel): void {
    this.api.deleteReceiver(receiver.id).subscribe(r => {
      if (r?.success) {
        this.notify.success(`Receiver '${receiver.fullName}' deleted.`);
        this.loadReceivers();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }
}
