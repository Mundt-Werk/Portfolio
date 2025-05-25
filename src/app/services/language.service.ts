import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');
  public language$ = this.currentLanguage.asObservable();

  private translations: any = {
    en: {
      navigation: {
        about: 'About Me',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hello there!',
        name: "I'm Marco Mundt,",
        title: 'Frontend Developer'
      },
      about: {
        title: 'ABOUT ME',
        description: "Hey there! I'm Marco, a frontend developer fueled by a passion for crafting user-friendly digital experiences. With a talent for problem-solving and an eye for detail, I specialize in translating complex ideas into elegant web products.",
        cta: "Let's connect and create something amazing together"
      },
      skills: {
        title: 'SKILLS',
        description: 'As a dedicated front-end developer, I specialize in crafting engaging and intuitive web applications. My skill set includes a wide range of tools and technologies essential for building modern, responsive, and user-friendly interfaces.'
      },
      projects: {
        title: 'MY PROJECTS',
        elPolloLoco: {
          description: 'El Pollo Loco is an interactive jump-and-run game developed with JavaScript. Through the use of object-oriented programming and clean structured code, game mechanics such as collision detection, gravity and animations are realized. El Pollo Loco offers a challenging and entertaining gaming experience on desktop and mobile devices.'
        },
        pokedex: {
          description: 'This project is an interactive Pokédex that retrieves Pokémon data via an API and displays it in a user-friendly way. Each card shows relevant information such as types and evolutions. It allows users to quickly find their favorite Pokémon and discover their characteristics.'
        },
        donutShop: {
          description: 'This project is designed for a donut shop and offers users the ability to customize their donuts by simply swapping fillings, glazes and toppings. The project is still in development, but the swipe-and-pick function already allows easy navigation through the various options.'
        },
        pizzaShop: {
          description: 'This project simulates a modern pizza ordering service. Users can select their favorite pizza through a user-friendly interface, make individual adjustments and conveniently complete orders. The design is based on popular delivery services and offers an intuitive user experience.'
        }
      },
      contact: {
        title: 'CONTACT',
        subtitle: "LET'S BUILD SOMETHING COOL TOGETHER!",
        problem: 'GOT A PROBLEM TO SOLVE?',
        description: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
        nameLabel: 'WHATS YOUR NAME?',
        emailLabel: 'WHATS YOUR EMAIL?',
        messageLabel: 'HOW CAN I HELP YOU?',
        namePlaceholder: 'YOUR NAME GOES HERE',
        emailPlaceholder: 'YOUREMAIL@EMAIL.COM',
        messagePlaceholder: 'HELLO MARCO, I AM INTERESTED IN...',
        privacy: "I'VE READ THE PRIVACY POLICY AND AGREE TO THE PROCESSING OF MY DATA.",
        send: 'Send message'
      }
    },
    de: {
      navigation: {
        about: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        contact: 'Kontakt'
      },
      hero: {
        greeting: 'Hallo!',
        name: 'Ich bin Marco Mundt,',
        title: 'Frontend Entwickler'
      },
      about: {
        title: 'ÜBER MICH',
        description: 'Hallo! Ich bin Marco, ein Frontend-Entwickler mit einer Leidenschaft für die Entwicklung benutzerfreundlicher digitaler Erfahrungen. Mit einem Talent für Problemlösung und einem Auge für Details spezialisiere ich mich darauf, komplexe Ideen in elegante Web-Produkte zu übersetzen.',
        cta: 'Lass uns verbinden und gemeinsam etwas Fantastisches schaffen'
      },
      skills: {
        title: 'FÄHIGKEITEN',
        description: 'Als engagierter Frontend-Entwickler spezialisiere ich mich auf die Entwicklung ansprechender und intuitiver Webanwendungen. Meine Fähigkeiten umfassen eine breite Palette von Tools und Technologien, die für die Erstellung moderner, responsiver und benutzerfreundlicher Oberflächen unerlässlich sind.'
      },
      projects: {
        title: 'MEINE PROJEKTE',
        elPolloLoco: {
          description: 'El Pollo Loco ist ein interaktives Jump-and-Run-Spiel, das mit JavaScript entwickelt wurde. Durch den Einsatz objektorientierter Programmierung und sauber strukturierten Code werden Spielmechaniken wie Kollisionserkennung, Schwerkraft und Animationen realisiert. El Pollo Loco bietet ein herausforderndes und unterhaltsames Spielerlebnis auf Desktop- und Mobilgeräten.'
        },
        pokedex: {
          description: 'Dieses Projekt ist ein interaktiver Pokédex, der Pokémon-Daten über eine API abruft und sie benutzerfreundlich darstellt. Jede Karte zeigt relevante Informationen wie Typen und Entwicklungen. Es ermöglicht Nutzern, schnell ihre Lieblingspokémon zu finden und deren Eigenschaften zu entdecken.'
        },
        donutShop: {
          description: 'Dieses Projekt ist für einen Donut-Shop konzipiert und bietet Nutzern die Möglichkeit, ihre Donuts durch einfaches Austauschen von Füllungen, Glasuren und Toppings anzupassen. Das Projekt ist noch in Entwicklung, aber die Swipe-and-Pick-Funktion erlaubt bereits eine einfache Navigation durch die verschiedenen Optionen.'
        },
        pizzaShop: {
          description: 'Dieses Projekt simuliert einen modernen Pizza-Bestellservice. Nutzer können durch eine benutzerfreundliche Oberfläche ihre Lieblingspizza auswählen, individuelle Anpassungen vornehmen und bequem Bestellungen abschließen. Das Design orientiert sich an beliebten Lieferservices und bietet eine intuitive Benutzererfahrung.'
        }
      },
      contact: {
        title: 'KONTAKT',
        subtitle: 'LASS UNS GEMEINSAM ETWAS COOLES BAUEN!',
        problem: 'HAST DU EIN PROBLEM ZU LÖSEN?',
        description: 'Kontaktiere mich über dieses Formular. Ich freue mich darauf, von dir zu hören, deine Ideen kennenzulernen und mit meiner Arbeit zu deinen Projekten beizutragen.',
        nameLabel: 'WIE HEISST DU?',
        emailLabel: 'WIE LAUTET DEINE E-MAIL?',
        messageLabel: 'WIE KANN ICH DIR HELFEN?',
        namePlaceholder: 'DEIN NAME',
        emailPlaceholder: 'DEINE@EMAIL.COM',
        messagePlaceholder: 'HALLO MARCO, ICH INTERESSIERE MICH FÜR...',
        privacy: 'ICH HABE DIE DATENSCHUTZERKLÄRUNG GELESEN UND STIMME DER VERARBEITUNG MEINER DATEN ZU.',
        send: 'Nachricht senden'
      }
    }
  };

  constructor() {
    // Standard-Sprache aus localStorage laden oder auf 'en' setzen
    const savedLanguage = localStorage.getItem('portfolio-language') || 'en';
    this.currentLanguage.next(savedLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  setLanguage(language: string): void {
    this.currentLanguage.next(language);
    localStorage.setItem('portfolio-language', language);
  }

  getTranslation(key: string): any {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage.value];
    
    for (let k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return translation;
  }

  // Hilfsmethode für einfache Übersetzungen
  t(key: string): string {
    return this.getTranslation(key);
  }
}