import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface ImageItem {
  src: string;
  scaled: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public shared : SharedService,private router : Router,private http: HttpClient) { }


  images: ImageItem[] = [];


  Src: string[] = [];

  skillTitle : string = "";

  addImagesToGallery(srcArray: string[], imageArray: ImageItem[]): void {
    srcArray.forEach((src: string) => {
      const imageItem: ImageItem = { src: src, scaled: false };
      imageArray.push(imageItem);
    });
  }
  search(){
    console.log(this.skillTitle);
    this.shared.getCvs(this.shared.AccountConnected.idAccount,this.skillTitle).subscribe({
      next: (a)=>{
        console.log(this.skillTitle);
        console.log(a);
        this.Src=a;
        this.images=[];
        this.addImagesToGallery(this.Src,this.images)
      }, error :(err)=>{
        console.log(err);

      }
    })
  }


  ngOnInit(): void {
    this.shared.getAllCvs(this.shared.AccountConnected.idAccount).subscribe({
      next: (a)=>{
        console.log(a);
        this.Src=a;
        this.addImagesToGallery(this.Src,this.images)
      }, error :(err)=>{

      }

    })


  }

  activeIndex: number | null = null;

  handleImageClick(index: number): void {
    if (this.activeIndex === null) {
      this.activeIndex = index;
      this.images[index].scaled = true;
    }
  }

  handleBackgroundClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('cv') && this.activeIndex !== null && this.images[this.activeIndex].scaled) {
      this.exitScale();
    }
  }

  exitScale(): void {
    this.images.forEach((image) => {
      image.scaled = false;
    });
    this.activeIndex = null;
  }
}
