import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkspaceCompComponent } from './main-workspace-comp.component';

describe('MainWorkspaceCompComponent', () => {
  let component: MainWorkspaceCompComponent;
  let fixture: ComponentFixture<MainWorkspaceCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWorkspaceCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWorkspaceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
