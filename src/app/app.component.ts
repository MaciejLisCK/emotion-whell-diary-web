import { Component } from '@angular/core';
import { EmotionWhellComponent } from './emotion-whell/emotion-whell.component';
import { EmotionListComponent } from './emotion-list/emotion-list.component';

@Component({
  selector: 'app-root',
  imports: [ EmotionWhellComponent, EmotionListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { 'class': 'container' },
})
export class AppComponent {
  title = 'emotion-whell-diary-web';

  onEmotionClicked(emotionName: string) {
    console.log(emotionName);
  }
}
