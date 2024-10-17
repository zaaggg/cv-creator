import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvStyleComponent } from './cv-style.component';

describe('CvStyleComponent', () => {
  let component: CvStyleComponent;
  let fixture: ComponentFixture<CvStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
