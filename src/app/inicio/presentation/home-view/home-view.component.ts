import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

  images:string[] = ["side-image-1", "side-image-2"];
  sideImage = "side-image-1";

  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.images.length);
    this.sideImage = this.images[random];    
  }
  
}
