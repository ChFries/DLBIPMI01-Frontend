import { Component } from '@angular/core';
import {HeaderElementComponent} from './header-element/header-element.component';
import {StoryElementComponent} from './story-element/story-element.component';

@Component({
  selector: 'app-history-page',
  imports: [
    HeaderElementComponent,
    StoryElementComponent
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

  first_segment_year: number = 2003;
  first_segment_subheader: string = "Ein neuer Anfang";
  first_segment_text_0: string ="Markus Freisinger, geboren 1965, sammelte über 20 Jahre Erfahrung als Manager bei verschiedenen Bauunternehmen, bevor er sich im Jahr 2003 als Unternehmensberater selbständig machte."
  first_segment_text_1: string = "In dieser Zeit erkannte er den Bedarf an einer ganzheitlichen, praxisnahen Beratung für Unternehmen der Baubranche und darüber hinaus."
}
