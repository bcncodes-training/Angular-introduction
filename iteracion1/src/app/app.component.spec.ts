import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'iteracion1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
<<<<<<< HEAD
    const app = fixture.componentInstance;
=======
    const app = fixture.debugElement.componentInstance;
>>>>>>> 972f7d53894938cec951e7011cff9144f16ae353
    expect(app.title).toEqual('iteracion1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
<<<<<<< HEAD
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('iteracion1 app is running!');
=======
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to iteracion1!');
>>>>>>> 972f7d53894938cec951e7011cff9144f16ae353
  });
});
