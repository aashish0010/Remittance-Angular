import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { ApiService } from '../../../../core/services/api.service';

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
    CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule,
    MatChipsModule, MatTooltipModule, MatSlideToggleModule, MatProgressSpinnerModule,
    MatDividerModule,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserItem[] = [];
  allRoles: RoleOption[] = [];
  loading = false;

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

  constructor(private api: ApiService) {}

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
        this.users = res.data as UserItem[];
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
    if (!confirm(`Delete user "${user.fullName}"? This cannot be undone.`)) return;
    this.api.deleteAdminUser(user.id).subscribe(res => {
      if (res?.success) this.loadUsers();
    });
  }

  isSystemAdmin(user: UserItem): boolean {
    return user.roles.some(r => r.name === 'SystemAdmin');
  }

  getRoleNames(user: UserItem): string {
    return user.roles.map(r => r.name).join(', ');
  }
}
