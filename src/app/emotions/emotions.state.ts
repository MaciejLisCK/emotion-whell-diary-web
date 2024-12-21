import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddEmotionAction, DeleteEmotionAction } from './emotions.actions';
import { compose, insertItem, patch, removeItem } from "@ngxs/store/operators"


export interface EmotionsStateModel {
  items: Emotion[];
}

export interface Emotion {
  id: string;
  name: string;
  date: Date;
}

@State<EmotionsStateModel>({
  name: 'emotions',
  defaults: {
    items: [ ]
  }
})
@Injectable()
export class EmotionsState {
  @Selector()
  static getState(state: EmotionsStateModel) {
    return state;
  }

  @Action(AddEmotionAction)
  add({setState, getState}: StateContext<EmotionsStateModel>, { emotionName }: AddEmotionAction) {
    const emotion: Emotion = {
      id: crypto.randomUUID(),
      name: emotionName,
      date: new Date()
    };
    
    setState(
      patch({
        items: insertItem<Emotion>(emotion)
      })
    )
  }

  @Action(DeleteEmotionAction)
  delete({ setState }: StateContext<EmotionsStateModel>, { emotion }: DeleteEmotionAction) {
    setState(
      patch({
        items: removeItem<Emotion>((e) => e.id === emotion.id),
      })
    );
  }
}
