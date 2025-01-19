import {Component} from '@angular/core';
import {NgbCarousel, NgbSlide} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-element',
  imports: [
    NgbCarousel,
    NgbSlide
  ],
  templateUrl: './carousel-element.component.html',
  styleUrl: './carousel-element.component.css'
})
export class CarouselElementComponent {

  images: string[] = ["burning-building-0.webp",
    "burning-building-1.webp",
    "burning-building-2.webp",
    "office_0.jpg",
    "office_1.jpg",
    "office_2.jpg"
  ];


}
