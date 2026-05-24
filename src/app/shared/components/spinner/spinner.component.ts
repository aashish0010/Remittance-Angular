import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'brand' | 'white' | 'muted' | 'success' | 'danger';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [class]="hostClass"
      role="status"
      [attr.aria-label]="label || 'Loading'"
      aria-live="polite">
      <span [class]="ringClass"></span>
      @if (label) {
        <span [class]="labelClass">{{ label }}</span>
      }
    </span>
  `,
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() variant: SpinnerVariant = 'brand';
  @Input() label = '';
  @Input() inline = false;

  get hostClass(): string {
    return [
      this.inline ? 'inline-flex' : 'flex',
      'items-center gap-2',
    ].join(' ');
  }

  get ringClass(): string {
    return [
      'block rounded-full border-2 animate-spin motion-reduce:animate-none',
      SIZE_RING[this.size],
      VARIANT_RING[this.variant],
    ].join(' ');
  }

  get labelClass(): string {
    return [
      'font-medium',
      SIZE_LABEL[this.size],
      VARIANT_LABEL[this.variant],
    ].join(' ');
  }
}

const SIZE_RING: Record<SpinnerSize, string> = {
  xs: 'w-3 h-3 border-[1.5px]',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8 border-[3px]',
  xl: 'w-12 h-12 border-4',
};

const SIZE_LABEL: Record<SpinnerSize, string> = {
  xs: 'text-[10px]',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg',
};

const VARIANT_RING: Record<SpinnerVariant, string> = {
  brand:   'border-brand-200 dark:border-brand-800 border-t-brand-600 dark:border-t-brand-400',
  white:   'border-white/30 border-t-white',
  muted:   'border-surface-200 dark:border-surface-700 border-t-surface-500 dark:border-t-surface-400',
  success: 'border-emerald-200 dark:border-emerald-800 border-t-emerald-600 dark:border-t-emerald-400',
  danger:  'border-rose-200 dark:border-rose-800 border-t-rose-600 dark:border-t-rose-400',
};

const VARIANT_LABEL: Record<SpinnerVariant, string> = {
  brand:   'text-brand-600 dark:text-brand-400',
  white:   'text-white',
  muted:   'text-surface-500 dark:text-surface-400',
  success: 'text-emerald-600 dark:text-emerald-400',
  danger:  'text-rose-600 dark:text-rose-400',
};
