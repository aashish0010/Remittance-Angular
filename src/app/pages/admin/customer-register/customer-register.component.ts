import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CustomerModel } from '../../../core/models/customer.models';
import { CountryInfo } from '../../../core/models/common.models';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

interface DocumentUpload {
  documentType: string;
  documentNumber: string;
  requiredSides: number;
  issuingCountry: string;
  frontImage: File | null;
  backImage: File | null;
  frontPreview: string | null;
  backPreview: string | null;
}

interface CustomerForm {
  fullName: string;
  dateOfBirth: string;
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
    fullName: '', dateOfBirth: '', gender: 'Male', nationality: '',
    email: '', phone: '', country: '', contactCountry: '', city: '', state: '', postalCode: '', address: '',
  };
}

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatButtonModule, MatIconModule,
    MatTooltipModule, MatChipsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatCardModule, MatProgressSpinnerModule, MatTabsModule,
    MatDatepickerModule, DatePipe, SearchableSelectDirective,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.scss',
})
export class CustomerRegisterComponent implements OnInit {
  customers: CustomerModel[] = [];
  filteredCustomers: CustomerModel[] = [];
  displayedColumns = ['fullName', 'email', 'phone', 'country', 'kyc', 'createdAt', 'actions'];
  searchString = '';
  loading = true;
  countries: CountryInfo[] = [];

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
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadCustomers();
    this.loadCountries();
    this.loadDocumentTypeConfigs();
  }

  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadCustomers(): void {
    this.loading = true;
    this.api.getCustomers().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.customers = res.data;
          this.applyFilter();
        } else {
          this.customers = [];
          this.filteredCustomers = [];
          this.notify.error(res?.message || 'Failed to load customers.');
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.filteredCustomers = [];
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

  applyFilter(): void {
    const s = this.searchString.toLowerCase();
    this.filteredCustomers = !s
      ? [...this.customers]
      : this.customers.filter(c =>
          c.fullName.toLowerCase().includes(s) ||
          (c.email || '').toLowerCase().includes(s) ||
          (c.phone || '').toLowerCase().includes(s) ||
          c.country.toLowerCase().includes(s)
        );
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
    this.showFormPopup = true;
  }

  openEditPopup(customer: CustomerModel): void {
    this.isEditing = true;
    this.editingId = customer.id;
    this.form = {
      fullName: customer.fullName,
      dateOfBirth: customer.dateOfBirth || '',
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
    this.showFormPopup = true;
  }

  closeFormPopup(): void { this.showFormPopup = false; }

  saveCustomer(): void {
    this.formError = '';
    const f = this.form;
    if (!f.fullName || !f.country) {
      this.formError = 'Full Name and Country are required.';
      return;
    }
    this.saving = true;
    const dto: any = {
      fullName: f.fullName,
      dateOfBirth: f.dateOfBirth || null,
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
