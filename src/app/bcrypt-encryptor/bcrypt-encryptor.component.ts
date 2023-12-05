import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerBoxComponent} from "../container-box/container-box.component";
// @ts-ignore
import bcrypt from "bcryptjs";
import {FormsModule} from "@angular/forms";
import {ToastService} from "../service/toast.service";
import {Clipboard} from "@angular/cdk/clipboard";
import posthog from 'posthog-js'; 

@Component({
  selector: 'app-bcrypt-encryptor',
  standalone: true,
  imports: [CommonModule, ContainerBoxComponent, FormsModule],
  templateUrl: './bcrypt-encryptor.component.html',
  styleUrl: './bcrypt-encryptor.component.css'
})
export class BcryptEncryptorComponent {
  encryptedPassword: string = '';
  rawPassword: string = '';


  constructor(
    private toastService: ToastService,
    private clipboard: Clipboard
  ) {
  }

  encryptPassword(): void {
    posthog.capture('password encrypted', { property: '1' }); 

    const salt = bcrypt.genSaltSync(10);
    this.encryptedPassword = bcrypt.hashSync(this.rawPassword.trim(), salt);
  }

  copyPasswordToClipboard(): void {
    if (this.rawPassword.trim().length === 0) return;

    posthog.capture('password encrypted copied', { property: '1' }); 

    this.clipboard.copy(this.encryptedPassword);
    this.toastService.showToast('Password copied to clipboard');
  }

}
