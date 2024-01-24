import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  isDarkMode:boolean = true;

  switchMode() {
    const bodyTag = document.body;
    if (bodyTag.hasAttribute('color-scheme') &&
        bodyTag.getAttribute('color-scheme') =='dark') {
      bodyTag.setAttribute('color-scheme','light');
      this.isDarkMode = false;
    }else {
      bodyTag.setAttribute('color-scheme','dark');
      this.isDarkMode = true;
    }
  }
}


