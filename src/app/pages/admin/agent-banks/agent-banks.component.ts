import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDeleteService } from '../../../shared/confirm-delete.service';
import {
  AgentBankModel,
  AgentBankBranchModel,
  AgentModel,
  PaymentMethodModel,
} from '../../../core/models/agent.models';

interface BankForm {
  agentId: number | null;
  paymentMethodId: number | null;
  bankName: string;
  bankCode: string | null;
  swiftCode: string | null;
  routingNumber: string | null;
  country: string | null;
  city: string | null;
  address: string | null;
  contactPhone: string | null;
  contactEmail: string | null;
  additionalInfo: string | null;
}

interface BranchForm {
  agentBankId: number | null;
  branchName: string;
  branchCode: string | null;
  swiftCode: string | null;
  address: string | null;
  contactPhone: string | null;
}

function emptyBankForm(): BankForm {
  return {
    agentId: null, paymentMethodId: null, bankName: '', bankCode: null,
    swiftCode: null, routingNumber: null, country: null, city: null,
    address: null, contactPhone: null, contactEmail: null, additionalInfo: null,
  };
}

function emptyBranchForm(): BranchForm {
  return { agentBankId: null, branchName: '', branchCode: null, swiftCode: null, address: null, contactPhone: null };
}

@Component({
  selector: 'app-agent-banks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agent-banks.component.html',
})
export class AgentBanksComponent implements OnInit, OnDestroy {
  Math = Math;

  // Reference data
  agents: AgentModel[] = [];
  paymentMethods: PaymentMethodModel[] = [];
  loadingAgents = true;

  // Selected agent
  selectedAgentId: number | null = null;
  get selectedAgent(): AgentModel | null {
    return this.agents.find(a => a.id === this.selectedAgentId) ?? null;
  }

  // Banks (server-side)
  banks: AgentBankModel[] = [];
  totalCount = 0;
  loading = false;

  // Filters
  searchString = '';
  filterCountry = '';
  filterPaymentMethodId = '';
  filterStatus = '';
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  // Pagination
  pageIndex = 0;
  pageSize = 20;
  get totalPages(): number { return Math.max(1, Math.ceil(this.totalCount / this.pageSize)); }

  // Stats (from current page result — reset on each load)
  totalActive = 0;
  totalInactive = 0;
  totalBranches = 0;

  // Bank form modal
  showBankModal = false;
  isEditingBank = false;
  editingBankId: number | null = null;
  bankForm: BankForm = emptyBankForm();
  bankFormError = '';
  savingBank = false;

  // Branch management modal
  showBranchModal = false;
  selectedBank: AgentBankModel | null = null;
  showBranchForm = false;
  isEditingBranch = false;
  editingBranchId: number | null = null;
  branchForm: BranchForm = emptyBranchForm();
  branchFormError = '';
  savingBranch = false;

