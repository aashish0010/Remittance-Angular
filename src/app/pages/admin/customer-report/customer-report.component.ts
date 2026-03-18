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
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CustomerModel } from '../../../core/models/customer.models';

@Component({
  selector: 'app-customer-report',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatButtonModule, MatIconModule,
    MatTooltipModule, MatChipsModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatProgressSpinnerModule, DatePipe,
  ],
  templateUrl: './customer-report.component.html',
  styleUrl: './customer-report.component.scss',
})
export class CustomerReportComponent implements OnInit {
  customers: CustomerModel[] = [];
  filteredCustomers: CustomerModel[] = [];
  displayedColumns = ['fullName', 'email', 'phone', 'country', 'kyc', 'createdAt', 'actions'];
  searchString = '';
  loading = true;

  // Summary stats
  totalCustomers = 0;
  kycVerified = 0;
  kycPending = 0;

  // Detail popup
  showDetail = false;
  detailCustomer: CustomerModel | null = null;

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.loading = true;
    this.api.getCustomers().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.customers = res.data;
          this.computeStats();
          this.applyFilter();
        } else {
          this.customers = [];
          this.filteredCustomers = [];
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.filteredCustomers = [];
        this.loading = false;
      },
    });
  }

  private computeStats(): void {
    this.totalCustomers = this.customers.length;
    this.kycVerified = this.customers.filter(c => c.isKycVerified).length;
    this.kycPending = this.customers.filter(c => !c.isKycVerified).length;
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

  // Detail
  viewDetail(customer: CustomerModel): void {
    this.detailCustomer = customer;
    this.showDetail = true;
  }

  closeDetail(): void { this.showDetail = false; }

  // KYC Actions
  approveKyc(customer: CustomerModel): void {
    this.api.approveKyc(customer.id).subscribe(r => {
      if (r?.success) {
        customer.isKycVerified = true;
        this.computeStats();
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
        this.computeStats();
        this.notify.warn(`KYC rejected for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }
}
