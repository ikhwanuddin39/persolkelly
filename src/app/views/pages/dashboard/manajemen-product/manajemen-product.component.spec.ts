import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajemenProductComponent } from './manajemen-product.component';

describe('ManajemenProductComponent', () => {
  let component: ManajemenProductComponent;
  let fixture: ComponentFixture<ManajemenProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManajemenProductComponent]
    });
    fixture = TestBed.createComponent(ManajemenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
