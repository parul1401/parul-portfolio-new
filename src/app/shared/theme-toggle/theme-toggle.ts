import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      <span class="theme-toggle-icon">
        <svg *ngIf="!isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg *ngIf="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 1000;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--accent-primary);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow);
      transition: transform 0.3s ease, background 0.3s ease;
      color: white;
    }
    
    .theme-toggle:hover {
      transform: scale(1.1);
    }
    
    .theme-toggle-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (max-width: 768px) {
      .theme-toggle {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDark = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    
    if (this.isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
