import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  toastService: ToastService;

  constructor(toastService: ToastService) {
    this.toastService = toastService;
  }

  closeToast() {
    this.toastService.closeToast();
  }

}
