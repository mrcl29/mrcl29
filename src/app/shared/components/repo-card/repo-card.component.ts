// src/app/components/repo-card/repo-card.component.ts
import { Component, input } from '@angular/core';
import { Repo } from '../../../core/models/repo.model';

@Component({
    selector: 'app-repo-card',
    standalone: true,
    template: `
     <a [href]="repo().homepageUrl ? repo().homepageUrl : repo().url" target="_blank" rel="noopener noreferrer" class="">
    <article class="h-full p-6 border border-neutral-800 rounded-xl bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors flex flex-col">

      <div class="flex justify-between items-start mb-3">
        <h3 class="text-xl font-medium">

            {{ repo().name }}

        </h3>
        @if (repo().stargazerCount > 3) {
        <div class="flex items-center gap-1 text-sm opacity-70">
          <span>⭐</span>
          <span>{{ repo().stargazerCount }}</span>
        </div>
        }
      </div>

      <p class="text-sm opacity-70 mb-6 grow leading-relaxed">
        {{ repo().description }}
      </p>

      <div class="flex flex-col gap-3">
        @if (repo().languages.nodes.length) {
          <div class="flex flex-wrap gap-2">
            @for (lang of repo().languages.nodes; track lang.name) {
              <span class="px-2 py-0.5 text-xs rounded-md bg-neutral-800 border border-neutral-700 opacity-80">
                {{ lang.name }}
              </span>
            }
          </div>
        }

        @if (repo().repositoryTopics.nodes.length) {
          <div class="flex flex-wrap gap-x-3 gap-y-1">
            @for (topic of repo().repositoryTopics.nodes; track topic.topic.name) {
              <span class="text-xs text-blue-400/80">#{{ topic.topic.name }}</span>
            }
          </div>
        }
      </div>

    </article>
     </a>
  `
})
export class RepoCardComponent {
    repo = input.required<Repo>();
}
