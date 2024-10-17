import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CreateComponent } from './../create/create.component'

@Component({
  selector: '.app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  public Title='Expert';
  name="name";
  constructor() { 
  }

  ngOnInit(): void {
  }

}
