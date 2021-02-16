import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalsComponent } from './additionals.component';

describe('AdditionalsComponent', () => {
  let component: AdditionalsComponent;
  let fixture: ComponentFixture<AdditionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
