import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private selectedColorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setSelectedColor(color: string): void {
    this.selectedColorSubject.next(color);
  }

  getSelectedColor(): BehaviorSubject<string> {
    return this.selectedColorSubject;
  }
  
}