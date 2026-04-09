import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-agent-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss'],
})
export class AgentProfileComponent implements OnInit {

  // ── Profile ──────────────────────────────────────────────────────────────
  fullName = '';
  email = '';
  phoneNumber = '';
  userInitial = 'A';
  userRoleName = '';
  savingProfile = false;

  // ── Change Password ───────────────────────────────────────────────────────
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';
  showCurrent = false;
  showNew = false;
  showConfirm = false;
  savingPassword = false;

  // ── Password strength ────────────────────────────────────────────────────
  get passwordStrength(): { label: string; color: string; width: string } {
    const p = this.newPassword;
    if (!p) return { label: '', color: '', width: '0%' };
    let score = 0;
    if (p.length >= 8)  score++;
    if (p.length >= 12) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;

    if (score <= 1) return { label: 'Weak',   color: 'bg-danger-500',  width: '25%' };
    if (score <= 2) return { label: 'Fair',   color: 'bg-warning-500', width: '50%' };
    if (score <= 3) return { label: 'Good',   color: 'bg-blue-500',    width: '75%' };
    return             { label: 'Strong', color: 'bg-success-500', width: '100%' };
  }

  get passwordsMatch(): boolean {
    return !!this.newPassword && this.newPassword === this.confirmPassword;
  }

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private notify: NotificationService,
  ) {}

  ngOnInit(): void {
    const state = this.auth.snapshot;
    this.fullName    = state.fullName || '';
    this.email       = state.email || '';
    this.userInitial = this.fullName.charAt(0).toUpperCase() || 'A';
    this.userRoleName = state.roles[0] || 'Sending Agent';

    this.api.getMyProfile().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.fullName    = res.data.fullName    || this.fullName;
          this.email       = res.data.email       || this.email;
          this.phoneNumber = res.data.phoneNumber || '';
          this.userInitial = this.fullName.charAt(0).toUpperCase() || 'A';
        }
      },
      error: () => { /* silently use auth state data */ }
    });
  }

  saveProfile(): void {
    if (!this.fullName.trim()) {
      this.notify.warn('Full name is required.');
      return;
    }
    this.savingProfile = true;
    this.api.updateMyProfile({ fullName: this.fullName.trim(), phoneNumber: this.phoneNumber.trim() || undefined }).subscribe({
      next: (res) => {
        this.savingProfile = false;
        if (res?.success) {
          this.userInitial = this.fullName.charAt(0).toUpperCase();
          this.notify.success('Profile updated successfully.');
        } else {
          this.notify.error(res?.message || 'Failed to update profile.');
        }
      },
      error: () => {
        this.savingProfile = false;
        this.notify.error('Failed to update profile. Please try again.');
      }
    });
  }

  changePassword(): void {
    if (!this.currentPassword) {
      this.notify.warn('Please enter your current password.');
      return;
    }
    if (this.newPassword.length < 6) {
      this.notify.warn('New password must be at least 6 characters.');
      return;
    }
    if (!this.passwordsMatch) {
      this.notify.warn('New password and confirmation do not match.');
      return;
    }
    this.savingPassword = true;
    this.api.changePassword({ currentPassword: this.currentPassword, newPassword: this.newPassword }).subscribe({
      next: (res) => {
        this.savingPassword = false;
        if (res?.success) {
          this.currentPassword = '';
          this.newPassword     = '';
          this.confirmPassword = '';
          this.notify.success('Password changed successfully.');
        } else {
          this.notify.error(res?.message || 'Failed to change password.');
        }
      },
      error: () => {
        this.savingPassword = false;
        this.notify.error('Failed to change password. Please try again.');
      }
    });
  }
}
