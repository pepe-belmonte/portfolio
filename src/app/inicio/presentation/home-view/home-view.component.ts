import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ModeService } from '../../../../shared/services/mode.service';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

  images:string[] = ["side-image-0", "side-image-1"];
  sideImage = "side-image-1";
  isLightMode:boolean = false;
  _modeService: any = undefined;

  constructor(
    private modeService: ModeService) 
  {
    this._modeService = this.modeService.getMode().subscribe((res: boolean) => {
      this.isLightMode = res;
      this.showMode();
    });      
  }

  ngOnInit(): void {
    /*
    const random = Math.floor(Math.random() * this.images.length);
    this.sideImage = this.images[random];    
    */
  }

  ngOnDestroy(): void {
    this._modeService.unsubscribe();
  }  

  showMode(){
    this.sideImage = this.isLightMode?this.images[1]:this.images[0];
  }
}
