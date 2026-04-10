import { Component, ChangeDetectionStrategy, inject, afterNextRender, ChangeDetectorRef, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Repo } from './core/models/repo.model';
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { RepoCardComponent } from './shared/components/repo-card/repo-card.component';
import { ExperienceCardComponent } from './shared/components/experience-card/experience-card.component';
import { githubLink, linkedInLink } from "./shared/constants/links.constants";
import { ToolCarouselComponent } from './shared/components/tool-carousel/tool-carousel.component';
import { TOOLS_PART_1, TOOLS_PART_2 } from './shared/constants/tools.constants';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, TranslateModule, LanguageSwitcherComponent, ThemeSwitcherComponent, RepoCardComponent, ExperienceCardComponent, ToolCarouselComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
    title = 'Portfolio Marc Llobera';
    currentYear = new Date().getFullYear();

    private http = inject(HttpClient);
    private cdr = inject(ChangeDetectorRef);
    private translateService = inject(TranslateService);

    repos = toSignal(this.http.get<Repo[]>('assets/repos.json'), { initialValue: [] });
    linkedInLink = linkedInLink;
    githubLink = githubLink;
    TOOLS_PART_1 = TOOLS_PART_1;
    TOOLS_PART_2 = TOOLS_PART_2;

    private observer: IntersectionObserver | null = null;

    constructor() {
        // En modo Zoneless, forzamos el repintado síncrono al terminar de cargar los JSON de idioma
        this.translateService.onLangChange.subscribe(() => {
            this.cdr.detectChanges();
            this.observeScrollElements();
        });
        this.translateService.onDefaultLangChange.subscribe(() => {
            this.cdr.detectChanges();
            this.observeScrollElements();
        });

        effect(() => {
            // Al cambiar los repositorios, volvemos a buscar nuevos elementos en el DOM
            this.repos();
            this.observeScrollElements();
        });

        afterNextRender(() => {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Dejamos de observar el elemento una vez ya es visible (mejora el rendimiento)
                        this.observer?.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            this.observeScrollElements();
        });
    }

    private observeScrollElements() {
        if (!this.observer) return; // Aseguramos que el observer ya esté inicializado

        // Pequeño delay para asegurar que ngx-translate y la hidratación han expandido el DOM
        setTimeout(() => {
            const hiddenElements = document.querySelectorAll('.scroll-reveal:not(.visible)');
            hiddenElements.forEach((el) => this.observer?.observe(el));
        }, 100);
    }
}
