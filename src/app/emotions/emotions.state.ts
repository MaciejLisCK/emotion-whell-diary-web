import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { EmotionsAction } from './emotions.actions';

export interface EmotionsStateModel {
  items: Emotion[];
}

export interface Emotion {
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

  @Action(EmotionsAction)
  add(ctx: StateContext<EmotionsStateModel>, { emotionName }: EmotionsAction) {
    const stateModel = ctx.getState();
    const emotion: Emotion = {
      name: emotionName,
      date: new Date()
    };
    stateModel.items = [ ...stateModel.items, emotion ];
    ctx.setState(stateModel);
  }
}
