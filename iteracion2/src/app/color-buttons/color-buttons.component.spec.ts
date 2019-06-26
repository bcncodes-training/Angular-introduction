import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorButtonsComponent } from './color-buttons.component';

describe('ColorButtonsComponent', () => {
  let component: ColorButtonsComponent;
  let fixture: ComponentFixture<ColorButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
