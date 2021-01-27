import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

  constructor() { }
  @Input() cardObj: any;


  ngOnInit(): void {
  }

}
