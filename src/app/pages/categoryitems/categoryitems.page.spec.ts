import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CategoryItemsPage } from './categoryitems.page';

describe('CategoryItemsPage', () => {
  let component: CategoryItemsPage;
  let fixture: ComponentFixture<CategoryItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
