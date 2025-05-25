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
      footer: {
        linkedin: 'LINKEDIN',
        github: 'GITHUB',
        impressum: 'LEGAL NOTICE',
        datenschutz: 'PRIVACY POLICY'
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
        join: {
          description: 'Join is a comprehensive Kanban project management tool built with JavaScript and Firebase. It features task creation, assignment, and tracking across different project stages. With real-time synchronization and intuitive drag-and-drop functionality, Join streamlines team collaboration and project organization for efficient workflow management.'
        },
        pokedex: {
          description: 'This project is an interactive Pokédex that retrieves Pokémon data via an API and displays it in a user-friendly way. Each card shows relevant information such as types and evolutions. It allows users to quickly find their favorite Pokémon and discover their characteristics.'
        },
        portfolio: {
          description: 'This personal portfolio website showcases my skills and projects as a frontend developer. Built with Angular and TypeScript, it features modern design principles, responsive layouts, and smooth animations. The site demonstrates my expertise in creating professional web applications with clean code and intuitive user experiences.'
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
        privacyStart: "I'VE READ THE ",
        privacyLink: 'PRIVACY POLICY',
        privacyEnd: ' AND AGREE TO THE PROCESSING OF MY DATA.',
        send: 'Send message',
        errors: {
          nameRequired: 'Name is required and must be at least 2 characters long',
          emailInvalid: 'Please enter a valid email address',
          messageRequired: 'Message is required and must be at least 10 characters long',
          privacyRequired: 'You must accept the privacy policy'
        },
        success: {
          message: '✅ Message sent successfully! I\'ll get back to you soon.',
          sending: 'Sending...'
        }
      },
      impressum: {
        title: 'Legal Notice',
        subtitle: 'Information according to § 5 TMG',
        contact: 'Contact',
        responsibleContent: 'Responsible for content according to § 55 Abs. 2 RStV',
        contentLiability: 'Content Liability',
        contentLiabilityText: 'As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.',
        linkLiability: 'Link Liability',
        linkLiabilityText: 'Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.',
        backToPortfolio: 'Back to Portfolio'
      },
      datenschutz: {
        title: 'Privacy Policy',
        overview: 'Privacy at a glance',
        generalInfo: 'General Information',
        generalInfoText: 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you could be personally identified. For detailed information on the subject of data protection, please refer to our privacy policy listed below this text.',
        dataCollection: 'Data collection on this website',
        whoResponsible: 'Who is responsible for data collection on this website?',
        whoResponsibleText: 'Data processing on this website is carried out by the website operator. You can find their contact details in the section "Notice on the responsible party" in this privacy policy.',
        howCollect: 'How do we collect your data?',
        howCollectText: 'Your data is collected on the one hand by you providing it to us. This could be data that you enter in a contact form.',
        whyUse: 'What do we use your data for?',
        whyUseText: 'Part of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior.',
        yourRights: 'What rights do you have regarding your data?',
        yourRightsText: 'You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data.',
        hosting: 'Hosting',
        hostingText: 'We host the content of our website with the following provider:',
        externalHosting: 'External Hosting',
        externalHostingText: 'This website is hosted externally. The personal data collected on this website is stored on the servers of the hoster(s).',
        generalHints: 'General information and mandatory information',
        dataProtection: 'Data Protection',
        dataProtectionText: 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.',
        responsibleParty: 'Notice on the responsible party',
        responsiblePartyText: 'The responsible party for data processing on this website is:',
        storageDuration: 'Storage duration',
        storageDurationText: 'Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply.',
        dataCollectionWebsite: 'Data collection on this website',
        contactForm: 'Contact form',
        contactFormText: 'If you send us inquiries via contact form, your details from the inquiry form including the contact data you provided there will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.',
        yourRightsDetailed: 'Your rights',
        rightInfo: 'Right to information',
        rightInfoText: 'You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time.',
        rightCorrection: 'Right to correction',
        rightCorrectionText: 'You have a right to correction and/or completion vis-à-vis the controller if the processed personal data concerning you is incorrect or incomplete.',
        rightDeletion: 'Right to deletion',
        rightDeletionText: 'You may request from the controller that the personal data concerning you be deleted immediately.',
        rightRestriction: 'Right to restriction of processing',
        rightRestrictionText: 'You have the right to request the restriction of the processing of personal data concerning you.',
        rightPortability: 'Right to data portability',
        rightPortabilityText: 'You have the right to receive data that we process automatically on the basis of your consent or in fulfillment of a contract in a common, machine-readable format.',
        rightComplaint: 'Right to lodge a complaint with the competent supervisory authority',
        rightComplaintText: 'In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority.',
        backToPortfolio: 'Back to Portfolio'
      }
    },
    de: {
      navigation: {
        about: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        contact: 'Kontakt'
      },
      footer: {
        linkedin: 'LINKEDIN',
        github: 'GITHUB',
        impressum: 'IMPRESSUM',
        datenschutz: 'DATENSCHUTZ'
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
        join: {
          description: 'Join ist ein umfassendes Kanban-Projektmanagement-Tool, das mit JavaScript und Firebase entwickelt wurde. Es bietet Funktionen zur Aufgabenerstellung, -zuweisung und -verfolgung über verschiedene Projektphasen hinweg. Mit Echtzeit-Synchronisation und intuitiver Drag-and-Drop-Funktionalität optimiert Join die Teamzusammenarbeit und Projektorganisation für effizientes Workflow-Management.'
        },
        pokedex: {
          description: 'Dieses Projekt ist ein interaktiver Pokédex, der Pokémon-Daten über eine API abruft und sie benutzerfreundlich darstellt. Jede Karte zeigt relevante Informationen wie Typen und Entwicklungen. Es ermöglicht Nutzern, schnell ihre Lieblingspokémon zu finden und deren Eigenschaften zu entdecken.'
        },
        portfolio: {
          description: 'Diese persönliche Portfolio-Website präsentiert meine Fähigkeiten und Projekte als Frontend-Entwickler. Mit Angular und TypeScript entwickelt, zeigt sie moderne Designprinzipien, responsive Layouts und flüssige Animationen. Die Website demonstriert meine Expertise in der Erstellung professioneller Webanwendungen mit sauberem Code und intuitiver Benutzererfahrung.'
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
        privacyStart: 'ICH HABE DIE ',
        privacyLink: 'DATENSCHUTZERKLÄRUNG',
        privacyEnd: ' GELESEN UND STIMME DER VERARBEITUNG MEINER DATEN ZU.',
        send: 'Nachricht senden',
        errors: {
          nameRequired: 'Name ist erforderlich und muss mindestens 2 Zeichen lang sein',
          emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
          messageRequired: 'Nachricht ist erforderlich und muss mindestens 10 Zeichen lang sein',
          privacyRequired: 'Sie müssen die Datenschutzerklärung akzeptieren'
        },
        success: {
          message: '✅ Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.',
          sending: 'Wird gesendet...'
        }
      },
      impressum: {
        title: 'Impressum',
        subtitle: 'Angaben gemäß § 5 TMG',
        contact: 'Kontakt',
        responsibleContent: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
        contentLiability: 'Haftung für Inhalte',
        contentLiabilityText: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        linkLiability: 'Haftung für Links',
        linkLiabilityText: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        backToPortfolio: 'Zurück zum Portfolio'
      },
      datenschutz: {
        title: 'Datenschutzerklärung',
        overview: 'Datenschutz auf einen Blick',
        generalInfo: 'Allgemeine Hinweise',
        generalInfoText: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
        dataCollection: 'Datenerfassung auf dieser Website',
        whoResponsible: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
        whoResponsibleText: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.',
        howCollect: 'Wie erfassen wir Ihre Daten?',
        howCollectText: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
        whyUse: 'Wofür nutzen wir Ihre Daten?',
        whyUseText: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
        yourRights: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
        yourRightsText: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.',
        hosting: 'Hosting',
        hostingText: 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
        externalHosting: 'Externes Hosting',
        externalHostingText: 'Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.',
        generalHints: 'Allgemeine Hinweise und Pflichtinformationen',
        dataProtection: 'Datenschutz',
        dataProtectionText: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.',
        responsibleParty: 'Hinweis zur verantwortlichen Stelle',
        responsiblePartyText: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
        storageDuration: 'Speicherdauer',
        storageDurationText: 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.',
        dataCollectionWebsite: 'Datenerfassung auf dieser Website',
        contactForm: 'Kontaktformular',
        contactFormText: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
        yourRightsDetailed: 'Ihre Rechte',
        rightInfo: 'Auskunftsrecht',
        rightInfoText: 'Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.',
        rightCorrection: 'Recht auf Berichtigung',
        rightCorrectionText: 'Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind.',
        rightDeletion: 'Recht auf Löschung',
        rightDeletionText: 'Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden.',
        rightRestriction: 'Recht auf Einschränkung der Verarbeitung',
        rightRestrictionText: 'Sie haben das Recht, die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten zu verlangen.',
        rightPortability: 'Recht auf Datenübertragbarkeit',
        rightPortabilityText: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.',
        rightComplaint: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
        rightComplaintText: 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.',
        backToPortfolio: 'Zurück zum Portfolio'
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