import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { StyleService } from '../services/style.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Cv1Component } from '../cvs/cv1/cv1.component';
import { Cv2Component } from '../cvs/cv2/cv2.component';
import { ColorService } from '../services/color-service.service';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  elementClass: string = '';
  constructor(public _StyleService:StyleService,private route : ActivatedRoute,private colorService: ColorService) { }
  
  id: number = 0;

  ngOnInit(): void {
    Aos.init();


    const btn = document.getElementById('retour1');
    btn?.addEventListener('click', function onClick() {
      window.location.href = './cv-style';
    });

    this.route.paramMap.subscribe((params) => {
      const x = params.get('id');
      if (x !== null) {
        this.id = +x;
      } else {
        this.id = 0;
      }
    });
    const selectedColor = localStorage.getItem('selectedColor'); // Retrieve the selected color from local storage
    if (selectedColor) {
    const colorCvElements = document.querySelectorAll('.colorcv') as NodeListOf<HTMLElement>;
    colorCvElements.forEach((element: HTMLElement) => {
      element.style.backgroundColor = selectedColor;
    });
  }

  }

  getpage() {
    window.location.href = './create';
  }
  onClick(color: string): void {
    const colorCvElements = document.querySelectorAll('.colorcv') as NodeListOf<HTMLElement>;
    colorCvElements.forEach((element: HTMLElement) => {
    element.style.backgroundColor = color;
    this.colorService.setSelectedColor(color);


    });

  }
  private applyColor(color: string): void {
    const colorCvElements = document.querySelectorAll('.colorcv') as NodeListOf<HTMLElement>;
    colorCvElements.forEach((element: HTMLElement) => {
      element.style.backgroundColor = color;
    });
  }


}


