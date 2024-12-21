import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'emotion-whell-diary-web';

  emotionClicked(mouseEvent: MouseEvent) {
    if (!mouseEvent?.target) {
      return;
    }

    const areaElement = mouseEvent.target as HTMLAreaElement;
    const emotionName = areaElement.getAttribute('data-emotion-name');

    console.log(emotionName);
  }
}
