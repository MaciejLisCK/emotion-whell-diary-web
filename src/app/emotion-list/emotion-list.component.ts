import { Component, input } from '@angular/core';

@Component({
  selector: 'app-emotion-list',
  imports: [],
  templateUrl: './emotion-list.component.html',
  styleUrl: './emotion-list.component.scss'
})
export class EmotionListComponent {
  public emotions = input<string[]>();
}
