import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { Clipboard } from "@angular/cdk/clipboard";
import {ToastService} from "../service/toast.service";
import {ContainerBoxComponent} from "../container-box/container-box.component";

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, ContainerBoxComponent],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css',
})
export class PasswordGeneratorComponent implements OnInit {
  toastService: ToastService;
  passwordLength = 12;
  hasLowercase = true;
  hasUppercase = true;
  hasNumbers = true;
  hasSpecialCharacters = false;
  securePassword = '';

  constructor(private clipboard: Clipboard, toastService: ToastService) {
    this.toastService = toastService;
  }

  ngOnInit(): void {
    this.securePassword = this.generatePassword();
  }

  createNewPassword(): void {
    this.securePassword = this.generatePassword();
  }

  copyPasswordToClipboard(): void {
    this.clipboard.copy(this.securePassword);
    this.toastService.showToast('Password copied to clipboard');
  }

  generatePassword(): string {
    let securePassword = '';
    let characters = '';

    if (this.hasUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (this.hasLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (this.hasNumbers) {
      characters += '0123456789';
    }

    if (this.hasSpecialCharacters) {
      characters += '!@#$%^&*()_+~`|}{[]:;?><,./-';
    }

    for (let i = 0; i < this.passwordLength; i++) {
      securePassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return securePassword
  }
}
