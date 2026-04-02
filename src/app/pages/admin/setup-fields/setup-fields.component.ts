import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface SetupFieldModel {
  id: number;
  category: string;
  code: string;
  name: string;
  description: string;
  isActive: boolean;
  sortOrder: number;
}

export interface DocumentTypeModel {
  id: number;
  name: string;
  code: string;
  requiredSides: number;
  isActive: boolean;
  sortOrder: number;
}

export interface SystemSettingModel {
  id: number;
  key: string;
  value: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Tab configuration
// ---------------------------------------------------------------------------

interface SetupTab {
  label: string;
  category: string;
}

const SETUP_TABS: SetupTab[] = [
  { label: 'Payment Types', category: 'PaymentType' },
  { label: 'ID Types', category: 'IdType' },
  { label: 'Purposes', category: 'Purpose' },
  { label: 'Source of Fund', category: 'SourceOfFund' },
  { label: 'Countries', category: 'Country' },
  { label: 'Currencies', category: 'Currency' },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function emptySetupField(category: string): SetupFieldModel {
  return { id: 0, category, code: '', name: '', description: '', isActive: true, sortOrder: 0 };
}

function emptyDocumentType(): DocumentTypeModel {
  return { id: 0, name: '', code: '', requiredSides: 1, isActive: true, sortOrder: 0 };
}

function emptySystemSetting(): SystemSettingModel {
  return { id: 0, key: '', value: '', description: '' };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

@Component({
  selector: 'app-setup-fields',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './setup-fields.component.html',
  styleUrl: './setup-fields.component.scss',
})
export class SetupFieldsComponent implements OnInit {

  // Mode: 'setup' shows setup fields + doc types, 'static' shows system settings
  mode: 'setup' | 'static' = 'setup';
  pageTitle = 'Setup';

  // Tab definitions
  setupTabs = SETUP_TABS;
  activeTabIndex = 0;

  // ---------------------------------------------------------------------------
  // Setup fields state (tabs 0-5)
  // ---------------------------------------------------------------------------
  setupFields: SetupFieldModel[] = [];
  loadingSetupFields = false;

  // Inline editing / adding
  editingSetupFieldId: number | null = null;
  addingSetupField = false;
  setupFieldForm: SetupFieldModel = emptySetupField('');
  savingSetupField = false;

  // ---------------------------------------------------------------------------
  // Document Types state (tab 6)
  // ---------------------------------------------------------------------------
  documentTypes: DocumentTypeModel[] = [];
  loadingDocTypes = false;

  editingDocTypeId: number | null = null;
  addingDocType = false;
  docTypeForm: DocumentTypeModel = emptyDocumentType();
  savingDocType = false;

  // ---------------------------------------------------------------------------
  // System Settings state (tab 7)
  // ---------------------------------------------------------------------------
  systemSettings: SystemSettingModel[] = [];
  loadingSettings = false;

  editingSettingId: number | null = null;
  addingSetting = false;
  settingForm: SystemSettingModel = emptySystemSetting();
  savingSetting = false;

  predefinedSettingKeys = [
    'MinRegistrationAge',
    'MaxRegistrationAge',
    'MaxDailyTransactionAmount',
    'MaxSingleTransactionAmount',
    'DefaultCurrency',
    'SessionTimeoutMinutes',
    'PasswordMinLength',
    'RequireEmailVerification',
    'MaintenanceMode',
    'SupportEmail',
  ];

  // Delete confirmation
  confirmDeleteId: number | null = null;
  confirmDeleteType: 'setupField' | 'docType' | 'setting' | null = null;

  constructor(
    private api: ApiService,
    private notify: NotificationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Determine mode from route path
    const path = this.route.snapshot.routeConfig?.path || '';
    if (path === 'static-values') {
      this.mode = 'static';
      this.pageTitle = 'Static Values';
      this.activeTabIndex = 0; // Default to first tab (Payment Types)
    } else {
      this.mode = 'setup';
      this.pageTitle = 'Setup';
      this.activeTabIndex = 0;
    }
    this.loadCurrentTabData();
  }

  // ---------------------------------------------------------------------------
  // Tab change
  // ---------------------------------------------------------------------------

  onTabChange(index: number): void {
    this.activeTabIndex = index;
    this.cancelAllEditing();
    this.loadCurrentTabData();
  }

  private loadCurrentTabData(): void {
    if (this.activeTabIndex <= 5) {
      this.loadSetupFields(this.setupTabs[this.activeTabIndex].category);
    } else if (this.activeTabIndex === 6) {
      this.loadDocumentTypes();
    } else if (this.activeTabIndex === 7) {
      this.loadSystemSettings();
    }
  }

  private cancelAllEditing(): void {
    this.editingSetupFieldId = null;
    this.addingSetupField = false;
    this.editingDocTypeId = null;
    this.addingDocType = false;
    this.editingSettingId = null;
    this.addingSetting = false;
    this.confirmDeleteId = null;
    this.confirmDeleteType = null;
  }

  // ---------------------------------------------------------------------------
  // Setup Fields CRUD
  // ---------------------------------------------------------------------------

  get currentCategory(): string {
    return this.activeTabIndex <= 5 ? this.setupTabs[this.activeTabIndex].category : '';
  }

  loadSetupFields(category: string): void {
    this.loadingSetupFields = true;
    this.api.getSetupFields(category).subscribe({
      next: res => {
        this.setupFields = res?.success && res.data ? res.data : [];
        if (!res?.success) this.notify.error(res?.message || 'Failed to load setup fields.');
        this.loadingSetupFields = false;
      },
      error: () => {
        this.setupFields = [];
        this.notify.error('Could not connect to server.');
        this.loadingSetupFields = false;
      },
    });
  }

  startAddSetupField(): void {
    this.cancelAllEditing();
    this.addingSetupField = true;
    this.setupFieldForm = emptySetupField(this.currentCategory);
  }

  startEditSetupField(item: SetupFieldModel): void {
    this.cancelAllEditing();
    this.editingSetupFieldId = item.id;
    this.setupFieldForm = { ...item };
  }

  cancelSetupFieldEdit(): void {
    this.editingSetupFieldId = null;
    this.addingSetupField = false;
  }

  saveSetupField(): void {
    if (!this.setupFieldForm.code?.trim() || !this.setupFieldForm.name?.trim()) {
      this.notify.error('Code and Name are required.');
      return;
    }

    this.savingSetupField = true;
    const dto = {
      category: this.currentCategory,
      code: this.setupFieldForm.code.trim(),
      name: this.setupFieldForm.name.trim(),
      description: this.setupFieldForm.description?.trim() || '',
      isActive: this.setupFieldForm.isActive,
      sortOrder: this.setupFieldForm.sortOrder || 0,
    };

    const obs = this.addingSetupField
      ? this.api.createSetupField(dto)
      : this.api.updateSetupField(this.editingSetupFieldId!, dto);

    obs.subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.addingSetupField ? 'Field created.' : 'Field updated.');
          this.cancelSetupFieldEdit();
          this.loadSetupFields(this.currentCategory);
        } else {
          this.notify.error(res?.message || 'Failed to save.');
        }
        this.savingSetupField = false;
      },
      error: () => {
        this.notify.error('Server error.');
        this.savingSetupField = false;
      },
    });
  }

  confirmDeleteSetupField(item: SetupFieldModel): void {
    this.confirmDeleteId = item.id;
    this.confirmDeleteType = 'setupField';
  }

  deleteSetupField(id: number): void {
    this.api.deleteSetupField(id).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success('Field deleted.');
          this.loadSetupFields(this.currentCategory);
        } else {
          this.notify.error(res?.message || 'Failed to delete.');
        }
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
      error: () => {
        this.notify.error('Server error.');
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Document Types CRUD
  // ---------------------------------------------------------------------------

  loadDocumentTypes(): void {
    this.loadingDocTypes = true;
    this.api.getDocumentTypes().subscribe({
      next: res => {
        this.documentTypes = res?.success && res.data ? res.data : [];
        if (!res?.success) this.notify.error(res?.message || 'Failed to load document types.');
        this.loadingDocTypes = false;
      },
      error: () => {
        this.documentTypes = [];
        this.notify.error('Could not connect to server.');
        this.loadingDocTypes = false;
      },
    });
  }

  startAddDocType(): void {
    this.cancelAllEditing();
    this.addingDocType = true;
    this.docTypeForm = emptyDocumentType();
  }

  startEditDocType(item: DocumentTypeModel): void {
    this.cancelAllEditing();
    this.editingDocTypeId = item.id;
    this.docTypeForm = { ...item };
  }

  cancelDocTypeEdit(): void {
    this.editingDocTypeId = null;
    this.addingDocType = false;
  }

  saveDocType(): void {
    if (!this.docTypeForm.name?.trim() || !this.docTypeForm.code?.trim()) {
      this.notify.error('Name and Code are required.');
      return;
    }

    this.savingDocType = true;
    const dto = {
      name: this.docTypeForm.name.trim(),
      code: this.docTypeForm.code.trim(),
      requiredSides: this.docTypeForm.requiredSides || 1,
      isActive: this.docTypeForm.isActive,
      sortOrder: this.docTypeForm.sortOrder || 0,
    };

    const obs = this.addingDocType
      ? this.api.createDocumentType(dto)
      : this.api.updateDocumentType(this.editingDocTypeId!, dto);

    obs.subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.addingDocType ? 'Document type created.' : 'Document type updated.');
          this.cancelDocTypeEdit();
          this.loadDocumentTypes();
        } else {
          this.notify.error(res?.message || 'Failed to save.');
        }
        this.savingDocType = false;
      },
      error: () => {
        this.notify.error('Server error.');
        this.savingDocType = false;
      },
    });
  }

  confirmDeleteDocType(item: DocumentTypeModel): void {
    this.confirmDeleteId = item.id;
    this.confirmDeleteType = 'docType';
  }

  deleteDocType(id: number): void {
    this.api.deleteDocumentType(id).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success('Document type deleted.');
          this.loadDocumentTypes();
        } else {
          this.notify.error(res?.message || 'Failed to delete.');
        }
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
      error: () => {
        this.notify.error('Server error.');
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // System Settings CRUD
  // ---------------------------------------------------------------------------

  loadSystemSettings(): void {
    this.loadingSettings = true;
    this.api.getSystemSettings().subscribe({
      next: res => {
        this.systemSettings = res?.success && res.data ? res.data : [];
        if (!res?.success) this.notify.error(res?.message || 'Failed to load settings.');
        this.loadingSettings = false;
      },
      error: () => {
        this.systemSettings = [];
        this.notify.error('Could not connect to server.');
        this.loadingSettings = false;
      },
    });
  }

  startAddSetting(): void {
    this.cancelAllEditing();
    this.addingSetting = true;
    this.settingForm = emptySystemSetting();
  }

  startEditSetting(item: SystemSettingModel): void {
    this.cancelAllEditing();
    this.editingSettingId = item.id;
    this.settingForm = { ...item };
  }

  cancelSettingEdit(): void {
    this.editingSettingId = null;
    this.addingSetting = false;
  }

  saveSetting(): void {
    if (!this.settingForm.key?.trim() || !this.settingForm.value?.trim()) {
      this.notify.error('Key and Value are required.');
      return;
    }

    this.savingSetting = true;
    const dto = {
      id: this.addingSetting ? 0 : this.editingSettingId,
      key: this.settingForm.key.trim(),
      value: this.settingForm.value.trim(),
      description: this.settingForm.description?.trim() || '',
    };

    this.api.saveSystemSetting(dto).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success(this.addingSetting ? 'Setting created.' : 'Setting updated.');
          this.cancelSettingEdit();
          this.loadSystemSettings();
        } else {
          this.notify.error(res?.message || 'Failed to save.');
        }
        this.savingSetting = false;
      },
      error: () => {
        this.notify.error('Server error.');
        this.savingSetting = false;
      },
    });
  }

  confirmDeleteSetting(item: SystemSettingModel): void {
    this.confirmDeleteId = item.id;
    this.confirmDeleteType = 'setting';
  }

  deleteSetting(id: number): void {
    this.api.deleteSystemSetting(id).subscribe({
      next: res => {
        if (res?.success) {
          this.notify.success('Setting deleted.');
          this.loadSystemSettings();
        } else {
          this.notify.error(res?.message || 'Failed to delete.');
        }
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
      error: () => {
        this.notify.error('Server error.');
        this.confirmDeleteId = null;
        this.confirmDeleteType = null;
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Delete confirmation helpers
  // ---------------------------------------------------------------------------

  isConfirmingDelete(type: string, id: number): boolean {
    return this.confirmDeleteType === type && this.confirmDeleteId === id;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
    this.confirmDeleteType = null;
  }

  executeDelete(): void {
    if (!this.confirmDeleteId || !this.confirmDeleteType) return;
    const id = this.confirmDeleteId;
    switch (this.confirmDeleteType) {
      case 'setupField': this.deleteSetupField(id); break;
      case 'docType': this.deleteDocType(id); break;
      case 'setting': this.deleteSetting(id); break;
    }
  }

  // ---------------------------------------------------------------------------
  // Utility: available predefined keys (filter out already used ones)
  // ---------------------------------------------------------------------------

  get availableSettingKeys(): string[] {
    const usedKeys = new Set(this.systemSettings.map(s => s.key));
    // When editing, keep the current key available
    if (this.editingSettingId !== null) {
      usedKeys.delete(this.settingForm.key);
    }
    return this.predefinedSettingKeys.filter(k => !usedKeys.has(k));
  }

  getDefaultValueForKey(key: string): string {
    const defaults: Record<string, string> = {
      MinRegistrationAge: '16',
      MaxRegistrationAge: '99',
      MaxDailyTransactionAmount: '10000',
      MaxSingleTransactionAmount: '5000',
      DefaultCurrency: 'USD',
      SessionTimeoutMinutes: '30',
      PasswordMinLength: '8',
      RequireEmailVerification: 'true',
      MaintenanceMode: 'false',
      SupportEmail: 'support@example.com',
    };
    return defaults[key] || '';
  }

  onSettingKeySelected(key: string): void {
    if (!this.settingForm.value) {
      this.settingForm.value = this.getDefaultValueForKey(key);
    }
  }
}
