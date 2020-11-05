import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBranchOfficeComponent } from './create-branch-office.component';

describe('CreateBranchOfficeComponent', () => {
  let component: CreateBranchOfficeComponent;
  let fixture: ComponentFixture<CreateBranchOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBranchOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
