import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBranchOfficeComponent } from './main-branch-office.component';

describe('MainBranchOfficeComponent', () => {
  let component: MainBranchOfficeComponent;
  let fixture: ComponentFixture<MainBranchOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBranchOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
