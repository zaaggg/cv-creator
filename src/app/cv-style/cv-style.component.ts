import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { StyleService } from '../services/style.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-cv-style',
  templateUrl: './cv-style.component.html',
  styleUrls: ['./cv-style.component.css']
})
export class CvStyleComponent implements OnInit {
id: number = 0;
id1: number = 1;
id2: number = 2;
id3: number = 3;
id4: number = 4;
id5: number = 5;
id6: number = 6;
id7: number = 7;
id8: number = 8;
id9: number = 9;

  constructor(public _StyleService:StyleService,public shared:SharedService) { }

  ngOnInit(): void {
    this.shared.getAllTitles()
    .subscribe({
      next: (x) => {
        this._StyleService.title=x;
      },
      error: (response) => {
        console.log(response);
      }
    });

    this.shared.getAllImages()
    .subscribe({
      next: (x) => {
        this._StyleService.image=x;
      },
      error: (response) => {
        console.log(response);
      }
    });

    this.shared.getAllDescriptions()
    .subscribe({
      next: (x) => {
        this._StyleService.desc=x;
      },
      error: (response) => {
        console.log(response);
      }
    });
    Aos.init();
  }

}
