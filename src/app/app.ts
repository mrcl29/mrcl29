import { Component, ChangeDetectionStrategy, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { Repo } from './core/models/repo.model';
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { RepoCardComponent } from './shared/components/repo-card/repo-card.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, TranslateModule, LanguageSwitcherComponent, ThemeSwitcherComponent, RepoCardComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class App implements AfterViewInit {
    title = 'Portfolio Marc Llobera';
    private platformId = inject(PLATFORM_ID);
    currentYear = new Date().getFullYear();

    private http = inject(HttpClient);
    repos = toSignal(this.http.get<Repo[]>('/assets/repos.json'), { initialValue: [] });


    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const hiddenElements = document.querySelectorAll('.scroll-reveal');
            hiddenElements.forEach((el) => observer.observe(el));
        }
    }
}
