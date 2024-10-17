import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DesignComponent } from './designcv/design.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CvComponent } from './cv/cv.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { CreateComponent } from './create/create.component';
import { Cv1Component } from './cvs/cv1/cv1.component';
import { Cv2Component } from './cvs/cv2/cv2.component';
import { LoginComponent } from './login/login.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { CvStyleComponent } from './cv-style/cv-style.component';
import { Cv3Component } from './cvs/cv3/cv3.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DesignComponent,
    MainComponent,
    FooterComponent,
    CvComponent,
    NextDirective,
    PrevDirective,
    CreateComponent,
    Cv1Component,
    Cv2Component,
    LoginComponent,
    CreateAccComponent,
    CvStyleComponent,
    Cv3Component,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