  constructor(
    private api: ApiService,
    private notify: NotificationService,
    private confirmDelete: ConfirmDeleteService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.pageIndex = 0;
      this.loadBanks();
    });

    this.api.getAgents().subscribe(r => {
      if (r?.success && r.data) {
        this.agents = r.data;
        // Auto-select from query param after agents loaded
        const qpId = this.route.snapshot.queryParamMap.get('agentId');
        if (qpId) {
          this.selectedAgentId = +qpId;
          this.loadBanks();
          this.loadAllBanksForStats();
        }
      }
      this.loadingAgents = false;
    });

    this.api.getPaymentMethods().subscribe(r => {
      if (r?.success && r.data) this.paymentMethods = r.data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAgentChange(): void {
    this.pageIndex = 0;
    this.searchString = '';
    this.filterCountry = '';
    this.filterPaymentMethodId = '';
    this.filterStatus = '';
    this.banks = [];
    this.totalCount = 0;
    this.totalActive = 0;
    this.totalInactive = 0;
    this.totalBranches = 0;
    if (this.selectedAgentId) {
      this.loadBanks();
      this.loadAllBanksForStats();
    }
  }

  private loadAllBanksForStats(): void {
    if (!this.selectedAgentId) return;
    this.api.getAgentBanksPaged(this.selectedAgentId, { page: 1, pageSize: 1000 }).subscribe(r => {
      if (r?.success && r.data) {
        const all = r.data.items;
        this.totalActive = all.filter(b => b.isActive).length;
        this.totalInactive = all.filter(b => !b.isActive).length;
        this.totalBranches = all.reduce((acc, b) => acc + (b.branches?.length ?? 0), 0);
      }
    });
  }

  loadBanks(): void {
    if (!this.selectedAgentId) return;
    this.loading = true;
    const isActive = this.filterStatus === 'active' ? true : this.filterStatus === 'inactive' ? false : null;
    this.api.getAgentBanksPaged(this.selectedAgentId, {
      page: this.pageIndex + 1,
      pageSize: this.pageSize,
      search: this.searchString || undefined,
      country: this.filterCountry || undefined,
      paymentMethodId: this.filterPaymentMethodId ? +this.filterPaymentMethodId : undefined,
      isActive,
    }).subscribe({
      next: r => {
        if (r?.success && r.data) {
          this.banks = r.data.items;
          this.totalCount = r.data.totalCount;
        } else {
          this.banks = [];
          this.totalCount = 0;
        }
        this.loading = false;
      },
      error: () => {
        this.banks = [];
        this.totalCount = 0;
        this.loading = false;
        this.notify.error('Failed to load banks.');
      },
    });
  }

  onSearchChange(): void {
    this.searchSubject.next(this.searchString);
  }

  onFilterChange(): void {
    this.pageIndex = 0;
    this.loadBanks();
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.pageIndex = page;
      this.loadBanks();
    }
  }

  onPageSizeChange(size: number): void {
    this.pageSize = +size;
    this.pageIndex = 0;
    this.loadBanks();
  }

  clearFilters(): void {
    this.searchString = '';
    this.filterCountry = '';
    this.filterPaymentMethodId = '';
    this.filterStatus = '';
    this.pageIndex = 0;
    this.loadBanks();
  }

  get hasActiveFilters(): boolean {
    return !!(this.searchString || this.filterCountry || this.filterPaymentMethodId || this.filterStatus);
  }

  // ─── Bank CRUD ────────────────────────────────────────────────────────────

  openAddBank(): void {
    this.isEditingBank = false;
    this.editingBankId = null;
    this.bankForm = { ...emptyBankForm(), agentId: this.selectedAgentId, country: this.selectedAgent?.country ?? null };
    this.bankFormError = '';
    this.showBankModal = true;
  }

  openEditBank(bank: AgentBankModel): void {
    this.isEditingBank = true;
    this.editingBankId = bank.id;
    this.bankForm = {
      agentId: bank.agentId,
      paymentMethodId: bank.paymentMethodId ?? null,
      bankName: bank.bankName,
      bankCode: bank.bankCode ?? null,
      swiftCode: bank.swiftCode ?? null,
      routingNumber: bank.routingNumber ?? null,
      country: bank.country ?? null,
      city: bank.city ?? null,
      address: bank.address ?? null,
      contactPhone: bank.contactPhone ?? null,
      contactEmail: bank.contactEmail ?? null,
      additionalInfo: bank.additionalInfo ?? null,
    };
    this.bankFormError = '';
    this.showBankModal = true;
  }

  closeBankModal(): void { this.showBankModal = false; }

  saveBank(): void {
    this.bankFormError = '';
    if (!this.bankForm.bankName?.trim()) { this.bankFormError = 'Bank name is required.'; return; }
    if (!this.bankForm.paymentMethodId) { this.bankFormError = 'Payment method is required.'; return; }
    this.savingBank = true;
    const payload: any = { ...this.bankForm };
    if (this.isEditingBank && this.editingBankId != null) {
      this.api.updateAgentBank(this.editingBankId, payload).subscribe({
        next: r => {
          if (r?.success) { this.notify.success('Bank updated.'); this.closeBankModal(); this.refreshAfterChange(); }
          else { this.bankFormError = r?.message || 'Failed to update bank.'; }
          this.savingBank = false;
        },
        error: () => { this.bankFormError = 'Server error.'; this.savingBank = false; },
      });
    } else {
      this.api.createAgentBank(payload).subscribe({
        next: r => {
          if (r?.success) { this.notify.success('Bank added successfully.'); this.closeBankModal(); this.refreshAfterChange(); }
          else { this.bankFormError = r?.message || 'Failed to add bank.'; }
          this.savingBank = false;
        },
        error: () => { this.bankFormError = 'Server error.'; this.savingBank = false; },
      });
    }
  }

  toggleBank(bank: AgentBankModel): void {
    this.api.toggleAgentBank(bank.id).subscribe(r => {
      if (r?.success) {
        bank.isActive = !bank.isActive;
        this.notify.success(bank.isActive ? `${bank.bankName} activated.` : `${bank.bankName} deactivated.`);
        this.loadAllBanksForStats();
      } else {
        this.notify.error(r?.message || 'Failed.');
      }
    });
  }

  deleteBank(bank: AgentBankModel): void {
    this.confirmDelete.confirm(bank.bankName).then(() => {
      this.api.deleteAgentBank(bank.id).subscribe(r => {
        if (r?.success) { this.notify.success('Bank deleted.'); this.refreshAfterChange(); }
        else { this.notify.error(r?.message || 'Failed to delete bank.'); }
      });
    }).catch(() => {});
  }

  private refreshAfterChange(): void {
    this.loadBanks();
    this.loadAllBanksForStats();
  }

  // ─── Branch management ────────────────────────────────────────────────────

  openBranchManagement(bank: AgentBankModel): void {
    this.selectedBank = bank;
    this.showBranchForm = false;
    this.showBranchModal = true;
  }

  closeBranchModal(): void {
    this.showBranchModal = false;
    this.selectedBank = null;
  }

  openAddBranch(): void {
    this.isEditingBranch = false;
    this.editingBranchId = null;
    this.branchForm = { ...emptyBranchForm(), agentBankId: this.selectedBank?.id ?? null };
    this.branchFormError = '';
    this.showBranchForm = true;
  }

  openEditBranch(branch: AgentBankBranchModel): void {
    this.isEditingBranch = true;
    this.editingBranchId = branch.id;
    this.branchForm = {
      agentBankId: branch.agentBankId,
      branchName: branch.branchName,
      branchCode: branch.branchCode ?? null,
      swiftCode: branch.swiftCode ?? null,
      address: branch.address ?? null,
      contactPhone: branch.contactPhone ?? null,
    };
    this.branchFormError = '';
    this.showBranchForm = true;
  }

  closeBranchForm(): void { this.showBranchForm = false; }

  saveBranch(): void {
    this.branchFormError = '';
    if (!this.branchForm.branchName?.trim()) { this.branchFormError = 'Branch name is required.'; return; }
    this.savingBranch = true;
    const payload: any = { ...this.branchForm };
    if (this.isEditingBranch && this.editingBranchId != null) {
      this.api.updateBankBranch(this.editingBranchId, payload).subscribe({
        next: r => {
          if (r?.success) { this.notify.success('Branch updated.'); this.showBranchForm = false; this.refreshBanksAndSelectedBank(); }
          else { this.branchFormError = r?.message || 'Failed.'; }
          this.savingBranch = false;
        },
        error: () => { this.branchFormError = 'Server error.'; this.savingBranch = false; },
      });
    } else {
      this.api.createBankBranch(payload).subscribe({
        next: r => {
          if (r?.success) { this.notify.success('Branch added.'); this.showBranchForm = false; this.refreshBanksAndSelectedBank(); }
          else { this.branchFormError = r?.message || 'Failed.'; }
          this.savingBranch = false;
        },
        error: () => { this.branchFormError = 'Server error.'; this.savingBranch = false; },
      });
    }
  }

  deleteBranch(branch: AgentBankBranchModel): void {
    this.confirmDelete.confirm(branch.branchName).then(() => {
      this.api.deleteBankBranch(branch.id).subscribe(r => {
        if (r?.success) { this.notify.success('Branch deleted.'); this.refreshBanksAndSelectedBank(); }
        else { this.notify.error(r?.message || 'Failed.'); }
      });
    }).catch(() => {});
  }

  private refreshBanksAndSelectedBank(): void {
    if (!this.selectedAgentId) return;
    this.api.getAgentBanksPaged(this.selectedAgentId, { page: this.pageIndex + 1, pageSize: this.pageSize }).subscribe(r => {
      if (r?.success && r.data) {
        this.banks = r.data.items;
        this.totalCount = r.data.totalCount;
        if (this.selectedBank) {
          this.selectedBank = this.banks.find(b => b.id === this.selectedBank!.id) ?? this.selectedBank;
        }
      }
    });
    this.loadAllBanksForStats();
  }

  getPaymentMethodName(id?: number | null): string {
    if (!id) return '-';
    return this.paymentMethods.find(p => p.id === id)?.name ?? String(id);
  }
}
