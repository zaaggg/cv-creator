import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from 'src/app/services/image-service.service'
import { StyleService } from '../services/style.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateServiceService } from '../services/create-service.service';
import { ColorService } from '../services/color-service.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { SharedService } from '../shared.service';
import { CvFile } from 'src/models/cvFIle.model';
import { Skill } from 'src/models/skill.model';
import { Language } from 'src/models/language.model';


class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  updateRange(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    const value = +target.value;

    switch (index) {
      case 1:
        this._CreateService.range1 = value;
        break;
      case 2:
        this._CreateService.range2 = value;
        break;
      case 3:
        this._CreateService.range3 = value;
        break;
      case 4:
        this._CreateService.range4 = value;
        break;
      case 5:
        this._CreateService.range5 = value;
        break;
      default:
        break;
    }
  }

  selectedFile!: ImageSnippet;
  language1: string ='';
  language2: string ='';
  language3: string ='';
  language4: string ='';
  language5: string ='';


  constructor(private imageService: ImageServiceService,public shared : SharedService ,_StyleService:StyleService,private route : ActivatedRoute,public _CreateService:CreateServiceService,private colorService: ColorService,private router : Router,) { }


  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }
  processFile(event: any) {
    const file: File | null = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageService.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
    id: number = 0;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const x = params.get('id');
      if (x !== null) {
        this.id = +x;
      } else {
        this.id = 0;
      }
    });



    const btn = document.getElementById('retour1');
    btn?.addEventListener('click', function onClick() {
      window.location.href = './cv-style';
    });
    const btn1 = document.getElementById('retour2');
    btn1?.addEventListener('click', function onClick() {
      window.location.href = './design';
    });
    const btn2 = document.getElementById('retour3');
    btn2?.addEventListener('click', function onClick() {
      window.location.href = './create';
    });


  }


  Cv:CvFile = {
    idCvFile: 0,
    photoData: '../../assets/cv/'+'CV_creator_'+this.shared.AccountConnected.firstName+'_'+this.shared.AccountConnected.lastName+'.png',
    pdfData: '../../assets/cv/'+'CV_creator_'+this.shared.AccountConnected.firstName+'_'+this.shared.AccountConnected.lastName+'.pdf',
    accountId: this.shared.AccountConnected
  };
  skill1: Skill ={
    idSkill: 0,
    skillTitle: "",
    account: this.shared.AccountConnected
  };
  skill2: Skill ={
    idSkill: 0,
    skillTitle: "",
    account: this.shared.AccountConnected
  };

  skill3: Skill ={
    idSkill: 0,
    skillTitle: "",
    account: this.shared.AccountConnected
  };

  skill4: Skill ={
    idSkill: 0,
    skillTitle: "",
    account: this.shared.AccountConnected
  };

  skill5: Skill ={
    idSkill: 0,
    skillTitle: "",
    account: this.shared.AccountConnected
  };
  Language1:Language ={
    idLanguage: 0,
    languageTitle: "",
    account: this.shared.AccountConnected
  };
  Language2: Language ={
    idLanguage: 0,
    languageTitle: "",
    account: this.shared.AccountConnected
  };

  Language3:Language ={
    idLanguage: 0,
    languageTitle: "",
    account: this.shared.AccountConnected
  };

  Language4:Language ={
    idLanguage: 0,
    languageTitle: "",
    account: this.shared.AccountConnected
  };
  Language5:Language ={
    idLanguage: 0,
    languageTitle: "",
    account: this.shared.AccountConnected
  };





  public convertToPDF(){
    html2canvas(document.getElementById("download")!).then(canvas => {

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'px', 'a4');
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 455, 635)
      pdf.save('CV_creator_'+this.shared.AccountConnected.firstName+'_'+this.shared.AccountConnected.lastName+'.pdf');
      this.Cv.pdfData= '../../assets/cv/'+'CV_creator_'+this.shared.AccountConnected.firstName+'_'+this.shared.AccountConnected.lastName+'.pdf';



      const link = document.createElement('a');
      link.href = contentDataURL;
      link.download = 'CV_creator_'+this.shared.AccountConnected.firstName+'_'+this.shared.AccountConnected.lastName+'.png';
      link.click();
      this.Cv.photoData= '../../assets/cv/'+'CV_creator_'+this.shared.AccountConnected.firstName+'_'+this.shared.AccountConnected.lastName+'.png';
      console.log(this.Cv.photoData);
      });
      console.log(this.Cv.pdfData);
      console.log(this.Cv.photoData);
      this.shared.addCv(this.Cv).subscribe({
        next: (data) => {
          console.log(data);
        } ,error: (err) => {
          console.log(err);
        }

      });
      if(this._CreateService.userData.skill1.length!=0){
        this.skill1.skillTitle=this._CreateService.userData.skill1;
        this.skill1.account=this.shared.AccountConnected;
        this.shared.addSkill(this.skill1).subscribe({
          next: (data) => {
            console.log(data);
          } ,error: (err) => {
          console.log(err);
          }
        });
      }
      if(this._CreateService.userData.skill2.length!=0){
        this.skill2.skillTitle=this._CreateService.userData.skill2;
        this.skill2.account=this.shared.AccountConnected;
        this.shared.addSkill(this.skill2).subscribe({
          next: (data) => {
            console.log(data);
          } ,error: (err) => {
          console.log(err);
          }
        });
      }
      if(this._CreateService.userData.skill3.length!=0){
        this.skill3.skillTitle=this._CreateService.userData.skill3;
        this.skill3.account=this.shared.AccountConnected;
        this.shared.addSkill(this.skill3).subscribe({
          next: (data) => {
            console.log(data);
          } ,error: (err) => {
          console.log(err);
          }
        });
      }
      if(this._CreateService.userData.skill4.length!=0){
        this.skill4.skillTitle=this._CreateService.userData.skill4;
        this.skill4.account=this.shared.AccountConnected;
        this.shared.addSkill(this.skill4).subscribe({
          next: (data) => {
            console.log(data);
          } ,error: (err) => {
          console.log(err);
          }
        });
      }
      if(this._CreateService.userData.skill5.length!=0){
        this.skill5.skillTitle=this._CreateService.userData.skill5;
        this.skill5.account=this.shared.AccountConnected;
        this.shared.addSkill(this.skill5).subscribe({
          next: (data) => {
            console.log(data);
          } ,error: (err) => {
          console.log(err);
          }
        });
      }
      this.router.navigate(['/main']);
      this.shared.IsCreated=true;
      }

      handleButtonClick(): void {
        const targetDiv = document.querySelector('.container-right') as HTMLElement;
        targetDiv.style.transform = 'scale(2) translate(-102px, 150px)';
        setTimeout(() => {
          targetDiv.style.transform = 'none';
        }, 30);
  }

}






