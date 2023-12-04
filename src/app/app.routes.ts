import { Routes } from '@angular/router';
import {PasswordGeneratorComponent} from "./password-generator/password-generator.component";
import {BcryptEncryptorComponent} from "./bcrypt-encryptor/bcrypt-encryptor.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: PasswordGeneratorComponent,
    title: 'Locky'
  },
  {
    path: 'encrypt/bcrypt',
    component: BcryptEncryptorComponent,
    title: 'Bcrypt Encryptor',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Not found',
  }
];
