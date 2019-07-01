import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestChampionsComponent } from './latest-champions.component';

describe('LatestChampionsComponent', () => {
  let component: LatestChampionsComponent;
  let fixture: ComponentFixture<LatestChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
