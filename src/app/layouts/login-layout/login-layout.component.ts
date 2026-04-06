import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  ngOnInit(): void {
    const isDark = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDark);
  }
}
