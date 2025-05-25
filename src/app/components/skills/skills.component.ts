import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('skillsGrid', { static: false }) skillsGrid!: ElementRef;
  @ViewChild('skillsHeader', { static: false }) skillsHeader!: ElementRef;
  
  private observer!: IntersectionObserver;
  private headerObserver!: IntersectionObserver;
  public isVisible = false;
  public isHeaderVisible = false;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    // Intersection Observer für Header-Animation
    this.headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            this.isHeaderVisible = true;
            this.startHeaderAnimation();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Intersection Observer für Skills-Grid-Animation
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            this.isVisible = true;
            this.startSkillAnimation();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );
  }

  ngAfterViewInit() {
    // Observer für Header
    if (this.skillsHeader) {
      this.headerObserver.observe(this.skillsHeader.nativeElement);
    }

    // Observer für Skills Grid
    if (this.skillsGrid) {
      this.observer.observe(this.skillsGrid.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.headerObserver) {
      this.headerObserver.disconnect();
    }
  }

  private startHeaderAnimation() {
    if (!this.skillsHeader) return;

    const header = this.skillsHeader.nativeElement;
    const title = header.querySelector('.section-title');
    const description = header.querySelector('.skills-description');
    const grid = this.skillsGrid?.nativeElement;

    // Header Container Animation
    setTimeout(() => {
      header.classList.add('animate-in');
    }, 100);

    // Title Animation
    setTimeout(() => {
      if (title) {
        title.classList.add('animate-in');
      }
    }, 200);

    // Description Animation
    setTimeout(() => {
      if (description) {
        description.classList.add('animate-in');
      }
    }, 400);

    // Skills Grid Container Animation
    setTimeout(() => {
      if (grid) {
        grid.classList.add('animate-in');
      }
    }, 600);
  }

  private startSkillAnimation() {
    if (!this.skillsGrid) return;

    const skillItems = this.skillsGrid.nativeElement.querySelectorAll('.skill-item');
    
    skillItems.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => {
        item.classList.add('animate-in');
      }, index * 150 + 800); // Startet nach der Grid-Animation (800ms)
    });
  }

  // Optional: Method to reset animations (useful for testing)
  public resetAnimations() {
    const elements = [
      this.skillsHeader?.nativeElement,
      this.skillsHeader?.nativeElement?.querySelector('.section-title'),
      this.skillsHeader?.nativeElement?.querySelector('.skills-description'),
      this.skillsGrid?.nativeElement,
      ...Array.from(this.skillsGrid?.nativeElement?.querySelectorAll('.skill-item') || [])
    ].filter(Boolean);

    elements.forEach(element => {
      if (element) {
        element.classList.remove('animate-in');
      }
    });

    this.isVisible = false;
    this.isHeaderVisible = false;
  }

  // Optional: Method to trigger animations manually
  public triggerAnimations() {
    if (!this.isHeaderVisible) {
      this.startHeaderAnimation();
    }
    if (!this.isVisible) {
      this.startSkillAnimation();
    }
  }
}