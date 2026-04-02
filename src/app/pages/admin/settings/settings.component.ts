import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';

// ── Type Definitions ────────────────────────────────────────────────────────

type FieldType = 'text' | 'number' | 'toggle' | 'select' | 'multiselect' | 'date' | 'email' | 'url' | 'textarea';

interface SettingField {
  key: string;
  label: string;
  description: string;
  type: FieldType;
  options?: { value: string; label: string }[];
  placeholder?: string;
  min?: number;
  max?: number;
}

interface SettingSection {
  id: string;
  title: string;
  icon: string;
  fields: SettingField[];
  expanded: boolean;
  saving: boolean;
}

// ── Default Values (35 active keys only) ────────────────────────────────────

const DEFAULTS: Record<string, string> = {
  // General
  'general.companyName': '',
  'general.supportEmail': '',
  'general.defaultCurrency': 'USD',
  // KYC
  'kyc.enabled': 'true',
  'kyc.requireEmailVerification': 'false',
  'kyc.maxAge': '99',
  'kyc.skipDocumentUpload': 'false',
  'kyc.mandatoryIdTypes': 'Passport,DriverLicense',
  'kyc.minimumAge': '18',
  'kyc.duplicateCheck': 'true',
  'kyc.reverificationPeriod': '365',
  // Transaction
  'transaction.numberPrefix': 'TXN',
  'transaction.requirePurpose': 'false',
  'transaction.requireSourceOfFunds': 'false',
  'transaction.allowQuickSend': 'true',
  'transaction.cancellationAllowed': 'true',
  'transaction.cancellationWindow': '60',
  'transaction.requireManagerApproval': 'false',
  'transaction.managerApprovalThreshold': '5000',
  'transaction.autoComplete': 'false',
  // Compliance
  'compliance.singleTransactionLimit': '0',
  'compliance.dailyLimit': '0',
  'compliance.structuringDetection': 'false',
  'compliance.structuringWindow': '7',
  'compliance.structuringAmount': '9000',
  // Exchange Rate
  'rate.applyMargin': 'true',
  'rate.defaultMargin': '0',
  'rate.rounding': '2',
  'rate.lockDuration': '60',
  // Payout & Agent
  'payout.availableMethods': 'CashPickup,BankDeposit',
  'fee.agentCommissionEnabled': 'true',
  'branch.agentTransactionLimit': '0',
  'branch.agentDailyLimit': '0',
  // User & Security
  'user.sessionTimeout': '30',
  'user.maxLoginAttempts': '5',
  'user.lockoutDurationMinutes': '30',
  'user.passwordPolicy': 'Strong',
  // System
  'system.maintenanceMode': 'false',
  'system.maintenanceMessage': 'System is under maintenance. Please try again later.',
};

// ── Multiselect Options ───────────────────────────────────────────────────────

const PAYOUT_METHODS_OPTIONS = [
  { value: 'CashPickup',    label: 'Cash Pickup' },
  { value: 'BankDeposit',   label: 'Bank Deposit' },
  { value: 'MobileWallet',  label: 'Mobile Wallet' },
  { value: 'HomeDelivery',  label: 'Home Delivery' },
  { value: 'AirtimeTopup',  label: 'Airtime Top-up' },
];

