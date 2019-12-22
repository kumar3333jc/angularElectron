import { TestBed, async } from '@angular/core/testing';
import { Page3Component } from './Page3.component';

describe('Page3Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Page3Component
      ],
    }).compileComponents();
  }));

  it('should create the Page3 component', () => {
    const fixture = TestBed.createComponent(Page3Component);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
