import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
