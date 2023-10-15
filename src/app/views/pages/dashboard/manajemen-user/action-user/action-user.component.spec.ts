import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionUserComponent } from './action-user.component';

describe('ActionUserComponent', () => {
  let component: ActionUserComponent;
  let fixture: ComponentFixture<ActionUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionUserComponent]
    });
    fixture = TestBed.createComponent(ActionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
