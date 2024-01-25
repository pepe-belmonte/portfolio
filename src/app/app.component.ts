import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';
import { ModeService } from '../shared/services/mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  isLightMode:boolean = false;
  _modeService: any = undefined;

  constructor(
    private modeService: ModeService) 
  {
    this._modeService = this.modeService.getMode().subscribe((res: boolean) => {
      this.isLightMode = res;
    });      
  }


  switchMode() {
    const bodyTag = document.body;
    if (bodyTag.hasAttribute('color-scheme') &&
        bodyTag.getAttribute('color-scheme') =='dark') {
      bodyTag.setAttribute('color-scheme','light');
      this.modeService.setMode(true);
    }else {
      bodyTag.setAttribute('color-scheme','dark');
      this.modeService.setMode(false);
    }
  }

  ngOnDestroy(): void {
    this._modeService.unsubscribe();
  }
}


