import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-datenschutz',
  imports: [CommonModule, RouterLink],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.css'
})
export class DatenschutzComponent implements OnInit, AfterViewInit {
  @ViewChild('datenschutzContent', { static: false }) datenschutzContent!: ElementRef;

  private isAnimated = false;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    // Trigger animation after component loads
  }

  ngAfterViewInit(): void {
    // Start animation immediately since it's a separate page
    setTimeout(() => {
      this.startDatenschutzAnimation();
    }, 200);
  }

  getCurrentDate(): string {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return today.toLocaleDateString('de-DE', options);
  }

  private startDatenschutzAnimation(): void {
    if (this.isAnimated) return;
    this.isAnimated = true;

    if (!this.datenschutzContent) return;

    const datenschutzContent = this.datenschutzContent.nativeElement;
    const title = datenschutzContent.querySelector('h1');
    const h2headings = datenschutzContent.querySelectorAll('h2');
    const h3headings = datenschutzContent.querySelectorAll('h3');
    const h4headings = datenschutzContent.querySelectorAll('h4');
    const paragraphs = datenschutzContent.querySelectorAll('p');
    const backLink = datenschutzContent.querySelector('.back-link');

    // Main content animation
    setTimeout(() => {
      datenschutzContent.classList.add('animate-in');
    }, 100);

    // Title animation
    setTimeout(() => {
      if (title) {
        title.classList.add('animate-in');
      }
    }, 300);

    // H2 headings staggered animation
    h2headings.forEach((heading: Element, index: number) => {
      setTimeout(() => {
        heading.classList.add('animate-in');
      }, 500 + (index * 100));
    });

    // H3 headings staggered animation
    h3headings.forEach((heading: Element, index: number) => {
      setTimeout(() => {
        heading.classList.add('animate-in');
      }, 600 + (index * 80));
    });

    // H4 headings staggered animation
    h4headings.forEach((heading: Element, index: number) => {
      setTimeout(() => {
        heading.classList.add('animate-in');
      }, 650 + (index * 60));
    });

    // Paragraphs staggered animation
    paragraphs.forEach((paragraph: Element, index: number) => {
      setTimeout(() => {
        paragraph.classList.add('animate-in');
      }, 700 + (index * 50));
    });

    // Back link animation
    setTimeout(() => {
      if (backLink) {
        backLink.classList.add('animate-in');
      }
    }, 1500);
  }

  // Optional: Reset animations for testing
  public resetAnimations(): void {
    this.isAnimated = false;
    if (!this.datenschutzContent) return;

    const datenschutzContent = this.datenschutzContent.nativeElement;
    const elements = [
      datenschutzContent,
      datenschutzContent.querySelector('h1'),
      datenschutzContent.querySelector('.back-link'),
      ...Array.from(datenschutzContent.querySelectorAll('h2')),
      ...Array.from(datenschutzContent.querySelectorAll('h3')),
      ...Array.from(datenschutzContent.querySelectorAll('h4')),
      ...Array.from(datenschutzContent.querySelectorAll('p'))
    ].filter(Boolean);

    elements.forEach(element => {
      if (element) {
        element.classList.remove('animate-in');
      }
    });
  }
}