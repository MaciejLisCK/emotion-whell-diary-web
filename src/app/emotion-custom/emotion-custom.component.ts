import { Component, inject } from '@angular/core';
import { AddEmotionAction } from '../emotions/emotions.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-emotion-custom',
  imports: [],
  templateUrl: './emotion-custom.component.html',
  styleUrl: './emotion-custom.component.scss'
})
export class EmotionCustomComponent {
  store = inject(Store);

  addEmotion(emotionText: string) {
    if (!emotionText)
      return;

    this.store.dispatch(new AddEmotionAction(emotionText));
  }
}
