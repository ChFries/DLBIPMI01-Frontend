import { Component } from '@angular/core';
import {HeaderElementComponent} from './header-element/header-element.component';
import {StoryElementComponent} from './story-element/story-element.component';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from '@ng-bootstrap/ng-bootstrap';
import {AccordionElementComponent} from './accordion-element/accordion-element.component';

@Component({
  selector: 'app-history-page',
  imports: [
    HeaderElementComponent,
    StoryElementComponent,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionButton,
    NgbAccordionHeader,
    NgbAccordionCollapse,
    NgbAccordionBody,
    AccordionElementComponent
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

  first_segment_year: number = 2003;
  first_segment_subheader: string = "Ein neuer Anfang";
  first_segment_text_0: string ="Markus Freisinger, geboren 1965, sammelte über 20 Jahre Erfahrung als Manager bei verschiedenen Bauunternehmen, bevor er sich im Jahr 2003 als Unternehmensberater selbständig machte."
  first_segment_text_1: string = "In dieser Zeit erkannte er den Bedarf an einer ganzheitlichen, praxisnahen Beratung für Unternehmen der Baubranche und darüber hinaus."

  second_segment_year: number = 2007;
  second_segment_subheader: string = "Lasst die Korken knallen!";
  second_segment_text_0: string ="Mit diesem Wissen und einer klaren Vision gründete er 2007 die MF-Consulting GmbH in Neumarkt in der Oberpfalz. Zu Beginn bestand das Unternehmen aus fünf hochmotivierten Mitarbeitern, die gemeinsam an der Umsetzung der Vision arbeiteten, Unternehmen durch innovative Lösungen zum Erfolg zu führen.";
  second_segment_text_1: string ="Lerne unsere fünf OGs kennen"
}
