import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const PASSWORD = 'a-secret-password-132213';

export function login(username: string, password: string) {
  if (username === 'admin' && password === PASSWORD) {
    return true;
  }
  return false;
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
