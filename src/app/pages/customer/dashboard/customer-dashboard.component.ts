import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="page-header">
      <h2>Customer Dashboard</h2>
    </div>
    <mat-card class="pa-6 text-center">
      <mat-icon style="font-size: 64px; width: 64px; height: 64px; color: #9e9e9e;">construction</mat-icon>
      <h3>Coming Soon</h3>
      <p>The Customer Portal is under development.</p>
    </mat-card>
  `,
  styles: [`.page-header { margin-bottom: 24px; } .page-header h2 { font-weight: 700; margin: 0; }`]
})
export class CustomerDashboardComponent {}
