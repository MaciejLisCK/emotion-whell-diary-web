import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmotionsState, EmotionsStateModel } from '../emotions/emotions.state';
import { Store } from '@ngxs/store';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-emotion-list',
  imports: [ AsyncPipe, DatePipe ],
  templateUrl: './emotion-list.component.html',
  styleUrl: './emotion-list.component.scss'
})
export class EmotionListComponent {
  store = inject(Store);

  emotions$: Observable<EmotionsStateModel> = this.store.select(EmotionsState.getState);
}
