import { Emotion } from "./emotions.state";

export class AddEmotionAction {
  static readonly type = '[Emotions] Add item';
  constructor(readonly emotionName: string) { }
}

export class DeleteEmotionAction {
  static readonly type = '[Emotions] Delete item';
  constructor(readonly emotion: Emotion) { }
}