const ID_TYPES_OPTIONS = [
  { value: 'Passport',         label: 'Passport' },
  { value: 'DriverLicense',    label: "Driver's License" },
  { value: 'NationalId',       label: 'National ID' },
  { value: 'ResidencePermit',  label: 'Residence Permit' },
];

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  loading = true;
  values: Record<string, string> = {};

  sections: SettingSection[] = [

    // ── 1. General ────────────────────────────────────────────────────────────
    {
      id: 'general', title: 'General Info', icon: 'building', expanded: true, saving: false,
      fields: [
        { key: 'general.companyName',    label: 'Company Name',    description: 'Legal registered name shown in the admin header and on receipts.', type: 'text',  placeholder: 'e.g. Remit Global Pty Ltd' },
        { key: 'general.supportEmail',   label: 'Support Email',   description: 'Contact email address shown on receipts and error pages.', type: 'email', placeholder: 'support@example.com' },
        { key: 'general.defaultCurrency', label: 'Default Currency', description: 'Base currency code used when no corridor-specific currency is configured (e.g. USD, EUR, AUD).', type: 'text', placeholder: 'e.g. USD' },
      ],
    },

    // ── 2. Customer / KYC ────────────────────────────────────────────────────
    {
      id: 'kyc', title: 'Customer / KYC Settings', icon: 'shield', expanded: false, saving: false,
      fields: [
        { key: 'kyc.enabled',                  label: 'KYC Enabled',                       description: 'Enforce KYC verification before a transaction can be processed. Disable only if using external KYC software.', type: 'toggle' },
        { key: 'kyc.skipDocumentUpload',       label: 'Skip Document Upload',              description: 'Allow customer registration without uploading ID documents (staff-verified manually).', type: 'toggle' },
        { key: 'kyc.requireEmailVerification', label: 'Require Email Verification',        description: 'Send a verification email to new customers before they can transact.', type: 'toggle' },
        { key: 'kyc.mandatoryIdTypes',         label: 'Mandatory ID Types',                description: 'Accepted identity document types for verification.', type: 'multiselect', options: ID_TYPES_OPTIONS },
        { key: 'kyc.minimumAge',               label: 'Minimum Age',                       description: 'Minimum customer age required to register and send remittance.', type: 'number', min: 0, max: 120 },
        { key: 'kyc.maxAge',                   label: 'Maximum Age',                       description: 'Maximum customer age allowed to register. Set 0 to disable the upper limit.', type: 'number', min: 0, max: 120 },
        { key: 'kyc.duplicateCheck',           label: 'Duplicate Customer Check',          description: 'Block registration if a customer with the same name + DOB + ID already exists.', type: 'toggle' },
        { key: 'kyc.reverificationPeriod',     label: 'KYC Re-verification Period (days)', description: 'Force customers to re-verify their identity after this many days. Set 0 to disable.', type: 'number', min: 0, max: 1825 },
      ],
    },

    // ── 3. Transaction ────────────────────────────────────────────────────────
    {
      id: 'transaction', title: 'Transaction Settings', icon: 'arrows', expanded: false, saving: false,
      fields: [
        { key: 'transaction.numberPrefix',            label: 'Transaction Number Prefix',     description: 'Prefix for all generated transaction reference numbers (e.g. TXN, RMT).', type: 'text', placeholder: 'TXN' },
        { key: 'transaction.requirePurpose',          label: 'Require Purpose of Remittance', description: 'Force agent/customer to select purpose (Family Support, Education, Medical, etc.).', type: 'toggle' },
        { key: 'transaction.requireSourceOfFunds',   label: 'Require Source of Funds',       description: 'Customer must declare where the money originates from.', type: 'toggle' },
        { key: 'transaction.allowQuickSend',         label: 'Allow Quick Send',              description: 'Show the Quick Send shortcut on the agent dashboard.', type: 'toggle' },
        { key: 'transaction.cancellationAllowed',    label: 'Cancellation Allowed',          description: 'Allow transactions to be cancelled after creation.', type: 'toggle' },
        { key: 'transaction.cancellationWindow',     label: 'Cancellation Window (minutes)', description: 'How long after creation a transaction can be cancelled. Set 0 for no time limit.', type: 'number', min: 0, max: 1440 },
        { key: 'transaction.requireManagerApproval', label: 'Require Manager Approval',      description: 'Transactions above the threshold below are routed to PendingApproval status.', type: 'toggle' },
        { key: 'transaction.managerApprovalThreshold', label: 'Manager Approval Threshold',  description: 'Amount (in base currency) above which manager approval is required.', type: 'number', min: 0 },
        { key: 'transaction.autoComplete',           label: 'Auto-Complete Transactions',    description: 'Automatically mark transactions Completed when payout is confirmed by partner.', type: 'toggle' },
      ],
    },

    // ── 4. Compliance & Limits ────────────────────────────────────────────────
    {
      id: 'compliance', title: 'Compliance & Limits', icon: 'scale', expanded: false, saving: false,
      fields: [
        { key: 'compliance.singleTransactionLimit', label: 'Single Transaction Limit',      description: 'Maximum amount per single transaction. Set 0 to disable. Enforced on both frontend and backend.', type: 'number', min: 0 },
        { key: 'compliance.dailyLimit',             label: 'Daily Limit Per Customer',      description: 'Maximum total a customer can send in one calendar day. Set 0 to disable.', type: 'number', min: 0 },
        { key: 'compliance.structuringDetection',   label: 'Structuring Detection',         description: 'Detect customers splitting transactions to stay under reporting thresholds (smurfing).', type: 'toggle' },
        { key: 'compliance.structuringWindow',      label: 'Structuring Detection Window (days)', description: 'Look-back period for aggregating customer transactions in structuring detection.', type: 'number', min: 1, max: 30 },
        { key: 'compliance.structuringAmount',      label: 'Structuring Detection Threshold', description: 'Cumulative amount within the window that triggers a structuring alert.', type: 'number', min: 0 },
      ],
    },

    // ── 5. Exchange Rate ──────────────────────────────────────────────────────
    {
      id: 'rate', title: 'Exchange Rate Settings', icon: 'exchange', expanded: false, saving: false,
      fields: [
        { key: 'rate.applyMargin',   label: 'Apply Margin / Markup',    description: 'Add a profit margin on top of the mid-market rate when calculating transactions.', type: 'toggle' },
        { key: 'rate.defaultMargin', label: 'Default Margin (%)',        description: 'Default percentage markup applied when no corridor-specific margin is configured.', type: 'number', min: 0, max: 100 },
        { key: 'rate.rounding',      label: 'Receive Amount Decimal Places', description: 'How many decimal places the receive amount is rounded to.', type: 'select', options: [
          { value: '0', label: '0 — whole numbers' },
          { value: '2', label: '2 decimal places' },
          { value: '4', label: '4 decimal places' },
        ] },
        { key: 'rate.lockDuration',  label: 'Rate Lock Duration (seconds)', description: 'How long a quoted exchange rate is locked in before recalculation is required.', type: 'number', min: 10, max: 3600 },
      ],
    },

    // ── 6. Agent & Commission ─────────────────────────────────────────────────
    {
      id: 'agent', title: 'Agent & Commission', icon: 'users', expanded: false, saving: false,
      fields: [
        { key: 'fee.agentCommissionEnabled',    label: 'Agent Commission Enabled', description: 'Show agent commission stats on the agent dashboard. Disable to hide commission tracking entirely.', type: 'toggle' },
        { key: 'branch.agentTransactionLimit',  label: 'Agent Transaction Limit',  description: 'Maximum amount an agent can process per single transaction. Set 0 to disable.', type: 'number', min: 0 },
        { key: 'branch.agentDailyLimit',        label: 'Agent Daily Limit',         description: 'Maximum total an agent can process in one day. Set 0 to disable.', type: 'number', min: 0 },
        { key: 'payout.availableMethods',       label: 'Available Payout Methods',  description: 'Enabled delivery methods shown to agents on the send-money form.', type: 'multiselect', options: PAYOUT_METHODS_OPTIONS },
      ],
    },

    // ── 7. User & Security ────────────────────────────────────────────────────
    {
      id: 'user', title: 'User & Security', icon: 'shield', expanded: false, saving: false,
      fields: [
        { key: 'user.passwordPolicy',         label: 'Password Policy',              description: 'Minimum password strength required for all staff accounts.', type: 'select', options: [
          { value: 'Basic',  label: 'Basic — min 6 characters' },
          { value: 'Medium', label: 'Medium — min 8 chars, mixed case' },
          { value: 'Strong', label: 'Strong — min 10 chars, mixed case + numbers + symbols' },
        ] },
        { key: 'user.sessionTimeout',         label: 'Session Timeout (minutes)',    description: 'Auto-logout after this many minutes of inactivity. Enforced by the frontend idle-timeout service.', type: 'number', min: 5, max: 480 },
        { key: 'user.maxLoginAttempts',       label: 'Max Login Attempts',           description: 'Lock account after this many consecutive failed login attempts. Enforced on both frontend and backend.', type: 'number', min: 1, max: 20 },
        { key: 'user.lockoutDurationMinutes', label: 'Account Lockout Duration (minutes)', description: 'How long an account stays locked after exceeding max failed attempts. Enforced server-side.', type: 'number', min: 1, max: 1440 },
      ],
    },

    // ── 8. System & Maintenance ───────────────────────────────────────────────
    {
      id: 'system', title: 'System & Maintenance', icon: 'cog', expanded: false, saving: false,
      fields: [
        { key: 'system.maintenanceMode',    label: 'Maintenance Mode',    description: 'When ON, an amber banner is shown across the entire admin portal and the API returns a maintenance response.', type: 'toggle' },
        { key: 'system.maintenanceMessage', label: 'Maintenance Message', description: 'Message displayed to users while maintenance mode is active.', type: 'textarea' },
      ],
    },
  ];

  constructor(
    private api: ApiService,
    private notify: NotificationService,
    private appSettings: AppSettingsService,
  ) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  private loadSettings(): void {
    this.loading = true;
    this.api.getAllSettings().subscribe({
      next: (res) => {
        const merged: Record<string, string> = { ...DEFAULTS };
        if (res?.success && res.data) {
          Object.assign(merged, res.data);
        }
        this.values = merged;
        this.loading = false;
      },
      error: () => {
        this.values = { ...DEFAULTS };
        this.loading = false;
      }
    });
  }

  toggleSection(section: SettingSection): void {
    section.expanded = !section.expanded;
  }

  // ── Toggle helpers ────────────────────────────────────────────────────────

  getBool(key: string): boolean {
    return this.values[key] === 'true';
  }

  setBool(key: string, value: boolean): void {
    this.values[key] = value ? 'true' : 'false';
  }

  // ── Multiselect helpers ───────────────────────────────────────────────────

  getMultiValues(key: string): string[] {
    const v = this.values[key];
    return v ? v.split(',').filter(x => x.trim()) : [];
  }

  isMultiSelected(key: string, value: string): boolean {
    return this.getMultiValues(key).includes(value);
  }

  toggleMulti(key: string, value: string, checked: boolean): void {
    const current = this.getMultiValues(key);
    if (checked) {
      if (!current.includes(value)) current.push(value);
    } else {
      const idx = current.indexOf(value);
      if (idx >= 0) current.splice(idx, 1);
    }
    this.values[key] = current.join(',');
  }

  // ── Save ──────────────────────────────────────────────────────────────────

  saveSection(section: SettingSection): void {
    const payload: Record<string, string> = {};
    for (const field of section.fields) {
      payload[field.key] = this.values[field.key] ?? '';
    }

    section.saving = true;
    this.api.batchSaveSettings(payload).subscribe({
      next: (res) => {
        section.saving = false;
        if (res?.success) {
          this.notify.success(`${section.title} saved successfully.`);
          this.appSettings.reload();
        } else {
          this.notify.error(res?.message || 'Failed to save settings.');
        }
      },
      error: () => {
        section.saving = false;
        this.notify.error('Failed to save settings. Please try again.');
      }
    });
  }

  saveAll(): void {
    const payload: Record<string, string> = { ...this.values };
    this.sections.forEach(s => s.saving = true);

    this.api.batchSaveSettings(payload).subscribe({
      next: (res) => {
        this.sections.forEach(s => s.saving = false);
        if (res?.success) {
          this.notify.success('All settings saved successfully.');
          this.appSettings.reload();
        } else {
          this.notify.error(res?.message || 'Failed to save settings.');
        }
      },
      error: () => {
        this.sections.forEach(s => s.saving = false);
        this.notify.error('Failed to save settings. Please try again.');
      }
    });
  }
}
