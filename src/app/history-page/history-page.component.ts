import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {HeaderElementComponent} from './header-element/header-element.component';
import {StoryElementComponent} from './story-element/story-element.component';
import {AccordionElementComponent} from './accordion-element/accordion-element.component';
import {CarouselElementComponent} from './carousel-element/carousel-element.component';
import {CardsElementComponent} from './cards-element/cards-element.component';
import {TimelineComponent} from './timeline/timeline.component';
import {RouterLink} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {DividerSegmentComponent} from './divider-segment/divider-segment.component';
import {YouTubePlayer} from '@angular/youtube-player';

@Component({
  selector: 'app-history-page',
  imports: [
    HeaderElementComponent,
    StoryElementComponent,
    AccordionElementComponent,
    CarouselElementComponent,
    CardsElementComponent,
    TimelineComponent,
    RouterLink,
    DividerSegmentComponent,
    YouTubePlayer
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements AfterViewInit{

  @ViewChild('youtubePlayerContainer') playerContainer!: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  constructor(readonly viewportScroller: ViewportScroller, readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
    }

  onResize(): void {
    // you can remove this line if you want to have wider video player than 1200px
    this.videoWidth = Math.min(
      this.playerContainer.nativeElement.clientWidth,
      640
    );
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }
  scrollToTimeline(){
    this.viewportScroller.scrollToAnchor("timeline");
  }

  scrollToVideo() {
    this.viewportScroller.scrollToAnchor("video");
  }

  first_segment_year: string = "2003";
  first_segment_subheader: string = "Ein neuer Anfang";
  first_segment_text_0: string ="Markus Freisinger, geboren 1965, sammelte über 20 Jahre Erfahrung als Manager bei verschiedenen Bauunternehmen, bevor er sich im Jahr 2003 als Unternehmensberater selbständig machte."
  first_segment_text_1: string = "In dieser Zeit erkannte er den Bedarf an einer ganzheitlichen, praxisnahen Beratung für Unternehmen der Baubranche und darüber hinaus."

  second_segment_year: string = "2007";
  second_segment_subheader: string = "Lasst die Korken knallen!";
  second_segment_text_0: string ="Mit diesem Wissen und einer klaren Vision gründete er 2007 die MF-Consulting GmbH in Neumarkt in der Oberpfalz. Zu Beginn bestand das Unternehmen aus fünf hochmotivierten Mitarbeitern, die gemeinsam an der Umsetzung der Vision arbeiteten, Unternehmen durch innovative Lösungen zum Erfolg zu führen.";
  second_segment_text_1: string ="Lerne unsere fünf OGs kennen"

  third_segment_year: string = "2009";
  third_segment_subheader: string = "Geld ist nicht alles";
  third_segment_text_0: string ="Die MF-Consulting GmbH stellte ihre offiziellen Firmenwerte vor – Verantwortung, Leidenschaft, Offenheit und Exzellenz. Diese Werte prägen seither das Handeln des Unternehmens und bilden die Grundlage für den Erfolg.";

  leidenschaft_url="leidenschaft.png";
  leidenschaft_title ="Leidenschaft – Der Treibstoff unseres Erfolgs";
  leidenschaft_body ="Leidenschaft ist der Herzschlag unseres Unternehmens und der Antrieb, der uns jeden Tag aufs Neue inspiriert, das Beste zu geben. Sie ist der Funke, der unsere Kreativität entfacht, uns herausfordert, innovative Lösungen zu entwickeln, und uns mit Energie und Entschlossenheit an unsere Ziele führt.";

  offenheit_url="offenheit.png";
  offenheit_title="Offenheit - Überblick statt Tunnelblick";
  offenheit_body="Offenheit ist ein zentraler Wert unserer Unternehmenskultur und bildet die Grundlage für unsere Zusammenarbeit und Innovation. Wir verstehen Offenheit als die Fähigkeit, aktiv zuzuhören, unterschiedliche Perspektiven zu respektieren und neuen Ideen mit Neugier und Aufgeschlossenheit zu begegnen.";

  verantwortung_url="verantwortung.png";
  verantwortung_title="Verantwortung - Partnerschaft statt One-Night Stand";
  verantwortung_body="Wir verstehen Verantwortung als Verpflichtung, nachhaltig und ethisch zu agieren – gegenüber unseren Mitarbeitern, Kunden, Partnern und der Umwelt. Dies bedeutet, Entscheidungen bewusst zu treffen und zu jedem Zeitpunkt das Wohl der Gemeinschaft im Blick zu behalten.";

  exzellenz_url="exzellenz.png";
  exzellenz_title="Exzellenz - Weil auch guter Pfusch nur Pfusch ist";
  exzellenz_body="Für uns bedeutet Exzellenz stets nach höchster Qualität und Spitzenleistung zu streben – sei es in der Entwicklung innovativer Lösungen, in der Zusammenarbeit mit unseren Kunden oder im Umgang miteinander. Wir wissen: Exzellenz wird nur durch einen konstanten Verbesserungsprozess erreicht.";



  fourth_segment_year: string = "2010-2012";
  fourth_segment_subheader: string = "Upsie!";
  fourth_segment_text_0: string ="In diesem Jahr traf schwerer Rückschlag das Unternehmen, als das Firmengebäude durch einen technischen Defekt niederbrannte. Dieser Vorfall brachte die MF-Consulting GmbH an den Rand des Ruins.";
  fourth_segment_text_1: string ="Dank des unermüdlichen Einsatzes von Markus Freisinger und seinem Team sowie der Unterstützung von Partnern und Kunden konnte das Unternehmen diese Krise überstehen. 2012 wurde das neue, moderne Firmengebäude eingeweiht – ein Symbol für die Widerstandsfähigkeit und den Fortschritt der Firma.";


  fifth_segment_year: string = "2013-2020";
  fifth_segment_subheader: string = "Let's go!";
  fifth_segment_text_0: string ="Mit der Eröffnung des neuen Gebäudes begann eine Phase des starken Wachstums. 2013 überstieg der Umsatz erstmals die Marke von 50 Millionen Euro.";
  fifth_segment_text_1: string ="Ein Teil dieses Erfolgs wurde sofort in die Gesellschaft zurückgegeben: 2,5 Millionen Euro wurden an wohltätige Einrichtungen gespendet, ein Ausdruck der sozialen Verantwortung, die tief in der Unternehmenskultur verankert ist.";

  sixth_segment_year: string = "2020-????";
  sixth_segment_subheader: string = "Quis audet adipiscitur";
  sixth_segment_text_0: string ="Die MF-Consulting GmbH setzte ihren Wachstumskurs in den folgenden Jahren fort. Im Jahr 2020 überstieg die Mitarbeiterzahl erstmals die Hundert, und 2021 trat Timon Freisinger, der Sohn des Gründers, in den Vorstand des Unternehmens ein.";
  sixth_segment_text_1: string ="Die Zukunft der MF-Consulting GmbH verspricht eine weitere spannende Entwicklungsphase. Für die Periode von 2025 bis 2030 ist die Einführung einer neuen Sparte für Consulting im Bereich erneuerbare Energien geplant, um den Anforderungen des Marktes und der globalen Nachhaltigkeitsagenda gerecht zu werden. Gleichzeitig plant das Unternehmen, seine Rechtsform in eine Aktiengesellschaft zu ändern, um das Wachstum weiter zu unterstützen und neue Möglichkeiten der Unternehmensentwicklung zu erschließen.";

}
