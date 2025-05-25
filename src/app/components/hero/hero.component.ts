import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(public languageService: LanguageService) {}

  scrollToContact(): void {
    console.log('CTA Button clicked - scrolling to contact');
    const element = document.getElementById('contact');
    
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      console.log('Contact element found, scrolling to position:', offsetPosition);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error('Contact section not found! Available sections:', 
        Array.from(document.querySelectorAll('[id]')).map(el => el.id));
    }
  }

  scrollToNext(): void {
    // Scroll-Indikator scrollt zur nächsten Sektion (About)
    const element = document.getElementById('about');
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}