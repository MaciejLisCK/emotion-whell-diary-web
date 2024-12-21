import { Component, output, Output } from '@angular/core';

@Component({
  selector: 'app-emotion-whell',
  imports: [],
  templateUrl: './emotion-whell.component.html',
  styleUrl: './emotion-whell.component.scss'
})
export class EmotionWhellComponent {
  emotionClicked = output<string>();

  onImageAreaClicked(mouseEvent: MouseEvent) {
    if (!mouseEvent?.target)
      return;

    const areaElement = mouseEvent.target as HTMLAreaElement;
    const emotionName = areaElement.getAttribute('data-emotion-name');

    if (!emotionName)
      return;

    this.emotionClicked.emit(emotionName);
  }
}
