import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() {}
  public title : string[] = [];
  public desc : string[] = [];
  public image : string[] = [];
}
