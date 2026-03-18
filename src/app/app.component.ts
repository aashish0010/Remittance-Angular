import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { AuthStateService } from './core/services/auth-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  template: `
    <p-toast position="top-right" />
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthStateService) {}
  ngOnInit(): void { this.auth.loadFromSession(); }
}
