import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private message = '';
  private isToastVisible = false;

  constructor() { }

  showToast(message: string): void {
    this.message = message;
    this.isToastVisible = true;

    setTimeout(() => {
      this.isToastVisible = false;
    }, 3000);
  }

  closeToast(): void {
    this.isToastVisible = false;
  }

  getMessages(): string {
    return this.message;
  }

  isVisible(): boolean {
    return this.isToastVisible;
  }
}
