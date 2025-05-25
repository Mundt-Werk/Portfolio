// ===== projects.component.ts =====
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('projectsGrid', { static: false }) projectsGrid!: ElementRef;
  
  private observer!: IntersectionObserver;
  public animatedProjects = new Set<number>();

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    // Intersection Observer für Project-Animationen
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            const projectIndex = parseInt(entry.target.getAttribute('data-project-index') || '0');
            this.animateProject(entry.target as HTMLElement, projectIndex);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  ngAfterViewInit() {
    if (this.projectsGrid) {
      // Beobachte alle Project-Cards
      const projectCards = this.projectsGrid.nativeElement.querySelectorAll('.project-card');
      projectCards.forEach((card: HTMLElement, index: number) => {
        card.setAttribute('data-project-index', index.toString());
        this.observer.observe(card);
      });
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private animateProject(projectElement: HTMLElement, index: number) {
    if (this.animatedProjects.has(index)) return;
    
    this.animatedProjects.add(index);
    
    // Verzögerung für staggered effect
    setTimeout(() => {
      projectElement.classList.add('animate-in');
      
      // Zusätzliche Animation für Inhalt
      const content = projectElement.querySelector('.project-content');
      const image = projectElement.querySelector('.project-image');
      
      if (content && image) {
        setTimeout(() => {
          content.classList.add('content-animate');
          image.classList.add('image-animate');
        }, 200);
      }
    }, index * 300); // Jedes Projekt 300ms später
  }

  // Utility-Methode für Template
  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}

