import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWishListsComponent } from './other-wish-lists.component';

describe('OtherWishListsComponent', () => {
  let component: OtherWishListsComponent;
  let fixture: ComponentFixture<OtherWishListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherWishListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWishListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
