import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ComplianceRuleModel } from '../../../core/models/compliance.models';
import { CountryInfo } from '../../../core/models/common.models';
import { SearchableSelectDirective } from '../../../shared/searchable-select.directive';

interface RuleForm {
  ruleName: string;
  ruleType: string;
  thresholdAmount: number | null;
  timePeriodDays: number | null;
  maxTransactionCount: number | null;
  sourceCountry: string;
  destinationCountry: string;
  action: string;
  isActive: boolean;
}

function emptyRuleForm(): RuleForm {
  return {
    ruleName: '',
    ruleType: 'AmountThreshold',
    thresholdAmount: null,
    timePeriodDays: null,
    maxTransactionCount: null,
    sourceCountry: '',
    destinationCountry: '',
    action: 'Flag',
    isActive: true,
  };
}

@Component({
  selector: 'app-compliance-setup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatProgressSpinnerModule,
    DatePipe,
    SearchableSelectDirective,
  ],
  templateUrl: './compliance-setup.component.html',
  styleUrl: './compliance-setup.component.scss',
})
export class ComplianceSetupComponent implements OnInit {
  rules: ComplianceRuleModel[] = [];
  filteredRules: ComplianceRuleModel[] = [];
  displayedColumns = [
    'ruleName', 'ruleType', 'threshold', 'countries', 'action', 'status', 'actions',
  ];
  searchString = '';
  loading = true;
  message = '';
  messageSeverity: 'success' | 'error' | 'warning' | 'info' = 'info';

  // Reference data
  countries: CountryInfo[] = [];

  // Popup
  showPopup = false;
  isEditing = false;
  editingId = 0;
  saving = false;
  formError = '';
  form: RuleForm = emptyRuleForm();

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    this.auth.loadFromSession();
    this.loadCountries();
    this.loadRules();
  }

  private loadCountries(): void {
    this.api.getCountries().subscribe(r => { if (r?.success && r.data) this.countries = r.data; });
  }

  // ---------------------------------------------------------------------------
  // Rules CRUD
  // ---------------------------------------------------------------------------
  loadRules(): void {
    this.loading = true;
    this.api.getComplianceRules().subscribe({
      next: res => {
        if (res?.success && res.data) {
          this.rules = res.data;
          this.applyFilter();
        } else {
          this.rules = [];
          this.filteredRules = [];
          this.message = res?.message || 'Failed to load rules.';
          this.messageSeverity = 'error';
        }
        this.loading = false;
      },
      error: () => {
        this.rules = [];
        this.filteredRules = [];
        this.message = 'Could not connect to server.';
        this.messageSeverity = 'error';
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const s = this.searchString.toLowerCase();
    this.filteredRules = !s
      ? [...this.rules]
      : this.rules.filter(r =>
          r.ruleName.toLowerCase().includes(s) ||
          r.ruleType.toLowerCase().includes(s) ||
          r.action.toLowerCase().includes(s)
        );
  }

  clearMessage(): void { this.message = ''; }

  // ---------------------------------------------------------------------------
  // Threshold / Params display helper
  // ---------------------------------------------------------------------------
  getThresholdDisplay(rule: ComplianceRuleModel): string {
    const parts: string[] = [];
    if (rule.thresholdAmount != null) parts.push(`Amount: ${rule.thresholdAmount}`);
    if (rule.timePeriodDays != null) parts.push(`Period: ${rule.timePeriodDays}d`);
    if (rule.maxTransactionCount != null) parts.push(`Max Txn: ${rule.maxTransactionCount}`);
    return parts.length ? parts.join(', ') : '-';
  }

  getCountriesDisplay(rule: ComplianceRuleModel): string {
    const parts: string[] = [];
    if (rule.sourceCountry) parts.push(`From: ${rule.sourceCountry}`);
    if (rule.destinationCountry) parts.push(`To: ${rule.destinationCountry}`);
    return parts.length ? parts.join(', ') : 'Any';
  }

  // ---------------------------------------------------------------------------
  // Create / Edit popup
  // ---------------------------------------------------------------------------
  openCreate(): void {
    this.form = emptyRuleForm();
    this.isEditing = false;
    this.editingId = 0;
    this.formError = '';
    this.showPopup = true;
  }

  openEdit(rule: ComplianceRuleModel): void {
    this.form = {
      ruleName: rule.ruleName,
      ruleType: rule.ruleType,
      thresholdAmount: rule.thresholdAmount ?? null,
      timePeriodDays: rule.timePeriodDays ?? null,
      maxTransactionCount: rule.maxTransactionCount ?? null,
      sourceCountry: rule.sourceCountry || '',
      destinationCountry: rule.destinationCountry || '',
      action: rule.action,
      isActive: rule.isActive,
    };
    this.isEditing = true;
    this.editingId = rule.id;
    this.formError = '';
    this.showPopup = true;
  }

  closePopup(): void { this.showPopup = false; }

  // Conditional field visibility
  get showThresholdAmount(): boolean {
    return this.form.ruleType === 'AmountThreshold';
  }

  get showTimePeriod(): boolean {
    return this.form.ruleType === 'FrequencyLimit';
  }

  get showMaxTransactionCount(): boolean {
    return this.form.ruleType === 'FrequencyLimit';
  }

  saveRule(): void {
    this.formError = '';
    if (!this.form.ruleName?.trim()) { this.formError = 'Rule Name is required.'; return; }

    this.saving = true;
    const dto: any = {
      ruleName: this.form.ruleName,
      ruleType: this.form.ruleType,
      thresholdAmount: this.form.thresholdAmount,
      timePeriodDays: this.form.timePeriodDays,
      maxTransactionCount: this.form.maxTransactionCount,
      sourceCountry: this.form.sourceCountry || null,
      destinationCountry: this.form.destinationCountry || null,
      action: this.form.action,
      isActive: this.form.isActive,
    };

    const obs = this.isEditing
      ? this.api.updateComplianceRule(this.editingId, dto)
      : this.api.createComplianceRule(dto);

    obs.subscribe({
      next: res => {
        if (res?.success) {
          this.message = this.isEditing ? 'Rule updated.' : 'Rule created.';
          this.messageSeverity = 'success';
          this.showPopup = false;
          this.loadRules();
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
  // Toggle / Delete
  // ---------------------------------------------------------------------------
  toggleRule(rule: ComplianceRuleModel): void {
    this.api.toggleComplianceRule(rule.id).subscribe(r => {
      if (r?.success) {
        this.message = `Rule '${rule.ruleName}' ${rule.isActive ? 'deactivated' : 'activated'}.`;
        this.messageSeverity = 'success';
        this.loadRules();
      } else {
        this.message = r?.message || 'Failed.';
        this.messageSeverity = 'error';
      }
    });
  }

  deleteRule(rule: ComplianceRuleModel): void {
    this.api.deleteComplianceRule(rule.id).subscribe(r => {
      if (r?.success) {
        this.message = 'Rule deleted.';
        this.messageSeverity = 'success';
        this.loadRules();
      } else {
        this.message = r?.message || 'Failed.';
        this.messageSeverity = 'error';
      }
    });
  }
}
