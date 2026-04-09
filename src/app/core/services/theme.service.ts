import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private document = inject(DOCUMENT);

    // Signal para el tema actual, inicializado en 'dark' (por defecto)
    currentTheme = signal<'dark' | 'light'>('dark');

    constructor() {
        // Effect: Se ejecuta automáticamente cada vez que currentTheme cambia
        effect(() => {
            const theme = this.currentTheme();
            if (theme === 'light') {
                this.document.documentElement.classList.add('light-mode');
            } else {
                this.document.documentElement.classList.remove('light-mode');
            }
        });
    }

    toggleTheme() {
        const switchTheme = () => {
            this.currentTheme.update(theme => theme === 'dark' ? 'light' : 'dark');
            // Actualizar el DOM síncronamente asegura que startViewTransition capture el estado final antes del render.
            if (this.currentTheme() === 'light') {
                this.document.documentElement.classList.add('light-mode');
            } else {
                this.document.documentElement.classList.remove('light-mode');
            }
        };

        if (!('startViewTransition' in this.document)) {
            switchTheme();
        } else {
            (this.document as any).startViewTransition(switchTheme);
        }
    }
}
