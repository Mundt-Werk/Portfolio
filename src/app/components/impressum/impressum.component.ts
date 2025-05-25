import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent implements OnInit, AfterViewInit {
  @ViewChild('impressumContent', { static: false }) impressumContent!: ElementRef;

  private isAnimated = false;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    // Trigger animation after component loads
  }

  ngAfterViewInit(): void {
    // Start animation immediately since it's a separate page
    setTimeout(() => {
      this.startImpressumAnimation();
    }, 200);
  }

  private startImpressumAnimation(): void {
    if (this.isAnimated) return;
    this.isAnimated = true;

    if (!this.impressumContent) return;

    const impressumContent = this.impressumContent.nativeElement;
    const title = impressumContent.querySelector('h1');
    const headings = impressumContent.querySelectorAll('h2');
    const paragraphs = impressumContent.querySelectorAll('p');
    const backLink = impressumContent.querySelector('.back-link');

    // Main content animation
    setTimeout(() => {
      impressumContent.classList.add('animate-in');
    }, 100);

    // Title animation
    setTimeout(() => {
      if (title) {
        title.classList.add('animate-in');
      }
    }, 300);

    // Headings staggered animation
    headings.forEach((heading: Element, index: number) => {
      setTimeout(() => {
        heading.classList.add('animate-in');
      }, 500 + (index * 100));
    });

    // Paragraphs staggered animation
    paragraphs.forEach((paragraph: Element, index: number) => {
      setTimeout(() => {
        paragraph.classList.add('animate-in');
      }, 600 + (index * 80));
    });

    // Back link animation
    setTimeout(() => {
      if (backLink) {
        backLink.classList.add('animate-in');
      }
    }, 1200);
  }

  // Optional: Reset animations for testing
  public resetAnimations(): void {
    this.isAnimated = false;
    if (!this.impressumContent) return;

    const impressumContent = this.impressumContent.nativeElement;
    const elements = [
      impressumContent,
      impressumContent.querySelector('h1'),
      impressumContent.querySelector('.back-link'),
      ...Array.from(impressumContent.querySelectorAll('h2')),
      ...Array.from(impressumContent.querySelectorAll('p'))
    ].filter(Boolean);

    elements.forEach(element => {
      if (element) {
        element.classList.remove('animate-in');
      }
    });
  }
}