import { Component } from '@angular/core';
import { EmotionWhellComponent } from './emotion-whell/emotion-whell.component';

@Component({
  selector: 'app-root',
  imports: [ EmotionWhellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'emotion-whell-diary-web';

  onEmotionClicked(emotionName: string) {
    console.log(emotionName);
  }
}
