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
      class="inline-flex items-center gap-1 px-4 py-2 text-sm border rounded-full cursor-pointer bg-transparent border-(--color-brand-primary) text-(--color-brand-primary) transition-opacity duration-200 ease-in-out hover:opacity-70"
      [attr.aria-label]="languageService.currentLang() === 'es' ? 'Switch to English' : 'Cambiar a Español'">
      <span [class.font-extrabold]="languageService.currentLang() === 'es'">ES</span>
      <span class="opacity-50">/</span>
      <span [class.font-extrabold]="languageService.currentLang() === 'en'">EN</span>
    </button>
  `,
    styles: []
})
export class LanguageSwitcherComponent {
    languageService = inject(LanguageService);
}
