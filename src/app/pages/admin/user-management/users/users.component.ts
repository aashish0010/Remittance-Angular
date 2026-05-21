import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { ConfirmDeleteService } from '../../../../shared/confirm-delete.service';

interface UserItem {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  roles: { id: number; name: string; portal: string }[];
}

interface RoleOption {
  id: number;
  name: string;
  portal: string;
  roleType: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, FormsModule, DatePipe,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserItem[] = [];
  allRoles: RoleOption[] = [];
  loading = false;
  showPassword = false;

  // Filters
  searchQuery = '';
  filterRole = '';
  filterStatus = '';

  // Form
  showForm = false;
  editingId: string | null = null;
  formFullName = '';
  formEmail = '';
  formPhone = '';
  formPassword = '';
  formIsActive = true;
  formRoleIds: number[] = [];

  // IP Whitelist
  showIpWhitelist = false;
  ipWhitelistUser: UserItem | null = null;
  ipWhitelistEntries: string[] = [];
  ipWhitelistLoading = false;
  newIpAddress = '';
  ipWhitelistError = '';

  constructor(private api: ApiService, private confirmDelete: ConfirmDeleteService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles();
  }

  loadUsers(): void {
    this.loading = true;
    const params: any = {};
    if (this.searchQuery.trim()) params.search = this.searchQuery.trim();
    if (this.filterRole) params.role = this.filterRole;
    if (this.filterStatus === 'active') params.isActive = true;
    if (this.filterStatus === 'inactive') params.isActive = false;

    this.api.getAdminUsers(params).subscribe(res => {
      this.loading = false;
      if (res?.success && res.data) {
        // Never show SystemAdmin user(s) in this list
        this.users = (res.data as UserItem[]).filter(u => !this.isSystemAdmin(u));
      }
    });
  }

  loadRoles(): void {
    this.api.getRoles().subscribe(res => {
      if (res?.success && res.data) {
        this.allRoles = (res.data as RoleOption[]).filter(r => r.roleType !== 'SystemAdmin' && r.portal === 'Admin');
      }
    });
  }

  applyFilters(): void {
    this.loadUsers();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.filterRole = '';
    this.filterStatus = '';
    this.loadUsers();
  }

  openCreate(): void {
    this.editingId = null;
    this.formFullName = '';
    this.formEmail = '';
    this.formPhone = '';
    this.formPassword = '';
    this.formIsActive = true;
    this.formRoleIds = [];
    this.showForm = true;
  }

  openEdit(user: UserItem): void {
    // Don't allow editing SystemAdmin users
    if (user.roles.some(r => r.name === 'SystemAdmin')) return;
    this.editingId = user.id;
    this.formFullName = user.fullName;
    this.formEmail = user.email;
    this.formPhone = user.phoneNumber;
    this.formPassword = '';
    this.formIsActive = user.isActive;
    this.formRoleIds = user.roles.map(r => r.id);
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
  }

  saveUser(): void {
    if (this.editingId) {
      const dto: any = {
        fullName: this.formFullName,
        email: this.formEmail,
        phoneNumber: this.formPhone,
        roleIds: this.formRoleIds,
        isActive: this.formIsActive,
      };
      if (this.formPassword.trim()) dto.password = this.formPassword;
      this.api.updateAdminUser(this.editingId, dto).subscribe(res => {
        if (res?.success) { this.showForm = false; this.loadUsers(); }
      });
    } else {
      const dto = {
        fullName: this.formFullName,
        email: this.formEmail,
        password: this.formPassword,
        phoneNumber: this.formPhone,
        roleIds: this.formRoleIds,
        isActive: this.formIsActive,
      };
      this.api.createAdminUser(dto).subscribe(res => {
        if (res?.success) { this.showForm = false; this.loadUsers(); }
      });
    }
  }

  toggleStatus(user: UserItem): void {
    if (user.roles.some(r => r.name === 'SystemAdmin')) return;
    this.api.toggleUserStatus(user.id).subscribe(res => {
      if (res?.success) this.loadUsers();
    });
  }

  deleteUser(user: UserItem): void {
    if (user.roles.some(r => r.name === 'SystemAdmin')) return;
    this.confirmDelete.confirm(user.fullName).then(() => {
      this.api.deleteAdminUser(user.id).subscribe(res => {
        if (res?.success) this.loadUsers();
      });
    }).catch(() => {});
  }

  isSystemAdmin(user: UserItem): boolean {
    return user.roles.some(r => r.name === 'SystemAdmin');
  }

  toggleRole(roleId: number): void {
    const idx = this.formRoleIds.indexOf(roleId);
    if (idx >= 0) this.formRoleIds.splice(idx, 1);
    else this.formRoleIds.push(roleId);
  }

  isRoleSelected(roleId: number): boolean {
    return this.formRoleIds.includes(roleId);
  }

  getRoleNames(user: UserItem): string {
    return user.roles.map(r => r.name).join(', ');
  }

  // ── IP Whitelist ──────────────────────────────────────────────────────────

  openIpWhitelist(user: UserItem): void {
    this.ipWhitelistUser = user;
    this.newIpAddress = '';
    this.ipWhitelistError = '';
    this.showIpWhitelist = true;
    this.loadIpWhitelist(user.id);
  }

  closeIpWhitelist(): void {
    this.showIpWhitelist = false;
    this.ipWhitelistUser = null;
    this.ipWhitelistEntries = [];
  }

  private loadIpWhitelist(userId: string): void {
    this.ipWhitelistLoading = true;
    this.api.getUserIpWhitelist(userId).subscribe({
      next: res => {
        this.ipWhitelistEntries = res?.success && res.data ? res.data : [];
        this.ipWhitelistLoading = false;
      },
      error: () => {
        this.ipWhitelistEntries = [];
        this.ipWhitelistLoading = false;
      },
    });
  }

  addIp(): void {
    const ip = this.newIpAddress.trim();
    this.ipWhitelistError = '';
    if (!ip) return;
    // Basic IP / CIDR format check
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}(\/\d{1,2})?$/;
    if (!ipPattern.test(ip)) {
      this.ipWhitelistError = 'Invalid IP address format. Use e.g. 192.168.1.1 or 192.168.1.0/24';
      return;
    }
    if (!this.ipWhitelistUser) return;
    this.api.addUserIpWhitelist(this.ipWhitelistUser.id, ip).subscribe({
      next: res => {
        if (res?.success) {
          this.newIpAddress = '';
          this.loadIpWhitelist(this.ipWhitelistUser!.id);
        } else {
          this.ipWhitelistError = res?.message || 'Failed to add IP.';
        }
      },
      error: () => { this.ipWhitelistError = 'Server error.'; },
    });
  }

  removeIp(ip: string): void {
    if (!this.ipWhitelistUser) return;
    this.api.removeUserIpWhitelist(this.ipWhitelistUser.id, ip).subscribe({
      next: res => {
        if (res?.success) this.loadIpWhitelist(this.ipWhitelistUser!.id);
      },
    });
  }
}
