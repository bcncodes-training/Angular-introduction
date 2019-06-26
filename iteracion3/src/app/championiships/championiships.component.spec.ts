import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionishipsComponent } from './championiships.component';

describe('ChampionishipsComponent', () => {
  let component: ChampionishipsComponent;
  let fixture: ComponentFixture<ChampionishipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionishipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionishipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
