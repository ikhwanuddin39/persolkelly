import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajemenCategoryComponent } from './manajemen-category.component';

describe('ManajemenCategoryComponent', () => {
  let component: ManajemenCategoryComponent;
  let fixture: ComponentFixture<ManajemenCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManajemenCategoryComponent]
    });
    fixture = TestBed.createComponent(ManajemenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
