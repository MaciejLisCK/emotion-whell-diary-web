import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { EmotionsAction } from './emotions.actions';

export interface EmotionsStateModel {
  items: string[];
}

@State<EmotionsStateModel>({
  name: 'emotions',
  defaults: {
    items: [ 'test' ]
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
    stateModel.items = [...stateModel.items, emotionName];
    ctx.setState(stateModel);
  }
}
