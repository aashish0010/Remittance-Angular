import { Component, OnInit } from '@angular/core';
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

  // ── Permission Management ──

  openPermissions(role: RoleItem): void {
    if (role.roleType === 'SystemAdmin') return;
    this.permRoleId = role.id;
    this.permRoleName = role.name;
    this.permPortalFilter = role.portal;
    this.showPermissions = true;
    this.showForm = false;
    this.selectedPermIds.clear();

    // Load role detail + menus in parallel
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
      if (allSelected) {
        this.selectedPermIds.delete(p.id);
      } else {
        this.selectedPermIds.add(p.id);
      }
    });
  }

  isAllMenuPermsSelected(menu: MenuWithPerms): boolean {
    return menu.permissions.length > 0 && menu.permissions.every(p => this.selectedPermIds.has(p.id));
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

  cancelPermissions(): void {
    this.showPermissions = false;
  }

  get filteredMenus(): MenuWithPerms[] {
    return this.menus.filter(m => m.portal === this.permPortalFilter);
  }
}
