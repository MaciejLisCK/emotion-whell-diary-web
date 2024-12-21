import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Emotion, EmotionsState, EmotionsStateModel } from '../emotions/emotions.state';
import { Store } from '@ngxs/store';
import { AsyncPipe, DatePipe } from '@angular/common';
import { DeleteEmotionAction } from '../emotions/emotions.actions';

@Component({
  selector: 'app-emotion-list',
  imports: [ AsyncPipe, DatePipe ],
  templateUrl: './emotion-list.component.html',
  styleUrl: './emotion-list.component.scss'
})
export class EmotionListComponent {
  store = inject(Store);
  
  emotions$: Observable<EmotionsStateModel> = this.store.select(EmotionsState.getState);
 
  deleteEmotion(emotion: Emotion) {
    this.store.dispatch(new DeleteEmotionAction(emotion));
  }
}
