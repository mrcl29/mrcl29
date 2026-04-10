import { Component, input, inject, signal, effect, computed } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../../core/services/theme.service';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
    selector: 'app-tool-carousel',
    standalone: true,
    templateUrl: './tool-carousel.component.html',
    styleUrls: ['./tool-carousel.component.css']
})
export class ToolCarouselComponent {
    tools = input.required<string[][]>();
    direction = input<'ltr' | 'rtl'>('ltr');

    private sanitizer = inject(DomSanitizer);
    private themeService = inject(ThemeService);
    private http = inject(HttpClient);

    techData = signal<Record<string, { dark: string; light: string }>>({});

    techList = computed(() => {
        const toolsArray = this.tools() || [];
        const data = this.techData();
        const currentTheme = this.themeService.currentTheme();

        return toolsArray.map(([toolName, link]) => {
            const toolData = data[toolName];
            const svgContent = toolData ? toolData[currentTheme] : '';
            return {
                name: toolName,
                link: link.startsWith('http') ? link : `https://${link}`,
                icon: svgContent ? this.sanitizer.bypassSecurityTrustHtml(svgContent) : null,
                isIcon: !!svgContent
            };
        });
    });

    constructor() {
        effect(() => {
            const toolsArray = this.tools() || [];
            toolsArray.forEach(([toolName]) => {
                const toolKey = toolName.toLowerCase();
                const iconPath = `assets/icons/${toolKey}/${toolKey}.svg`;
                const iconDarkPath = `assets/icons/${toolKey}/${toolKey}_dark.svg`;
                const iconLightPath = `assets/icons/${toolKey}/${toolKey}_light.svg`;

                this.http.get(iconPath, { responseType: 'text' }).pipe(
                    map(content => ({ dark: content, light: content })),
                    catchError(() => forkJoin({
                        dark: this.http.get(iconDarkPath, { responseType: 'text' }).pipe(catchError(() => of(''))),
                        light: this.http.get(iconLightPath, { responseType: 'text' }).pipe(catchError(() => of('')))
                    }))
                ).subscribe(icons => {
                    if (icons.dark || icons.light) {
                        this.techData.update(data => ({
                            ...data,
                            [toolName]: icons
                        }));
                    }
                });
            });
        });
    }
}
