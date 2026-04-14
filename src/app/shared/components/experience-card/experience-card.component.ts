import { Component, input, inject, signal, effect, computed } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../../core/services/theme.service';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-experience-card',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent {
    // Recibimos la experiencia individual iterada desde el JSON
    experience = input.required<any>();

    private sanitizer = inject(DomSanitizer);
    private themeService = inject(ThemeService);
    private http = inject(HttpClient);

    // Estado para controlar si los puntos están expandidos
    isExpanded = signal(false);

    // Almacena un diccionario con las versiones de cada herramienta: { 'java': { dark: '...', light: '...' } }
    techData = signal<Record<string, { dark: string; light: string }>>({});

    // Computamos la lista final reactivamente basándonos en el tema actual y los datos guardados
    techList = computed(() => {
        const tools: string[] = this.experience().TOOLS || [];
        const data = this.techData();
        const currentTheme = this.themeService.currentTheme();

        return tools.map(toolName => {
            const toolData = data[toolName];
            const svgContent = toolData ? toolData[currentTheme] : '';
            return {
                name: toolName,
                icon: svgContent ? this.sanitizer.bypassSecurityTrustHtml(svgContent) : null,
                isIcon: !!svgContent
            };
        });
    });

    constructor() {
        effect(() => {
            const exp = this.experience();
            const tools: string[] = exp.TOOLS || [];

            tools.forEach(toolName => {
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
                    // Actualizamos el diccionario con los iconos si se encontró al menos uno
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
