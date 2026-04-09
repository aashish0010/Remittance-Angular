import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { ConfirmDeleteService } from '../../../../shared/confirm-delete.service';

interface RoleItem {
  id: number;
  name: string;
  description: string;
  roleType: string;
  portal: string;
  isActive: boolean;
  userCount: number;
  permissionCount: number;
}

interface MenuWithPerms {
  id: number;
  name: string;
  icon: string;
  url: string;
  portal: string;
  permissions: { id: number; actionName: string }[];
}

interface MenuSection {
  section: string;
  menus: MenuWithPerms[];
}

// Maps menu URL → section label (mirrors admin nav structure)
const MENU_SECTION_MAP: Record<string, string> = {
  '/admin/transactions':           'Transactions',
  '/admin/agents':                 'Agent Management',
  '/admin/accounting':             'Agent Management',
  '/admin/customer-register':      'Customers',
  '/admin/customer-report':        'Customers',
  '/admin/compliance-setup':       'Compliance & AML',
  '/admin/compliance':             'Compliance & AML',
  '/admin/sanctions':              'Compliance & AML',
  '/admin/rates':                  'Operations',
  '/admin/commissions':            'Operations',
  '/admin/routing':                'Operations',
  '/admin/receivers':              'Operations',
  '/admin/reports/transactions':   'Reports',
  '/admin/reports/agent-statement':'Reports',
  '/admin/reports/commissions':    'Reports',
  '/admin/reports/revenue':        'Reports',
  '/admin/reports/settlement':     'Reports',
  '/admin/user-management/roles':  'User Management',
  '/admin/user-management/users':  'User Management',
  '/admin/static-values':          'System',
  '/admin/settings':               'System',
  '/agent/send':                   'Operations',
  '/agent/transactions':           'Operations',
  '/agent/reports/statement':      'Reports',
};

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles: RoleItem[] = [];
  menus: MenuWithPerms[] = [];
  loading = false;

  // Form state
  showForm = false;
  editingId: number | null = null;
  formName = '';
  formDescription = '';
  formPortal = 'Admin';
  formIsActive = true;

  // Permission assignment state
  showPermissions = false;
  permRoleId: number | null = null;
  permRoleName = '';
  permPortalFilter = 'Admin';
  selectedPermIds = new Set<number>();

  // Section expansion state for the permission tree (default: all expanded)
  sectionExpanded: Record<string, boolean> = {};

  constructor(private api: ApiService, private confirmDelete: ConfirmDeleteService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.loading = true;
    this.api.getRoles().subscribe(res => {
      this.loading = false;
      if (res?.success && res.data) {
        this.roles = res.data as RoleItem[];
      }
    });
  }

  openCreate(): void {
    this.editingId = null;
    this.formName = '';
    this.formDescription = '';
    this.formPortal = 'Admin';
    this.formIsActive = true;
    this.showForm = true;
    this.showPermissions = false;
  }

  openEdit(role: RoleItem): void {
    if (role.roleType === 'SystemAdmin') return;
    this.editingId = role.id;
    this.formName = role.name;
    this.formDescription = role.description || '';
    this.formPortal = role.portal;
    this.formIsActive = role.isActive;
    this.showForm = true;
    this.showPermissions = false;
  }

  cancelForm(): void {
    this.showForm = false;
  }

  saveRole(): void {
    const dto = {
      name: this.formName,
      description: this.formDescription,
      portal: this.formPortal,
      isActive: this.formIsActive,
    };
    const obs = this.editingId
      ? this.api.updateRole(this.editingId, dto)
      : this.api.createRole(dto);

    obs.subscribe(res => {
      if (res?.success) {
        this.showForm = false;
        this.loadRoles();
      }
    });
  }

  deleteRole(role: RoleItem): void {
    if (role.roleType === 'SystemAdmin') return;
    this.confirmDelete.confirm(role.name).then(() => {
      this.api.deleteRole(role.id).subscribe(res => {
        if (res?.success) this.loadRoles();
      });
    }).catch(() => {});
  }

  // ── Permission Management ────────────────────────────────────────────────

  openPermissions(role: RoleItem): void {
    if (role.roleType === 'SystemAdmin') return;
    this.permRoleId = role.id;
    this.permRoleName = role.name;
    this.permPortalFilter = role.portal;
    this.showPermissions = true;
    this.showForm = false;
    this.selectedPermIds.clear();
    this.sectionExpanded = {}; // reset — all sections start expanded

    this.api.getRole(role.id).subscribe(res => {
      if (res?.success && res.data) {
        (res.data.permissions || []).forEach((p: any) => this.selectedPermIds.add(p.permissionId));
      }
    });

    this.loadMenus(role.portal);
  }

  loadMenus(portal: string): void {
    this.api.getMenusForAssignment(portal).subscribe(res => {
      if (res?.success && res.data) {
        this.menus = res.data as MenuWithPerms[];
      }
    });
  }

  cancelPermissions(): void {
    this.showPermissions = false;
  }

  savePermissions(): void {
    if (!this.permRoleId) return;
    this.api.assignPermissions(this.permRoleId, Array.from(this.selectedPermIds)).subscribe(res => {
      if (res?.success) {
        this.showPermissions = false;
        this.loadRoles();
      }
    });
  }

  // ── Individual permission toggles ─────────────────────────────────────────

  isPermSelected(permId: number): boolean {
    return this.selectedPermIds.has(permId);
  }

  togglePerm(permId: number): void {
    if (this.selectedPermIds.has(permId)) {
      this.selectedPermIds.delete(permId);
    } else {
      this.selectedPermIds.add(permId);
    }
  }

  toggleAllMenuPerms(menu: MenuWithPerms): void {
    const allSelected = menu.permissions.every(p => this.selectedPermIds.has(p.id));
    menu.permissions.forEach(p => {
      if (allSelected) this.selectedPermIds.delete(p.id);
      else this.selectedPermIds.add(p.id);
    });
  }

  isAllMenuPermsSelected(menu: MenuWithPerms): boolean {
    return menu.permissions.length > 0 && menu.permissions.every(p => this.selectedPermIds.has(p.id));
  }

  // ── Section-level permission helpers ─────────────────────────────────────

  get filteredMenus(): MenuWithPerms[] {
    return this.menus.filter(m => m.portal === this.permPortalFilter);
  }

  /** Menus grouped by section for hierarchical display */
  get menusBySection(): MenuSection[] {
    const grouped: Record<string, MenuWithPerms[]> = {};
    for (const menu of this.filteredMenus) {
      const section = MENU_SECTION_MAP[menu.url] || 'Other';
      if (!grouped[section]) grouped[section] = [];
      grouped[section].push(menu);
    }
    return Object.entries(grouped).map(([section, menus]) => ({ section, menus }));
  }

  /** All permission IDs for a group of menus */
  getSectionPermIds(menus: MenuWithPerms[]): number[] {
    return menus.flatMap(m => m.permissions.map(p => p.id));
  }

  isSectionAllSelected(menus: MenuWithPerms[]): boolean {
    const ids = this.getSectionPermIds(menus);
    return ids.length > 0 && ids.every(id => this.selectedPermIds.has(id));
  }

  isSectionPartialSelected(menus: MenuWithPerms[]): boolean {
    const ids = this.getSectionPermIds(menus);
    const selected = ids.filter(id => this.selectedPermIds.has(id));
    return selected.length > 0 && selected.length < ids.length;
  }

  toggleSectionPerms(menus: MenuWithPerms[]): void {
    const allSelected = this.isSectionAllSelected(menus);
    const ids = this.getSectionPermIds(menus);
    ids.forEach(id => {
      if (allSelected) this.selectedPermIds.delete(id);
      else this.selectedPermIds.add(id);
    });
  }

  // ── Section UI expand/collapse ────────────────────────────────────────────

  toggleSectionExpand(section: string): void {
    this.sectionExpanded[section] = !this.isSectionExpanded(section);
  }

  isSectionExpanded(section: string): boolean {
    return this.sectionExpanded[section] !== false;
  }

  // ── Checkbox native indeterminate helper ──────────────────────────────────
  // Called via template ref; Angular doesn't bind indeterminate directly
  setSectionCheckboxRef(el: HTMLInputElement | null, menus: MenuWithPerms[]): void {
    if (el) {
      el.indeterminate = this.isSectionPartialSelected(menus);
    }
  }
}
