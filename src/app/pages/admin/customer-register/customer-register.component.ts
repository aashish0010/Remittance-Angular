import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { DatePicker } from 'primeng/datepicker';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { CustomerModel } from '../../../core/models/customer.models';
import { CountryInfo } from '../../../core/models/common.models';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

interface DocumentUpload {
  documentType: string;
  documentNumber: string;
  requiredSides: number;
  issuingCountry: string;
  issueDate: Date | null;
  expiryDate: Date | null;
  frontImage: File | null;
  backImage: File | null;
  frontPreview: string | null;
  backPreview: string | null;
}

interface CustomerForm {
  fullName: string;
  dateOfBirth: Date | null;
  gender: string;
  nationality: string;
  email: string;
  phone: string;
  country: string;
  contactCountry: string;
  city: string;
  state: string;
  postalCode: string;
  address: string;
}

function emptyForm(): CustomerForm {
  return {
    fullName: '', dateOfBirth: null, gender: 'Male', nationality: '',
    email: '', phone: '', country: '', contactCountry: '', city: '', state: '', postalCode: '', address: '',
  };
}

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [
    CommonModule, FormsModule, DatePipe, SearchableSelectDirective, DatePicker,
  ],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.scss',
})
export class CustomerRegisterComponent implements OnInit, OnDestroy {
  customers: CustomerModel[] = [];
  displayedColumns = ['fullName', 'email', 'phone', 'country', 'kyc', 'createdAt', 'actions'];
  searchString = '';
  loading = true;
  countries: CountryInfo[] = [];

  // Pagination
  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;
  searchDebounce = new Subject<string>();
  private destroy$ = new Subject<void>();

  // Detail popup
  showDetail = false;
  detailCustomer: CustomerModel | null = null;

  // Create/Edit popup
  showFormPopup = false;
  isEditing = false;
  editingId = 0;
  saving = false;
  formError = '';
  form: CustomerForm = emptyForm();

  // Document upload
  documentUploads: DocumentUpload[] = [];
  documentTypeConfigs: { name: string; requiredSides: number }[] = [];
  uploadingDocs = false;
  existingDocs: any[] = [];
  loadingExistingDocs = false;

  // Action menu / delete confirm
  actionMenuId: number | null = null;
  deleteConfirmId: number | null = null;

