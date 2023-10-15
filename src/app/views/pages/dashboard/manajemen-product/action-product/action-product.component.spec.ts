import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionProductComponent } from './action-product.component';

describe('ActionProductComponent', () => {
  let component: ActionProductComponent;
  let fixture: ComponentFixture<ActionProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionProductComponent]
    });
    fixture = TestBed.createComponent(ActionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
