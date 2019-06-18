import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableitemviewPage } from './vegetableitemview.page';

describe('VegetableitemviewPage', () => {
  let component: VegetableitemviewPage;
  let fixture: ComponentFixture<VegetableitemviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableitemviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableitemviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
