import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import posthog from 'posthog-js'

posthog.init('phc_372ydiy6wqYdBc9oLqL5v0SHrPJmkTht3iHUXycIRAx', { api_host: 'https://locky.ar' })

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
