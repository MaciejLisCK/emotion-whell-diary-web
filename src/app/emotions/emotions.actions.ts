export class EmotionsAction {
  static readonly type = '[Emotions] Add item';
  constructor(readonly emotionName: string) { }
}
