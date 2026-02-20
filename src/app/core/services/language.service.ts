import { Injectable, inject, signal, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private translate = inject(TranslateService);
    private titleService = inject(Title);
    private metaService = inject(Meta);

    // Signal para el idioma actual, inicializado en español
    currentLang = signal<string>('es');

    constructor() {
        this.initLanguage();

        // Effect: Se ejecuta automáticamente cada vez que currentLang cambia
        effect(() => {
            const lang = this.currentLang();
            this.translate.use(lang);
            this.updateMetadata();
        });
    }

    private initLanguage() {
        // Escalable: Aquí puedes añadir más idiomas en el futuro
        this.translate.addLangs(['es', 'en']);
        this.translate.setDefaultLang('es');
    }

    // Método específico para el toggle solicitado
    toggleLanguage() {
        this.currentLang.update(lang => lang === 'es' ? 'en' : 'es');
    }

    // Actualiza título y meta tags dinámicamente
    private updateMetadata() {
        this.translate.get('META').subscribe(meta => {
            this.titleService.setTitle(meta.TITLE);
            this.metaService.updateTag({ name: 'description', content: meta.DESCRIPTION });
        });
    }
}
