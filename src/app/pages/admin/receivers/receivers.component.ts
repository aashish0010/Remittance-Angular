import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ApiService } from '../../../core/services/api.service';
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
    CommonModule, FormsModule, MatTableModule, MatButtonModule, MatIconModule,
    MatTooltipModule, MatChipsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatCardModule, MatProgressSpinnerModule, SearchableSelectDirective,
  ],
  templateUrl: './receivers.component.html',
  styleUrl: './receivers.component.scss',
})
export class ReceiversComponent implements OnInit {
  receivers: ReceiverModel[] = [];
  filteredReceivers: ReceiverModel[] = [];
  customers: CustomerModel[] = [];
  displayedColumns = ['customerName', 'fullName', 'phone', 'country', 'bankName', 'accountNumber', 'status', 'actions'];
  searchString = '';
  loading = true;

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
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadCustomers();
    this.loadReceivers();
  }

  // ---------------------------------------------------------------------------
  // Load
  // ---------------------------------------------------------------------------
  loadReceivers(): void {
    this.loading = true;
    this.api.getReceivers().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.receivers = res.data;
          this.applyFilter();
        } else {
          this.receivers = [];
          this.filteredReceivers = [];
          this.notify.error(res?.message || 'Failed to load receivers.');
        }
        this.loading = false;
      },
      error: () => {
        this.receivers = [];
        this.filteredReceivers = [];
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

  applyFilter(): void {
    let list = this.receivers;

    // Filter by customer
    if (this.filterCustomerId) {
      list = list.filter(r => r.customerId === this.filterCustomerId);
    }

    // Search text
    const s = this.searchString.toLowerCase();
    if (s) {
      list = list.filter(r =>
        r.fullName.toLowerCase().includes(s) ||
        r.customerName.toLowerCase().includes(s) ||
        r.phone.toLowerCase().includes(s) ||
        r.country.toLowerCase().includes(s) ||
        (r.bankName || '').toLowerCase().includes(s)
      );
    }

    this.filteredReceivers = list;
  }

  filterByCustomer(): void {
    this.applyFilter();
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

  saveReceiver(): void {
    this.formError = '';
    const f = this.form;
    if (!f.customerId) { this.formError = 'Please select a customer.'; return; }
    if (!f.fullName || !f.phone || !f.country) { this.formError = 'Full Name, Phone and Country are required.'; return; }

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
}
