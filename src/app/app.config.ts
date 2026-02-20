import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    // Use an absolute path (starts with /) to fix the 404 in SSR
    return new (TranslateHttpLoader as any)(http, '/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideHttpClient(withFetch()), // Necesario para cargar los JSON
        {
            provide: TRANSLATE_HTTP_LOADER_CONFIG,
            useValue: {
                // Must match the absolute path used in the factory
                prefix: '/i18n/',
                suffix: '.json'
            }
        },
        importProvidersFrom(
            TranslateModule.forRoot({
                // Replace deprecated 'defaultLanguage' with 'fallbackLang'
                fallbackLang: 'es',
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            })
        ),
    ]
};
