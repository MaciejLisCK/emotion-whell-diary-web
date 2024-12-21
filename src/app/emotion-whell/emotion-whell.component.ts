import { Component, inject } from '@angular/core';
import { EmotionsAction } from '../emotions/emotions.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-emotion-whell',
  imports: [ ],
  templateUrl: './emotion-whell.component.html',
  styleUrl: './emotion-whell.component.scss'
})
export class EmotionWhellComponent {
  store = inject(Store);

  onImageAreaClicked(mouseEvent: MouseEvent) {
    if (!mouseEvent?.target)
      return;

    const areaElement = mouseEvent.target as HTMLAreaElement;
    const emotionName = areaElement.getAttribute('data-emotion-name');

    if (!emotionName)
      return;

    this.store.dispatch(new EmotionsAction(emotionName));
  }
}
