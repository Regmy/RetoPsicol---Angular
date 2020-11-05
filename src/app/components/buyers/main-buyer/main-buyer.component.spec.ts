import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBuyerComponent } from './main-buyer.component';

describe('MainBuyerComponent', () => {
  let component: MainBuyerComponent;
  let fixture: ComponentFixture<MainBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
