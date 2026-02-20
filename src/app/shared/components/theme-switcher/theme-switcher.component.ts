import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
    selector: 'app-theme-switcher',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button
      (click)="themeService.toggleTheme()"
      class="hidden lg:inline-flex md:inline-flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer bg-transparent border-(--color-brand-primary) text-(--color-brand-primary) transition-all duration-300 ease-in-out hover:opacity-70 hover:scale-110 active:scale-95"
      [attr.aria-label]="themeService.currentTheme() === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">

      <!-- Icono Sol (visible en modo claro) -->
      <svg *ngIf="themeService.currentTheme() === 'light'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>

      <!-- Icono Luna (visible en modo oscuro) -->
      <svg *ngIf="themeService.currentTheme() === 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </button>
  `,
    styles: []
})
export class ThemeSwitcherComponent {
    themeService = inject(ThemeService);
}
