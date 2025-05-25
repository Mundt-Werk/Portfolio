import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('contactContent', { static: false }) contactContent!: ElementRef;

  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showScrollButton = false;
  
  private observer!: IntersectionObserver;
  private isAnimated = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setupIntersectionObserver();
  }

  ngAfterViewInit(): void {
    if (this.contactContent) {
      this.observer.observe(this.contactContent.nativeElement);
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
            this.startContactAnimation();
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

  private startContactAnimation(): void {
    if (!this.contactContent) return;

    const contactContent = this.contactContent.nativeElement;
    const contactText = contactContent.querySelector('.contact-text');
    const formContainer = contactContent.querySelector('.contact-form-container');
    const formGroups = contactContent.querySelectorAll('.form-group');
    const submitButton = contactContent.querySelector('.submit-button');

    // Main content animation
    setTimeout(() => {
      contactContent.classList.add('animate-in');
    }, 100);

    // Text section animation
    setTimeout(() => {
      if (contactText) {
        contactText.classList.add('animate-in');
      }
    }, 200);

    // Form container animation
    setTimeout(() => {
      if (formContainer) {
        formContainer.classList.add('animate-in');
      }
    }, 400);

    // Form groups staggered animation
    formGroups.forEach((group: Element, index: number) => {
      setTimeout(() => {
        group.classList.add('animate-in');
      }, 600 + (index * 100));
    });

    // Submit button animation
    setTimeout(() => {
      if (submitButton) {
        submitButton.classList.add('animate-in');
      }
    }, 1000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    // Button zeigen wenn User mehr als 300px gescrollt hat
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      try {
        // Simulate API call
        await this.emailService.sendEmail(this.contactForm.value);
        
        // Show success message
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
        
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending message. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as touched to show validation errors
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Optional: Reset animations for testing
  public resetAnimations(): void {
    this.isAnimated = false;
    const elements = [
      this.contactContent?.nativeElement,
      this.contactContent?.nativeElement?.querySelector('.contact-text'),
      this.contactContent?.nativeElement?.querySelector('.contact-form-container'),
      this.contactContent?.nativeElement?.querySelector('.submit-button'),
      ...Array.from(this.contactContent?.nativeElement?.querySelectorAll('.form-group') || [])
    ].filter(Boolean);

    elements.forEach(element => {
      if (element) {
        element.classList.remove('animate-in');
      }
    });
  }
}