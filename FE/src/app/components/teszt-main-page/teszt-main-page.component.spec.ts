import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesztMainPageComponent } from './teszt-main-page.component';

describe('TesztMainPageComponent', () => {
  let component: TesztMainPageComponent;
  let fixture: ComponentFixture<TesztMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesztMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesztMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
