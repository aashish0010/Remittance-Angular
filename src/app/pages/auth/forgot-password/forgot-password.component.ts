import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { z } from 'zod';
import { ApiService } from '../../../core/services/api.service';

const forgotSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotForm = z.infer<typeof forgotSchema>;

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  readonly currentYear = new Date().getFullYear();

  form = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
  });

  fieldErrors: Partial<Record<keyof ForgotForm, string>> = {};
  errorMessage = '';
  loading = false;
  submitted = false;
  submittedEmail = '';

  constructor(private api: ApiService) {}

  private validate(): ForgotForm | null {
    this.fieldErrors = {};
    const result = forgotSchema.safeParse(this.form.getRawValue());
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ForgotForm;
        this.fieldErrors[field] = issue.message;
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
    this.submittedEmail = data.email;

    this.api.forgotPassword(data.email).subscribe({
      next: () => {
        this.loading = false;
        this.submitted = true;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      },
    });
  }

  resend(): void {
    this.submitted = false;
    this.form.patchValue({ email: this.submittedEmail });
    this.submit();
  }

  maskEmail(email: string): string {
    const [local, domain] = email.split('@');
    if (!local || !domain) return email;
    const visible = local.length > 2 ? local.slice(0, 2) : local[0] ?? '';
    return `${visible}${'*'.repeat(Math.max(local.length - 2, 1))}@${domain}`;
  }
}
