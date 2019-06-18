import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemviewPage } from './itemview.page';

describe('ItemviewPage', () => {
  let component: ItemviewPage;
  let fixture: ComponentFixture<ItemviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
