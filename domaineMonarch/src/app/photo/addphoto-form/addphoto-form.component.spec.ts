import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphotoFormComponent } from './addphoto-form.component';

describe('AddphotoFormComponent', () => {
  let component: AddphotoFormComponent;
  let fixture: ComponentFixture<AddphotoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphotoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
