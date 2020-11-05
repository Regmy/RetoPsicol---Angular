import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignamentTicketComponent } from './assignament-ticket.component';

describe('AssignamentTicketComponent', () => {
  let component: AssignamentTicketComponent;
  let fixture: ComponentFixture<AssignamentTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignamentTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignamentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
