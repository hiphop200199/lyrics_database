import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes,withInMemoryScrolling({
      scrollPositionRestoration:"enabled",
      anchorScrolling:"enabled"
     }))]//如果要讓angular執行網址片段捲動，需要以上設定
};
