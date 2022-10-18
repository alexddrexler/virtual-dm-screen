import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageTypeSelectComponent } from './damage-type-select.component';

describe('DamageTypeSelectComponent', () => {
  let component: DamageTypeSelectComponent;
  let fixture: ComponentFixture<DamageTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamageTypeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
