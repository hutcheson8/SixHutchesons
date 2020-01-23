import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsHomeComponent } from './gifts-home.component';

describe('GiftsHomeComponent', () => {
  let component: GiftsHomeComponent;
  let fixture: ComponentFixture<GiftsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
