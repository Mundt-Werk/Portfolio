import { Injectable } from '@angular/core';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  async sendEmail(formData: ContactFormData): Promise<void> {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email sent with data:', formData);
        resolve();
      }, 2000);
    });
  }
}