// src/app/components/repo-card/repo-card.component.ts
import { Component, input, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Repo } from '../../../core/models/repo.model';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
    selector: 'app-repo-card',
    standalone: true,
    template: `
     <a [href]="repo().homepageUrl ? repo().homepageUrl : repo().url" target="_blank" rel="noopener noreferrer" class="block h-full group">
    <article class="h-full p-6 border border-neutral-800 rounded-xl bg-neutral-900/30 hover:bg-neutral-800 in-[.light-mode]:bg-neutral-50 in-[.light-mode]:text-black in-[.light-mode]:hover:bg-neutral-200 text-white transition-colors flex flex-col relative overflow-hidden">

      @if (animatedIcon()) {
        <div class="absolute top-2 right-2 w-12 h-12 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none [&>svg]:w-full [&>svg]:h-full text-neutral-500 group-hover:text-neutral-300"
             [innerHTML]="animatedIcon()">
        </div>
       }

      <div class="flex justify-between items-start mb-3 relative z-10">
        <h3 class="text-xl font-medium pr-8">
            {{ repo().name }}
        </h3>
        @if (repo().stargazerCount > 3) {
        <div class="flex items-center gap-1 text-sm opacity-70">
          <span>⭐</span>
          <span>{{ repo().stargazerCount }}</span>
        </div>
        }
      </div>

      <p class="text-sm opacity-70 mb-6 grow leading-relaxed relative z-10">
        {{ repo().description }}
      </p>

      <div class="flex flex-wrap gap-3 mt-auto relative z-10">
        @for (item of techList(); track item.name) {
            <div class="w-6 h-6 text-neutral-400 [&>svg]:w-full [&>svg]:h-full" [innerHTML]="item.icon" [title]="item.name"></div>
        }
      </div>

    </article>
     </a>
  `,
    styles: [`
    :host ::ng-deep .group:hover svg * {
      animation-play-state: running !important;
    }
    :host ::ng-deep svg * {
      animation-play-state: paused !important;
    }
  `]
})
export class RepoCardComponent {
    repo = input.required<Repo>();
    private sanitizer = inject(DomSanitizer);
    private themeService = inject(ThemeService);

    techList = computed(() => {
        const tech = this.repo().tech;
        const currentTheme = this.themeService.currentTheme();
        return Object.entries(tech || {})
            .filter(([, value]) => !!value[currentTheme])
            .map(([key, value]) => ({
                name: key,
                icon: this.sanitizer.bypassSecurityTrustHtml(value[currentTheme])
            }));
    });

    animatedIcon = computed(() => {
        const icon = this.repo().animatedIcon;
        return icon ? this.sanitizer.bypassSecurityTrustHtml(icon) : null;
    });
}
