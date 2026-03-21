import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { ExportService } from '../../../core/services/export.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import {
  AgentModel,
  AgentLocationModel,
  AgentLocationUserModel,
  AgentBankModel,
  AgentBankBranchModel,
  PaymentMethodModel,
  CreateLocationUserRequest,
  UpdateLocationUserRequest,
} from '../../../core/models/agent.models';
import { CountryInfo } from '../../../core/models/common.models';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

// ---------------------------------------------------------------------------
// Form interfaces
// ---------------------------------------------------------------------------
interface CreateAgentForm {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  agentType: string;
  country: string;
  city: string;
  currency: string;
  creditLimit: number;
  licenseNumber: string;
  address: string;
  fundingType: string;
}

interface EditAgentForm {
  businessName: string;
  agentType: string;
  country: string;
  city: string;
  creditLimit: number;
  licenseNumber: string;
  address: string;
  currency: string;
  fundingType: string;
}

function emptyCreateForm(): CreateAgentForm {
  return { fullName: '', email: '', phone: '', businessName: '', agentType: 'SendingAgent', country: '', city: '', currency: 'USD', creditLimit: 0, licenseNumber: '', address: '', fundingType: 'PreFunding' };
}

function emptyEditForm(): EditAgentForm {
  return { businessName: '', agentType: 'SendingAgent', country: '', city: '', creditLimit: 0, licenseNumber: '', address: '', currency: 'USD', fundingType: 'PreFunding' };
}

@Component({
  selector: 'app-agent-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    DecimalPipe,
    DatePipe,
    SearchableSelectDirective,
  ],
  templateUrl: './agent-management.component.html',
  styleUrl: './agent-management.component.scss',
})
export class AgentManagementComponent implements OnInit, OnDestroy {
  // Main table
  agents: AgentModel[] = [];
  displayedColumns = ['businessName', 'country', 'type', 'status', 'actions'];
  searchString = '';
  loading = true;

  // Pagination
  pageIndex = 0;
  pageSize = 20;
  totalCount = 0;
  searchDebounce = new Subject<string>();
  private destroy$ = new Subject<void>();

  // Reference data
  countries: CountryInfo[] = [];
  currencies: string[] = [];
  paymentMethods: PaymentMethodModel[] = [];

  // Detail popup
  showDetail = false;
  detailAgent: AgentModel | null = null;

  // Create popup
  showCreatePopup = false;
  creating = false;
  createError = '';
  newAgent: CreateAgentForm = emptyCreateForm();

  // Edit popup
  showEditPopup = false;
  updating = false;
  editError = '';
  editAgentId = 0;
  editAgentFullName = '';
  editAgentEmail = '';
  editAgent: EditAgentForm = emptyEditForm();

  // Location management
  showLocationPopup = false;
  showLocationForm = false;
  locationAgent: AgentModel | null = null;
  agentLocations: AgentLocationModel[] = [];
  locationFormError = '';
  editingLocationId: number | null = null;
  locName = '';
  locCode: string | null = null;
  locCountry: string | null = null;
  locCity: string | null = null;
  locAddress: string | null = null;
  locPhone: string | null = null;
  locEmail: string | null = null;
  locHours: string | null = null;

  // User management
  showUserPopup = false;
  showUserForm = false;
  userLocation: AgentLocationModel | null = null;
  userFormError = '';
  editingUserId: number | null = null;
  userFullName = '';
  userEmail = '';
  userUserName: string | null = null;
  userPassword: string | null = null;
  userPhone: string | null = null;
  userRole = 'Operator';
  userIsDefault = false;

  // Bank management
  showBankPopup = false;
  showBankForm = false;
  bankAgent: AgentModel | null = null;
  agentBanks: AgentBankModel[] = [];
  bankFormError = '';
  editingBankId: number | null = null;
  bankName = '';
  bankPaymentMethodId: number | null = null;
  bankCode: string | null = null;
  bankSwift: string | null = null;
  bankRouting: string | null = null;
  bankCountry: string | null = null;
  bankCity: string | null = null;
  bankAddress: string | null = null;
  bankPhone: string | null = null;
  bankEmail: string | null = null;
  bankAdditionalInfo: string | null = null;

