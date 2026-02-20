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
      class="inline-flex items-center gap-1 ml-4 lg:ml-0 px-4 py-2 lg:text-sm text-xs border rounded-full cursor-pointer bg-transparent border-(--color-brand-primary) text-(--color-brand-primary) transition-all duration-300 ease-in-out hover:opacity-70 hover:scale-110 active:scale-95"
      [attr.aria-label]="languageService.currentLang() === 'es' ? 'Switch to English' : 'Cambiar a Español'">
      <span [class.font-bold]="languageService.currentLang() === 'es'">ES</span>
      <span class="opacity-50 lg:text-sm text-xs">/</span>
      <span [class.font-bold]="languageService.currentLang() === 'en'">EN</span>
    </button>
  `,
    styles: []
})
export class LanguageSwitcherComponent {
    languageService = inject(LanguageService);
}
