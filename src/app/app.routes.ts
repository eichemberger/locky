import { Routes } from '@angular/router';
import {PasswordGeneratorComponent} from "./password-generator/password-generator.component";
import {BcryptEncryptorComponent} from "./bcrypt-encryptor/bcrypt-encryptor.component";

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
  }
];
