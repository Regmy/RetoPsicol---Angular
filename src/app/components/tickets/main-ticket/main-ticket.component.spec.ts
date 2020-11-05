import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTicketComponent } from './main-ticket.component';

describe('MainTicketComponent', () => {
  let component: MainTicketComponent;
  let fixture: ComponentFixture<MainTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
