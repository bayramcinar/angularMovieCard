import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() name = "";
  @Input() image = "";
  @Input() video = "";
  @Input() imdb = "";
  @Input() date = "";
  @Input() time = "";
  @Input() description = "";
  @Input() i:number | undefined;
}