  // Document viewer
  showDocViewer = false;
  docViewerCustomer: CustomerModel | null = null;
  customerDocs: any[] = [];
  loadingDocs = false;
  docImageUrl = '';
  showImagePopup = false;

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
    private exportService: ExportService,
    public appSettings: AppSettingsService,
  ) {}

  /** Tabs shown in the create/edit popup — Documents tab hidden when skipDocumentUpload or KYC disabled */
  get availableTabs(): string[] {
    const tabs = ['Personal', 'Contact'];
    if (this.appSettings.kycEnabled && !this.appSettings.skipDocumentUpload) {
      tabs.push('Documents');
    }
    return tabs;
  }

  ngOnInit(): void {
    this.appSettings.load();
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(s => {
      this.searchString = s;
      this.pageIndex = 0;
      this.loadCustomers();
    });
    this.loadCustomers();
    this.loadCountries();
    this.loadDocumentTypeConfigs();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadCustomers(): void {
    this.loading = true;
    this.api.getCustomersPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.customers = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.customers = [];
          this.totalCount = 0;
          this.notify.error(res?.message || 'Failed to load customers.');
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.totalCount = 0;
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  loadCountries(): void {
    this.api.getCountries().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.countries = res.data;
        }
      },
      error: () => {
        this.notify.warn('Could not load countries list.');
      },
    });
  }

  // Tab state for form popup
  activeTab = 'Personal';

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize) || 1;
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages) return;
    this.pageIndex = page;
    this.loadCustomers();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = +size;
    this.pageIndex = 0;
    this.loadCustomers();
  }

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCustomers();
  }

  exportData(format: string): void {
    this.exportService.export('api/admin/customers/export', { search: this.searchString }, format as any);
  }

  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(customer: CustomerModel): void {
    this.detailCustomer = customer;
    this.showDetail = true;
  }

  closeDetail(): void { this.showDetail = false; }

  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreatePopup(): void {
    this.form = emptyForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = '';
    this.documentUploads = [];
    this.existingDocs = [];
    this.showFormPopup = true;
  }

  openEditPopup(customer: CustomerModel): void {
    this.isEditing = true;
    this.editingId = customer.id;
    this.form = {
      fullName: customer.fullName,
      dateOfBirth: customer.dateOfBirth ? new Date(customer.dateOfBirth) : null,
      gender: customer.gender || 'Male',
      nationality: customer.nationality || '',
      email: customer.email || '',
      phone: customer.phone || '',
      country: customer.country,
      contactCountry: (customer as any).contactCountry || '',
      city: customer.city || '',
      state: customer.state || '',
      postalCode: customer.postalCode || '',
      address: customer.address || '',
    };
    this.formError = '';
    this.documentUploads = [];
    this.existingDocs = [];
    this.showFormPopup = true;
    this.loadExistingDocs(customer.id);
  }

  private loadExistingDocs(customerId: number): void {
    this.loadingExistingDocs = true;
    this.api.getCustomerDocuments(customerId).subscribe({
      next: res => {
        this.existingDocs = res?.success && res.data ? res.data : [];
        this.loadingExistingDocs = false;
      },
      error: () => {
        this.existingDocs = [];
        this.loadingExistingDocs = false;
      },
    });
  }

  closeFormPopup(): void { this.showFormPopup = false; }

  // Validation patterns
  private safeNamePattern = /^[\p{L}\s\-'.]+$/u;
  private safePhonePattern = /^[\d\s\+\-()]+$/;
  private safeAddressPattern = /^[\p{L}\d\s\-'.,/#]+$/u;
  private safePostalCodePattern = /^[\p{L}\d\s\-]+$/u;

  // Date constraints for PrimeNG DatePicker
  today = new Date();
  get maxDobDate(): Date {
    const d = new Date();
    d.setFullYear(d.getFullYear() - this.appSettings.minimumAge);
    return d;
  }
  minExpiryDate: Date = new Date();

  private formatDate(d: Date | null): string | null {
    if (!d) return null;
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  validateSpecialChars(value: string, pattern: RegExp, fieldName: string): string | null {
    if (value && !pattern.test(value)) {
      return `${fieldName} contains invalid special characters.`;
    }
    return null;
  }

  onCountryChange(): void {
    // Auto-set nationality to match country if empty
  }

  saveCustomer(): void {
    this.formError = '';
    const f = this.form;
    if (!f.fullName || !f.country) {
      this.formError = 'Full Name and Country are required.';
      return;
    }
    if (!f.nationality) {
      this.formError = 'Nationality is required.';
      return;
    }

    // Special character validation
    const checks = [
      this.validateSpecialChars(f.fullName, this.safeNamePattern, 'Full Name'),
      this.validateSpecialChars(f.phone, this.safePhonePattern, 'Phone'),
      this.validateSpecialChars(f.nationality, this.safeNamePattern, 'Nationality'),
      this.validateSpecialChars(f.city, this.safeNamePattern, 'City'),
      this.validateSpecialChars(f.state, this.safeNamePattern, 'State'),
      this.validateSpecialChars(f.postalCode, this.safePostalCodePattern, 'Postal Code'),
      this.validateSpecialChars(f.address, this.safeAddressPattern, 'Address'),
    ];
    const firstError = checks.find(e => e !== null);
    if (firstError) {
      this.formError = firstError;
      return;
    }

    // Date validations
    const minAge = this.appSettings.minimumAge;
    if (f.dateOfBirth && f.dateOfBirth > this.maxDobDate) {
      this.formError = `Customer must be at least ${minAge} years old.`;
      this.activeTab = 'Personal';
      return;
    }

    // Document date validations
    const now = new Date();
    for (const doc of this.documentUploads) {
      if (doc.issueDate && doc.issueDate >= now) {
        this.formError = 'Document issue date must be in the past.';
        this.activeTab = 'Documents';
        return;
      }
      if (doc.expiryDate && doc.expiryDate <= now) {
        this.formError = 'Document expiry date must be in the future.';
        this.activeTab = 'Documents';
        return;
      }
    }

    // Document validation — skipped when KYC is disabled or skipDocumentUpload is on
    const docRequired = this.appSettings.kycEnabled && !this.appSettings.skipDocumentUpload;
    if (docRequired) {
      // At least one document with front image is mandatory for new customers
      if (!this.isEditing) {
        const hasValidDoc = this.documentUploads.some(d => d.documentType && d.documentNumber && d.frontImage);
        if (!hasValidDoc) {
          this.formError = 'At least one document with type, number, and front image is required.';
          this.activeTab = 'Documents';
          return;
        }
      }
      // For editing, require a document if none exist yet
      if (this.isEditing && this.existingDocs.length === 0) {
        const hasValidDoc = this.documentUploads.some(d => d.documentType && d.documentNumber && d.frontImage);
        if (!hasValidDoc) {
          this.formError = 'At least one document with type, number, and front image is required.';
          this.activeTab = 'Documents';
          return;
        }
      }
    }
    this.saving = true;
    const dto: any = {
      fullName: f.fullName,
      dateOfBirth: this.formatDate(f.dateOfBirth),
      gender: f.gender || null,
      nationality: f.nationality || null,
      email: f.email || null,
      phone: f.phone || null,
      country: f.country,
      contactCountry: f.contactCountry || null,
      city: f.city || null,
      state: f.state || null,
      postalCode: f.postalCode || null,
      address: f.address || null,
    };

    const obs = this.isEditing
      ? this.api.updateCustomer(this.editingId, dto)
      : this.api.createCustomer(dto);

    obs.subscribe({
      next: async res => {
        if (res?.success) {
          // Upload documents if any were added
          const customerId = res.data?.id || this.editingId;
          if (this.documentUploads.length > 0 && customerId) {
            try {
              this.uploadingDocs = true;
              await this.uploadDocuments(customerId);
              this.notify.success(this.isEditing ? 'Customer updated with documents.' : 'Customer created with documents.');
            } catch {
              this.notify.warn('Customer saved but some documents failed to upload.');
            }
            this.uploadingDocs = false;
          } else {
            this.notify.success(this.isEditing ? 'Customer updated.' : 'Customer created.');
          }
          this.showFormPopup = false;
          this.loadCustomers();
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
  // Document Type Configs
  // ---------------------------------------------------------------------------
  loadDocumentTypeConfigs(): void {
    this.api.getReferenceDocumentTypes().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.documentTypeConfigs = res.data.map((d: any) => ({
            name: d.name,
            requiredSides: d.requiredSides || 1,
          }));
        }
      },
      error: () => {
        this.notify.warn('Could not load document types.');
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Document Upload helpers
  // ---------------------------------------------------------------------------
  addDocumentRow(): void {
    this.documentUploads.push({
      documentType: '',
      documentNumber: '',
      requiredSides: 1,
      issuingCountry: '',
      issueDate: null,
      expiryDate: null,
      frontImage: null,
      backImage: null,
      frontPreview: null,
      backPreview: null,
    });
  }

  removeDocumentRow(index: number): void {
    this.documentUploads.splice(index, 1);
  }

  onDocTypeChange(doc: DocumentUpload): void {
    const config = this.documentTypeConfigs.find(d => d.name === doc.documentType);
    if (config) {
      doc.requiredSides = config.requiredSides;
    }
  }

  onFileSelected(doc: DocumentUpload, side: 'front' | 'back', event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    if (side === 'front') {
      doc.frontImage = file;
      doc.frontPreview = URL.createObjectURL(file);
    } else {
      doc.backImage = file;
      doc.backPreview = URL.createObjectURL(file);
    }
  }

  private async uploadDocuments(customerId: number): Promise<void> {
    for (const doc of this.documentUploads) {
      if (!doc.documentType || !doc.frontImage) continue;
      const formData = new FormData();
      formData.append('customerId', customerId.toString());
      formData.append('documentType', doc.documentType);
      formData.append('documentNumber', doc.documentNumber);
      formData.append('requiredSides', doc.requiredSides.toString());
      formData.append('issuingCountry', doc.issuingCountry || '');
      const issueDateStr = this.formatDate(doc.issueDate);
      const expiryDateStr = this.formatDate(doc.expiryDate);
      if (issueDateStr) formData.append('issueDate', issueDateStr);
      if (expiryDateStr) formData.append('expiryDate', expiryDateStr);
      formData.append('frontImage', doc.frontImage);
      if (doc.backImage && doc.requiredSides >= 2) {
        formData.append('backImage', doc.backImage);
      }
      await this.api.uploadDocument(formData).toPromise();
    }
  }

  // ---------------------------------------------------------------------------
  // Document Viewer
  // ---------------------------------------------------------------------------
  viewDocuments(customer: CustomerModel): void {
    this.docViewerCustomer = customer;
    this.showDocViewer = true;
    this.loadingDocs = true;
    this.customerDocs = [];
    this.api.getCustomerDocuments(customer.id).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.customerDocs = res.data;
        }
        this.loadingDocs = false;
      },
      error: () => {
        this.loadingDocs = false;
      },
    });
  }

  closeDocViewer(): void {
    this.showDocViewer = false;
    this.docViewerCustomer = null;
  }

  getDocImageFullUrl(path: string): string {
    if (!path) return '';
    // API base url without trailing slash + path
    const base = this.api.getBaseUrl().replace(/\/$/, '');
    return `${base}${path}`;
  }

  openImagePopup(path: string): void {
    this.docImageUrl = this.getDocImageFullUrl(path);
    this.showImagePopup = true;
  }

  closeImagePopup(): void {
    this.showImagePopup = false;
    this.docImageUrl = '';
  }

  // ---------------------------------------------------------------------------
  // KYC
  // ---------------------------------------------------------------------------
  approveKyc(customer: CustomerModel): void {
    this.api.approveKyc(customer.id).subscribe(r => {
      if (r?.success) {
        customer.isKycVerified = true;
        this.notify.success(`KYC approved for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  rejectKyc(customer: CustomerModel): void {
    this.api.rejectKyc(customer.id).subscribe(r => {
      if (r?.success) {
        customer.isKycVerified = false;
        this.notify.warn(`KYC rejected for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Toggle Status
  // ---------------------------------------------------------------------------
  toggleCustomerStatus(customer: CustomerModel): void {
    this.api.toggleCustomerStatus(customer.id).subscribe(r => {
      if (r?.success) {
        const status = customer.isActive ? 'disabled' : 'enabled';
        this.notify.success(`Customer '${customer.fullName}' ${status}.`);
        this.loadCustomers();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------
  deleteCustomer(customer: CustomerModel): void {
    this.api.deleteCustomer(customer.id).subscribe(r => {
      if (r?.success) {
        this.notify.success(`Customer '${customer.fullName}' deleted.`);
        this.loadCustomers();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }
}
