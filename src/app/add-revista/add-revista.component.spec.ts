import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRevistaComponent } from './add-revista.component';

describe('AddRevistaComponent', () => {
  let component: AddRevistaComponent;
  let fixture: ComponentFixture<AddRevistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRevistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
