import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('aboutContent', { static: false }) aboutContent!: ElementRef;

  private observer!: IntersectionObserver;
  private isAnimated = false;

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngAfterViewInit(): void {
    if (this.aboutContent) {
      this.observer.observe(this.aboutContent.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2 && !this.isAnimated) {
            this.startAboutAnimation();
            this.isAnimated = true;
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  private startAboutAnimation(): void {
    if (!this.aboutContent) return;

    const aboutContent = this.aboutContent.nativeElement;
    const aboutImage = aboutContent.querySelector('.about-image');
    const aboutText = aboutContent.querySelector('.about-text');
    const sectionTitle = aboutContent.querySelector('.section-title');
    const aboutDescription = aboutContent.querySelector('.about-description');

    // Main content animation
    setTimeout(() => {
      aboutContent.classList.add('animate-in');
    }, 100);

    // Image animation (from left)
    setTimeout(() => {
      if (aboutImage) {
        aboutImage.classList.add('animate-in');
      }
    }, 200);

    // Text section animation (from right)
    setTimeout(() => {
      if (aboutText) {
        aboutText.classList.add('animate-in');
      }
    }, 300);

    // Title animation
    setTimeout(() => {
      if (sectionTitle) {
        sectionTitle.classList.add('animate-in');
      }
    }, 500);

    // Description animation
    setTimeout(() => {
      if (aboutDescription) {
        aboutDescription.classList.add('animate-in');
      }
    }, 700);
  }

  // Optional: Reset animations for testing
  public resetAnimations(): void {
    this.isAnimated = false;
    const elements = [
      this.aboutContent?.nativeElement,
      this.aboutContent?.nativeElement?.querySelector('.about-image'),
      this.aboutContent?.nativeElement?.querySelector('.about-text'),
      this.aboutContent?.nativeElement?.querySelector('.section-title'),
      this.aboutContent?.nativeElement?.querySelector('.about-description')
    ].filter(Boolean);

    elements.forEach(element => {
      if (element) {
        element.classList.remove('animate-in');
      }
    });
  }

  // Optional: Trigger animations manually
  public triggerAnimations(): void {
    if (!this.isAnimated) {
      this.startAboutAnimation();
    }
  }
}