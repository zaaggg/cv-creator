import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DesignComponent } from './designcv/design.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CvComponent } from './cv/cv.component';
import { CreateComponent } from './create/create.component';
import {LoginComponent} from './login/login.component';
import { CreateAccComponent } from "./create-acc/create-acc.component";
import { CvStyleComponent } from './cv-style/cv-style.component';
import { Cv1Component } from './cvs/cv1/cv1.component';
import { Cv2Component } from './cvs/cv2/cv2.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path:'',redirectTo: 'main', pathMatch: 'full'},
  { path:'design', component:DesignComponent},
  { path:'main', component:MainComponent},
  { path:'create', component:CreateComponent},
  { path:'login', component:LoginComponent},
  { path:'list', component:ListComponent},
  { path:'create-acc', component:CreateAccComponent},
  { path:'cv-style', component:CvStyleComponent},
  { path: 'design/:id', component: DesignComponent },
  { path: 'design/:id1', component: DesignComponent },
  { path: 'design/:id2', component: DesignComponent },
  { path: 'design/:id3', component: DesignComponent },
  { path: 'design/:id4', component: DesignComponent },
  { path: 'design/:id5', component: DesignComponent },
  { path: 'design/:id6', component: DesignComponent },
  { path: 'design/:id7', component: DesignComponent },
  { path: 'design/:id8', component: DesignComponent },
  { path: 'design/:id9', component: DesignComponent },
  { path: 'create/:id', component: CreateComponent },
  {
    path: '',
    component: DesignComponent,
    children: [
      { path: '', redirectTo: 'cv/:id', pathMatch: 'full' },
      { path: 'cv/:id', component: Cv1Component }, // Route for Cv1Component
      { path: 'cv/:id', component: Cv2Component }  // Route for Cv2Component
    ]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
