import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button
      (click)="languageService.toggleLanguage()"
      class="lang-btn"
      [attr.aria-label]="languageService.currentLang() === 'es' ? 'Switch to English' : 'Cambiar a Español'">
      <span [class.active]="languageService.currentLang() === 'es'">ES</span>
      <span class="separator">/</span>
      <span [class.active]="languageService.currentLang() === 'en'">EN</span>
    </button>
  `,
    styles: [`
    .lang-btn {
      background: transparent;
      border: 1px solid currentColor;
      border-radius: 999px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      transition: opacity 0.2s ease;
    }
    .lang-btn:hover { opacity: 0.7; }
    .active { font-weight: 800; }
    .separator { opacity: 0.5; }
  `]
})
export class LanguageSwitcherComponent {
    languageService = inject(LanguageService);
}
