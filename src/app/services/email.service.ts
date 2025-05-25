import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

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

  // EmailJS Konfiguration
  private readonly SERVICE_ID = 'service_adfym0d';
  private readonly TEMPLATE_ID = 'template_7uqwhjc';
  private readonly PUBLIC_KEY = '_h73Tlbe6YTM1mR9C';

  constructor() {
    // EmailJS NICHT hier initialisieren - machen wir in der sendEmail Methode
  }

  async sendEmail(formData: ContactFormData): Promise<void> {
    try {
      // Template-Parameter für EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,  
        message: formData.message
      };

      // EmailJS direkt mit Public Key aufrufen (ohne init)
      const result = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY  // Public Key direkt hier übergeben
      );

      console.log('✅ Email sent successfully:', result);
      return Promise.resolve();

    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      
      // Detaillierte Fehlermeldung für Debugging
      if (error && typeof error === 'object') {
        console.error('❌ Error status:', (error as any).status);
        console.error('❌ Error text:', (error as any).text);
      }
      
      throw new Error('Failed to send email. Check console for details.');
    }
  }
}