import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSlideWindowCompComponent } from './left-slide-window-comp.component';

describe('LeftSlideWindowCompComponent', () => {
  let component: LeftSlideWindowCompComponent;
  let fixture: ComponentFixture<LeftSlideWindowCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSlideWindowCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSlideWindowCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
