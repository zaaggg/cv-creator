import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {

  constructor() { }
  userData = {
    firstName:'name',
    lastName:'',
    email:'Your Address Mail',
    phone:'Your Number',
    address:'Your Address',
    PostalCode:'',
    City:'Your city',
    dob:'birthday',
    language1:'',
    language2:'',
    language3:'',
    language4:'',
    language5:'',
    Profile:'Your Profile',
    summary:'',
    experience:'',
    education:'',
    skill1:'',
    skill2:'',
    skill3:'',
    skill4:'',
    skill5:'',
    
  };
  range1: number=0;
  range2: number=0;
  range3: number=0;
  range4: number=0;
  range5: number=0;
  
  updateRange(index: number, value: number) {
    switch (index) {
      case 1:
        this.range1 = value;
        break;
      case 2:
        this.range2 = value;
        break;
      case 3:
        this.range3 = value;
        break;
      case 4:
        this.range4 = value;
        break;
      case 5:
        this.range5 = value;
        break;
      default:
        break;
    }
  }

  getRangeText(index: number): string {
    switch (index) {
      case 1:
        switch (this.range1) {
          case 1:
            return 'low';
          case 2:
            return 'Basic';
          case 3:
            return 'Good';
          case 4:
            return 'professionnel';
          case 5:
            return 'Native';
          default:
            return '';
        }
      case 2:
        switch (this.range2) {
          case 1:
            return 'low';
          case 2:
            return 'Basic';
          case 3:
            return 'Good';
          case 4:
            return 'professionnel';
          case 5:
            return 'Native';
          default:
            return '';
        }
      case 3:
        switch (this.range3) {
          case 1:
            return 'low';
          case 2:
            return 'Basic';
          case 3:
            return 'Good';
          case 4:
            return 'professionnel';
          case 5:
            return 'Native';
          default:
            return '';
        }
      case 4:
        switch (this.range4) {
          case 1:
            return 'low';
          case 2:
            return 'Basic';
          case 3:
            return 'Good';
          case 4:
            return 'professionnel';
          case 5:
            return 'Native';
          default:
            return '';
        }
      case 5:
        switch (this.range5) {
          case 1:
            return 'low';
          case 2:
            return 'Basic';
          case 3:
            return 'Good';
          case 4:
            return 'professionnel';
          case 5:
            return 'Native';
          default:
            return '';
        }
      default:
        return '';
    }
  }
}
