import { Component, Input, Renderer2, ElementRef, OnInit } from '@angular/core';


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

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  onCloseClick(){
    const video: HTMLVideoElement = this.el.nativeElement.querySelector('.trailer');
    video.pause();
  }
}
