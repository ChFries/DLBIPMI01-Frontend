import {Component, ViewChild} from '@angular/core';
import {
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-accordion-element',
    imports: [
        NgbAccordionBody,
        NgbAccordionButton,
        NgbAccordionCollapse,
        NgbAccordionDirective,
        NgbAccordionHeader,
        NgbAccordionItem
    ],
  templateUrl: './accordion-element.component.html',
  styleUrl: './accordion-element.component.css'
})
export class AccordionElementComponent{

  @ViewChild("accordion")
  accordion: any;

  rahjeet_img: string = "rahjeet_profile.jpg";
  rahjeet_header: string = "Rahjeet";
  rahjeet_title: string ="Lead Consultant";
  rahjeet_body_0: string = "Rahjeet stammt aus Frankfurt am Main und studierte Betriebswirtschaftslehre mit dem Schwerpunkt Unternehmensführung. Während seines Studiums arbeitete er als Werkstudent bei einem internationalen Beratungsunternehmen, wo er seine Leidenschaft für Consulting entdeckte.";
  rahjeet_body_1: string = "Nach dem Abschluss seines Studiums verbrachte er zwei Jahre in einem Start-up, in dem er Prozesse optimierte und erste Projekte leitete. Diese Erfahrung machte ihn zu einem gefragten jungen Berater. Mit dem Ziel, in einem innovativen und dynamischen Umfeld zu arbeiten, war er einer der ersten, der sich dem Team der MF-Consulting GmbH anschloss. Seit sechs Jahren leitet Rahjeet den damals neue geschaffenen Bereich European Consulting & Acquisition"

  felix_img: string ="felix_profile.jpg";
  felix_header: string ="Felix";
  felix_title: string = "Senior Lead Consultant";
  felix_body_0: string ="Felix wurde in Hamburg geboren und studierte Volkswirtschaftslehre an der Universität Heidelberg. Nach dem Studium begann er seine Karriere in einem internationalen Konzern, wo er zunächst im Bereich Marktanalysen tätig war. Schnell stieg er in Führungspositionen auf und leitete später große Transformationsprojekte. Nach über 15 Jahren in der Konzernwelt entschied er sich, als unabhängiger Berater tätig zu werden, um Unternehmen flexibler unterstützen zu können.";
  felix_body_1: string ="Mit seiner umfangreichen Erfahrung in Strategieentwicklung und Change Management wurde er einer der Gründungsmitglieder der MF-Consulting GmbH. Felix ist besonders dafür bekannt, schwierige Situationen zu meistern und Unternehmen wieder auf Erfolgskurs zu bringen.";

  janina_img: string ="janina_profile.jpg";
  janina_header: string ="Janina";
  janina_title: string = "Executive Assistant";
  janina_body_0: string ="Janina wuchs in einer multikulturellen Familie im bunten Berlin auf und schloss ihre Ausbildung zur Bürokauffrau mit Auszeichnung ab. Bereits in jungen Jahren zeigte sie ein außergewöhnliches Talent für Kommunikation und Organisation. Vor ihrem Eintritt bei der MF-Consulting GmbH arbeitete sie in einem mittelständischen Unternehmen, wo sie die komplette Büroorganisation übernahm und neue Tools zur Verbesserung der Arbeitsabläufe einführte.";
  janina_body_1: string ="Mit ihrer Energie und ihrem Engagement unterstützt sie das Team bei der täglichen Arbeit und sorgt dafür, dass alle Prozesse reibungslos ablaufen.";

  susanne_img: string ="susanne_profile.jpg";
  susanne_header: string ="Susanne";
  susanne_title: string = "Executive Assistant";
  susanne_body_0: string ="Susanne wuchs in einer Kleinstadt in Bayern auf und entdeckte schon früh ihr Talent für Organisation und Verwaltung. Nach ihrem Schulabschluss absolvierte sie eine Ausbildung zur Verwaltungsfachangestellten und begann ihre Karriere bei einer kommunalen Behörde. Nach einigen Jahren wechselte sie in die Privatwirtschaft, wo sie ihre Fähigkeiten in der Unternehmensverwaltung vertiefte.";
  susanne_body_1: string ="Vor ihrem Einstieg bei der MF-Consulting GmbH war sie leitende Sachbearbeiterin in einer mittelständischen Firma und optimierte dort erfolgreich interne Verwaltungsabläufe. Ihre Begeisterung für Effizienzsteigerung und ihr Wunsch nach persönlicher Weiterentwicklung führten sie 2007 zur Gründung der MF-Consulting GmbH.";

  edeltraut_img: string ="edeltraut_profile.jpg";
  edeltraut_header: string ="Edeltraut";
  edeltraut_title: string = "Senior Consultant / Vice CEO";
  edeltraut_body_0: string ="Edeltraut wuchs in München auf und absolvierte ein Studium der Wirtschaftswissenschaften. Sie begann ihre Karriere in einer großen Unternehmensberatung, wo sie sich schnell auf Change Management spezialisierte. Ihre Fähigkeit, Teams zu motivieren und nachhaltige Veränderungen herbeizuführen, brachte ihr bald Anerkennung in der Branche.";
  edeltraut_body_1: string ="Nach 10 Jahren wechselte sie in die Personalabteilung eines internationalen Konzerns, wo sie als Leiterin für Personal- und Organisationsentwicklung tätig war. Mit ihrem Wunsch, wieder enger mit Kunden zu arbeiten und unabhängigere Entscheidungen treffen zu können, war sie maßgeblich an der Gründung der MF-Consulting GmbH beteiligt.";



}
