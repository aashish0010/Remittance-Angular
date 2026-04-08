import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDeleteService } from '../../../shared/confirm-delete.service';

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

  constructor(
    private api: ApiService,
    private notify: NotificationService,
    private route: ActivatedRoute,
    private confirmDelete: ConfirmDeleteService,
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
    }
  }

  private cancelAllEditing(): void {
    this.editingSetupFieldId = null;
    this.addingSetupField = false;
    this.editingDocTypeId = null;
    this.addingDocType = false;
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
    this.confirmDelete.confirm(item.name).then(() => {
      this.api.deleteSetupField(item.id).subscribe({
        next: res => {
          if (res?.success) {
            this.notify.success('Field deleted.');
            this.loadSetupFields(this.currentCategory);
          } else {
            this.notify.error(res?.message || 'Failed to delete.');
          }
        },
        error: () => this.notify.error('Server error.'),
      });
    }).catch(() => {});
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
    this.confirmDelete.confirm(item.name).then(() => {
      this.api.deleteDocumentType(item.id).subscribe({
        next: res => {
          if (res?.success) {
            this.notify.success('Document type deleted.');
            this.loadDocumentTypes();
          } else {
            this.notify.error(res?.message || 'Failed to delete.');
          }
        },
        error: () => this.notify.error('Server error.'),
      });
    }).catch(() => {});
  }

}
