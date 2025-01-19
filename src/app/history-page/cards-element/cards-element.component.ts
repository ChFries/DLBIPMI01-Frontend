import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-cards-element',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './cards-element.component.html',
  styleUrl: './cards-element.component.css'
})
export class CardsElementComponent {

  @Input('imgUrl')
  imgUrl: string = "";

  @Input('title')
  title: string = "";

  @Input('textBody')
  textBody: string ="";


}