  // Bank branch management
  showBankBranchPopup = false;
  showBankBranchForm = false;
  bankBranchBank: AgentBankModel | null = null;
  bankBranchFormError = '';
  editingBankBranchId: number | null = null;
  bbName = '';
  bbCode: string | null = null;
  bbSwift: string | null = null;
  bbAddress: string | null = null;
  bbPhone: string | null = null;

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
      this.loadAgents();
    });
    this.loadReferenceData();
    this.loadAgents();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ---------------------------------------------------------------------------
  // Reference data
  // ---------------------------------------------------------------------------
  private loadReferenceData(): void {
    this.api.getCountries().subscribe(r => { if (r?.success && r.data) this.countries = r.data; });
    this.api.getCurrencies().subscribe(r => { if (r?.success && r.data) this.currencies = r.data; });
  }

  getCurrencyForCountry(country: string): string {
    const c = this.countries.find(x => x.name.toLowerCase() === country?.toLowerCase());
    return c?.currency ?? 'USD';
  }

  // ---------------------------------------------------------------------------
  // Agents CRUD
  // ---------------------------------------------------------------------------
  loadAgents(): void {
    this.loading = true;
    this.api.getAgentsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchString }).subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.agents = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.agents = [];
          this.totalCount = 0;
          this.notify.error(res?.message || 'Failed to load agents.');
        }
        this.loading = false;
      },
      error: () => {
        this.agents = [];
        this.totalCount = 0;
        this.notify.error('Could not connect to server.');
        this.loading = false;
      },
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadAgents();
  }

  exportData(format: string): void {
    this.exportService.export('api/admin/agents/export', { search: this.searchString }, format as any);
  }

  // ---------------------------------------------------------------------------
  // Detail
  // ---------------------------------------------------------------------------
  viewDetail(agent: AgentModel): void {
    this.detailAgent = agent;
    this.showDetail = true;
  }

  closeDetail(): void { this.showDetail = false; }

  // ---------------------------------------------------------------------------
  // Status actions
  // ---------------------------------------------------------------------------
  approveAgent(agent: AgentModel): void {
    this.api.approveAgent(agent.id).subscribe(r => {
      if (r?.success) {
        agent.status = 'Approved';
        agent.isApproved = true;
        this.notify.success(`Agent '${agent.businessName}' approved.`);
      } else {
        this.notify.error(r?.message || 'Failed to approve agent.');
      }
    });
  }

  rejectAgent(agent: AgentModel): void {
    this.api.rejectAgent(agent.id).subscribe(r => {
      if (r?.success) {
        agent.status = 'Rejected';
        agent.isApproved = false;
        agent.isActive = false;
        this.notify.warn(`Agent '${agent.businessName}' rejected.`);
      } else {
        this.notify.error(r?.message || 'Failed to reject agent.');
      }
    });
  }

  blockAgent(agent: AgentModel): void {
    this.api.blockAgent(agent.id).subscribe(r => {
      if (r?.success) {
        agent.status = 'Blocked';
        agent.isActive = false;
        this.notify.warn(`Agent '${agent.businessName}' blocked.`);
      } else {
        this.notify.error(r?.message || 'Failed to block agent.');
      }
    });
  }

  unblockAgent(agent: AgentModel): void {
    this.api.unblockAgent(agent.id).subscribe(r => {
      if (r?.success) {
        agent.status = 'Approved';
        agent.isActive = true;
        this.notify.success(`Agent '${agent.businessName}' unblocked.`);
      } else {
        this.notify.error(r?.message || 'Failed to unblock agent.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Create Agent
  // ---------------------------------------------------------------------------
  openCreatePopup(): void {
    this.newAgent = emptyCreateForm();
    this.createError = '';
    this.showCreatePopup = true;
  }

  closeCreatePopup(): void {
    this.showCreatePopup = false;
    this.newAgent = emptyCreateForm();
  }

  createAgent(): void {
    this.createError = '';
    const a = this.newAgent;
    const isSending = a.agentType === 'SendingAgent';
    if (!a.fullName || !a.email || !a.phone || !a.businessName || !a.country || !a.city) {
      this.createError = 'Please fill in all required fields.';
      return;
    }
    if (isSending && a.creditLimit <= 0) {
      this.createError = 'Credit limit must be greater than zero.';
      return;
    }
    this.creating = true;
    const dto = {
      fullName: a.fullName,
      email: a.email,
      phoneNumber: a.phone,
      businessName: a.businessName,
      agentType: a.agentType,
      country: a.country,
      city: a.city,
      creditLimit: isSending ? a.creditLimit : 0,
      licenseNumber: a.licenseNumber,
      address: a.address,
      currency: a.currency,
      fundingType: isSending ? a.fundingType : null,
    };
    this.api.createAgent(dto).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success('Agent created successfully!');
          this.newAgent = emptyCreateForm();
          this.showCreatePopup = false;
          this.loadAgents();
        } else {
          this.createError = res?.message || 'Failed.';
        }
        this.creating = false;
      },
      error: () => {
        this.createError = 'Server error.';
        this.creating = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Edit Agent
  // ---------------------------------------------------------------------------
  startEdit(agent: AgentModel): void {
    this.editAgentId = agent.id;
    this.editAgentFullName = agent.fullName;
    this.editAgentEmail = agent.email;
    this.editAgent = {
      businessName: agent.businessName,
      agentType: agent.agentType,
      country: agent.country,
      city: agent.city,
      creditLimit: agent.creditLimit,
      licenseNumber: agent.licenseNumber ?? '',
      address: agent.address ?? '',
      currency: agent.currency ?? this.getCurrencyForCountry(agent.country),
      fundingType: agent.fundingType ?? 'PreFunding',
    };
    this.editError = '';
    this.showEditPopup = true;
  }

  closeEditPopup(): void { this.showEditPopup = false; }

  updateAgent(): void {
    this.editError = '';
    const e = this.editAgent;
    if (!e.businessName || !e.country) { this.editError = 'Please fill in all required fields.'; return; }
    if (e.agentType === 'SendingAgent' && e.creditLimit <= 0) { this.editError = 'Credit limit must be greater than zero.'; return; }
    this.updating = true;
    const dto = {
      businessName: e.businessName,
      country: e.country,
      city: e.city,
      agentType: e.agentType,
      creditLimit: e.creditLimit,
      licenseNumber: e.licenseNumber,
      address: e.address,
      currency: e.currency,
      fundingType: e.fundingType,
    };
    this.api.updateAgent(this.editAgentId, dto).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(`Agent '${e.businessName}' updated.`);
          this.showEditPopup = false;
          this.loadAgents();
        } else {
          this.editError = res?.message || 'Failed.';
        }
        this.updating = false;
      },
      error: (err) => {
        this.editError = `Error: ${err.message || 'Server error'}`;
        this.updating = false;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Delete Agent
  // ---------------------------------------------------------------------------
  deleteAgent(agent: AgentModel): void {
    this.api.deleteAgent(agent.id).subscribe(r => {
      if (r?.success) {
        this.notify.success(`Agent '${agent.businessName}' deleted.`);
        this.loadAgents();
      } else {
        this.notify.error(r?.message || 'Failed to delete agent.');
      }
    });
  }

  // ===========================================================================
  // Location Management
  // ===========================================================================
  openLocationManagement(agent: AgentModel): void {
    this.locationAgent = agent;
    this.loadPaymentMethods();
    this.loadAgentLocations(agent.id);
    this.showLocationPopup = true;
  }

  closeLocationPopup(): void { this.showLocationPopup = false; }

  private loadPaymentMethods(): void {
    if (this.paymentMethods.length) return;
    this.api.getPaymentMethods().subscribe(r => {
      if (r?.success && r.data) this.paymentMethods = r.data;
    });
  }

  private loadAgentLocations(agentId: number): void {
    this.api.getAgentLocations(agentId).subscribe(r => {
      if (r?.success && r.data) this.agentLocations = r.data;
      else this.agentLocations = [];
    });
  }

  openLocationForm(existing: AgentLocationModel | null): void {
    this.locationFormError = '';
    if (existing) {
      this.editingLocationId = existing.id;
      this.locName = existing.locationName;
      this.locCode = existing.locationCode ?? null;
      this.locCountry = existing.country ?? null;
      this.locCity = existing.city ?? null;
      this.locAddress = existing.address ?? null;
      this.locPhone = existing.contactPhone ?? null;
      this.locEmail = existing.contactEmail ?? null;
      this.locHours = existing.operatingHours ?? null;
    } else {
      this.editingLocationId = null;
      this.locName = '';
      this.locCode = null;
      this.locCountry = this.locationAgent?.country ?? null;
      this.locCity = null;
      this.locAddress = null;
      this.locPhone = null;
      this.locEmail = null;
      this.locHours = null;
    }
    this.showLocationForm = true;
  }

  closeLocationForm(): void { this.showLocationForm = false; }

  saveLocation(): void {
    this.locationFormError = '';
    if (!this.locName?.trim()) { this.locationFormError = 'Location name is required.'; return; }
    const pmId = this.paymentMethods[0]?.id ?? 1;
    const payload: any = {
      agentId: this.locationAgent?.id,
      paymentMethodId: pmId,
      locationName: this.locName,
      locationCode: this.locCode,
      country: this.locCountry,
      city: this.locCity,
      address: this.locAddress,
      contactPhone: this.locPhone,
      contactEmail: this.locEmail,
      operatingHours: this.locHours,
    };
    if (this.editingLocationId != null) {
      this.api.updateAgentLocation(this.editingLocationId, payload).subscribe(r => {
        if (r?.success) {
          this.notify.success('Location updated.');
          this.showLocationForm = false;
          if (this.locationAgent) this.loadAgentLocations(this.locationAgent.id);
        } else {
          this.locationFormError = r?.message || 'Failed.';
        }
      });
    } else {
      this.api.createAgentLocation(payload).subscribe(r => {
        if (r?.success) {
          this.notify.success('Location added.');
          this.showLocationForm = false;
          if (this.locationAgent) this.loadAgentLocations(this.locationAgent.id);
        } else {
          this.locationFormError = r?.message || 'Failed.';
        }
      });
    }
  }

  toggleLocation(id: number): void {
    this.api.toggleAgentLocation(id).subscribe(r => {
      if (r?.success) {
        this.notify.success(r.message || 'Location toggled.');
        if (this.locationAgent) this.loadAgentLocations(this.locationAgent.id);
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  deleteLocation(id: number): void {
    this.api.deleteAgentLocation(id).subscribe(r => {
      if (r?.success) {
        this.notify.success('Location deleted.');
        if (this.locationAgent) this.loadAgentLocations(this.locationAgent.id);
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  // ===========================================================================
  // User Management (Location Users)
  // ===========================================================================
  openUserManagement(loc: AgentLocationModel): void {
    this.userLocation = loc;
    this.showUserPopup = true;
  }

  closeUserPopup(): void { this.showUserPopup = false; }

  openUserForm(existing: AgentLocationUserModel | null): void {
    this.userFormError = '';
    if (existing) {
      this.editingUserId = existing.id;
      this.userFullName = existing.fullName;
      this.userEmail = existing.email;
      this.userUserName = existing.userName ?? null;
      this.userPassword = null;
      this.userPhone = existing.phone ?? null;
      this.userRole = existing.role ?? 'Operator';
      this.userIsDefault = existing.isDefault;
    } else {
      this.editingUserId = null;
      this.userFullName = '';
      this.userEmail = '';
      this.userUserName = null;
      this.userPassword = null;
      this.userPhone = null;
      this.userRole = 'Operator';
      this.userIsDefault = false;
    }
    this.showUserForm = true;
  }

  closeUserForm(): void { this.showUserForm = false; }

  saveUser(): void {
    this.userFormError = '';
    if (!this.userFullName?.trim()) { this.userFormError = 'Full name is required.'; return; }
    if (!this.userEmail?.trim()) { this.userFormError = 'Email is required.'; return; }
    if (this.editingUserId == null && !this.userPassword?.trim()) { this.userFormError = 'Password is required.'; return; }

    if (this.editingUserId != null) {
      const dto: UpdateLocationUserRequest = {
        fullName: this.userFullName,
        email: this.userEmail,
        userName: this.userUserName ?? undefined,
        password: this.userPassword ?? undefined,
        phone: this.userPhone ?? undefined,
        role: this.userRole,
        isDefault: this.userIsDefault,
      };
      this.api.updateLocationUser(this.editingUserId, dto).subscribe(r => {
        if (r?.success) {
          this.notify.success('User updated.');
          this.showUserForm = false;
          this.refreshUserLocation();
        } else {
          this.userFormError = r?.message || 'Failed.';
        }
      });
    } else {
      const dto: CreateLocationUserRequest = {
        agentLocationId: this.userLocation?.id ?? 0,
        fullName: this.userFullName,
        email: this.userEmail,
        userName: this.userUserName ?? undefined,
        password: this.userPassword ?? undefined,
        phone: this.userPhone ?? undefined,
        role: this.userRole,
        isDefault: this.userIsDefault,
      };
      this.api.createLocationUser(dto).subscribe(r => {
        if (r?.success) {
          this.notify.success('User added.');
          this.showUserForm = false;
          this.refreshUserLocation();
        } else {
          this.userFormError = r?.message || 'Failed.';
        }
      });
    }
  }

  deleteUser(id: number): void {
    this.api.deleteLocationUser(id).subscribe(r => {
      if (r?.success) {
        this.notify.success('User deleted.');
        this.refreshUserLocation();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  private refreshUserLocation(): void {
    if (!this.locationAgent) return;
    this.api.getAgentLocations(this.locationAgent.id).subscribe(r => {
      if (r?.success && r.data) {
        this.agentLocations = r.data;
        if (this.userLocation) {
          this.userLocation = this.agentLocations.find(l => l.id === this.userLocation!.id) ?? null;
        }
      }
    });
  }

  // ===========================================================================
  // Bank Management
  // ===========================================================================
  openBankManagement(agent: AgentModel): void {
    this.bankAgent = agent;
    this.loadPaymentMethods();
    this.api.getAgentBanks(agent.id).subscribe(r => {
      if (r?.success && r.data) this.agentBanks = r.data;
      else this.agentBanks = [];
      this.showBankPopup = true;
    });
  }

  closeBankPopup(): void { this.showBankPopup = false; }

  openBankForm(existing: AgentBankModel | null): void {
    this.bankFormError = '';
    if (existing) {
      this.editingBankId = existing.id;
      this.bankName = existing.bankName;
      this.bankPaymentMethodId = (existing as any).paymentMethodId ?? null;
      this.bankCode = existing.bankCode ?? null;
      this.bankSwift = existing.swiftCode ?? null;
      this.bankRouting = existing.routingNumber ?? null;
      this.bankCountry = existing.country ?? null;
      this.bankCity = existing.city ?? null;
      this.bankAddress = existing.address ?? null;
      this.bankPhone = existing.contactPhone ?? null;
      this.bankEmail = existing.contactEmail ?? null;
      this.bankAdditionalInfo = existing.additionalInfo ?? null;
    } else {
      this.editingBankId = null;
      this.bankName = '';
      this.bankPaymentMethodId = null;
      this.bankCode = null;
      this.bankSwift = null;
      this.bankRouting = null;
      this.bankCountry = this.bankAgent?.country ?? null;
      this.bankCity = null;
      this.bankAddress = null;
      this.bankPhone = null;
      this.bankEmail = null;
      this.bankAdditionalInfo = null;
    }
    this.showBankForm = true;
  }

  closeBankForm(): void { this.showBankForm = false; }

  saveBank(): void {
    this.bankFormError = '';
    if (!this.bankName?.trim()) { this.bankFormError = 'Bank name is required.'; return; }
    if (!this.bankPaymentMethodId) { this.bankFormError = 'Payment mode is required.'; return; }
    const payload: any = {
      bankName: this.bankName,
      paymentMethodId: this.bankPaymentMethodId,
      bankCode: this.bankCode,
      swiftCode: this.bankSwift,
      routingNumber: this.bankRouting,
      country: this.bankCountry,
      city: this.bankCity,
      address: this.bankAddress,
      contactPhone: this.bankPhone,
      contactEmail: this.bankEmail,
      additionalInfo: this.bankAdditionalInfo,
    };
    if (this.editingBankId != null) {
      this.api.updateAgentBank(this.editingBankId, payload).subscribe(r => {
        if (r?.success) {
          this.notify.success('Bank updated.');
          this.showBankForm = false;
          this.refreshBanks();
        } else {
          this.bankFormError = r?.message || 'Failed.';
        }
      });
    } else {
      payload.agentId = this.bankAgent?.id;
      this.api.createAgentBank(payload).subscribe(r => {
        if (r?.success) {
          this.notify.success('Bank added.');
          this.showBankForm = false;
          this.refreshBanks();
        } else {
          this.bankFormError = r?.message || 'Failed.';
        }
      });
    }
  }

  toggleBank(id: number): void {
    this.api.toggleAgentBank(id).subscribe(r => {
      if (r?.success) { this.notify.success(r.message || 'Bank toggled.'); this.refreshBanks(); }
      else { this.notify.error(r?.message || 'Failed.'); }
    });
  }

  deleteBank(id: number): void {
    this.api.deleteAgentBank(id).subscribe(r => {
      if (r?.success) { this.notify.success('Bank deleted.'); this.refreshBanks(); }
      else { this.notify.error(r?.message || 'Failed.'); }
    });
  }

  private refreshBanks(): void {
    if (!this.bankAgent) return;
    this.api.getAgentBanks(this.bankAgent.id).subscribe(r => {
      if (r?.success && r.data) this.agentBanks = r.data;
    });
  }

  // ===========================================================================
  // Bank Branch Management
  // ===========================================================================
  openBankBranchManagement(bank: AgentBankModel): void {
    this.bankBranchBank = bank;
    this.showBankBranchPopup = true;
  }

  closeBankBranchPopup(): void { this.showBankBranchPopup = false; }

  openBankBranchForm(existing: AgentBankBranchModel | null): void {
    this.bankBranchFormError = '';
    if (existing) {
      this.editingBankBranchId = existing.id;
      this.bbName = existing.branchName;
      this.bbCode = existing.branchCode ?? null;
      this.bbSwift = existing.swiftCode ?? null;
      this.bbAddress = existing.address ?? null;
      this.bbPhone = existing.contactPhone ?? null;
    } else {
      this.editingBankBranchId = null;
      this.bbName = '';
      this.bbCode = null;
      this.bbSwift = null;
      this.bbAddress = null;
      this.bbPhone = null;
    }
    this.showBankBranchForm = true;
  }

  closeBankBranchForm(): void { this.showBankBranchForm = false; }

  saveBankBranch(): void {
    this.bankBranchFormError = '';
    if (!this.bbName?.trim()) { this.bankBranchFormError = 'Branch name is required.'; return; }
    const payload: any = {
      branchName: this.bbName,
      branchCode: this.bbCode,
      swiftCode: this.bbSwift,
      address: this.bbAddress,
      contactPhone: this.bbPhone,
    };
    if (this.editingBankBranchId != null) {
      this.api.updateBankBranch(this.editingBankBranchId, payload).subscribe(r => {
        if (r?.success) {
          this.notify.success('Branch updated.');
          this.showBankBranchForm = false;
          this.refreshBankBranches();
        } else {
          this.bankBranchFormError = r?.message || 'Failed.';
        }
      });
    } else {
      payload.agentBankId = this.bankBranchBank?.id;
      this.api.createBankBranch(payload).subscribe(r => {
        if (r?.success) {
          this.notify.success('Branch added.');
          this.showBankBranchForm = false;
          this.refreshBankBranches();
        } else {
          this.bankBranchFormError = r?.message || 'Failed.';
        }
      });
    }
  }

  deleteBankBranch(id: number): void {
    this.api.deleteBankBranch(id).subscribe(r => {
      if (r?.success) { this.notify.success('Branch deleted.'); this.refreshBankBranches(); }
      else { this.notify.error(r?.message || 'Failed.'); }
    });
  }

  private refreshBankBranches(): void {
    if (!this.bankAgent) return;
    this.api.getAgentBanks(this.bankAgent.id).subscribe(r => {
      if (r?.success && r.data) {
        this.agentBanks = r.data;
        if (this.bankBranchBank) {
          this.bankBranchBank = this.agentBanks.find(b => b.id === this.bankBranchBank!.id) ?? null;
        }
      }
    });
  }
}
