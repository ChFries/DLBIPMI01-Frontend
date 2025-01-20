import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-divider-segment',
  imports: [
    NgIf
  ],
  templateUrl: './divider-segment.component.html',
  styleUrl: './divider-segment.component.css'
})
export class DividerSegmentComponent {

  @Input("arrowDirection")
  arrowDirection: string = "";

}
