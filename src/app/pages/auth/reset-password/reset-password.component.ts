import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { z } from 'zod';
import { ApiService } from '../../../core/services/api.service';

const resetSchema = z.object({
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine(d => d.newPassword === d.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type ResetForm = z.infer<typeof resetSchema>;

export type PasswordStrength = 'weak' | 'fair' | 'good' | 'strong';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  readonly currentYear = new Date().getFullYear();

  form = new FormGroup({
    newPassword: new FormControl('', { nonNullable: true }),
    confirmPassword: new FormControl('', { nonNullable: true }),
  });

  token = '';
  fieldErrors: Partial<Record<keyof ResetForm, string>> = {};
  errorMessage = '';
  loading = false;
  validating = true;
  tokenValid = false;
  success = false;
  hidePassword = true;
  hideConfirm = true;

  strength: PasswordStrength = 'weak';
  strengthScore = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';
    if (!this.token) {
      this.validating = false;
      this.tokenValid = false;
      return;
    }
    this.api.validateResetToken(this.token).subscribe({
      next: res => {
        this.validating = false;
        this.tokenValid = res.success && res.data === true;
        if (!this.tokenValid) {
          this.errorMessage = res.message || 'This reset link is invalid or has expired.';
        }
      },
      error: () => {
        this.validating = false;
        this.tokenValid = false;
        this.errorMessage = 'This reset link is invalid or has expired.';
      },
    });

    this.form.controls.newPassword.valueChanges.subscribe(val => {
      this.calcStrength(val);
    });
  }

  calcStrength(password: string): void {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    this.strengthScore = score;
    this.strength = (['weak', 'fair', 'good', 'strong'] as PasswordStrength[])[score - 1] ?? 'weak';
  }

  private validate(): ResetForm | null {
    this.fieldErrors = {};
    const result = resetSchema.safeParse(this.form.getRawValue());
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ResetForm;
        if (!this.fieldErrors[field]) this.fieldErrors[field] = issue.message;
      }
      return null;
    }
    return result.data;
  }

  submit(): void {
    this.errorMessage = '';
    const data = this.validate();
    if (!data) return;

    this.loading = true;
    this.api.resetPassword(this.token, data.newPassword, data.confirmPassword).subscribe({
      next: res => {
        this.loading = false;
        if (res.success) {
          this.success = true;
        } else {
          this.errorMessage = res.message || 'Failed to reset password. Please try again.';
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      },
    });
  }

  get strengthLabel(): string {
    return this.strengthScore === 0 ? '' : (['Weak', 'Fair', 'Good', 'Strong'][this.strengthScore - 1] ?? '');
  }

  get strengthColor(): string {
    const map: Record<number, string> = {
      1: 'bg-danger-400',
      2: 'bg-warning-400',
      3: 'bg-brand-400',
      4: 'bg-success-500',
    };
    return map[this.strengthScore] ?? 'bg-surface-200 dark:bg-surface-600';
  }

  get strengthTextColor(): string {
    const map: Record<number, string> = {
      1: 'text-danger-500',
      2: 'text-warning-500',
      3: 'text-brand-500',
      4: 'text-success-600',
    };
    return map[this.strengthScore] ?? '';
  }
}
