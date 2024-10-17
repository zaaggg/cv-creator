import { Component, OnInit } from '@angular/core';
import { CreateComponent } from 'src/app/create/create.component';
import { ColorService } from 'src/app/services/color-service.service';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { __extends } from 'tslib';


@Component({
  selector: '.cv1',
  templateUrl: './cv1.component.html',
  styleUrls: ['./cv1.component.css']
})
export class Cv1Component implements OnInit{
  public selectedColor: string = '';

  constructor(public imageService: ImageServiceService,public _CreateService:CreateServiceService,private colorService: ColorService) {
  }
  ngOnInit(): void {
    this.colorService.getSelectedColor().subscribe(color => {
      const colorCvElements = document.querySelectorAll('.colorcv') as NodeListOf<HTMLElement>;
    colorCvElements.forEach((element: HTMLElement) => {
      element.style.backgroundColor = color;
      this.selectedColor = color;
    });
    });
  }



}
