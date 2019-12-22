import { TestBed, async } from '@angular/core/testing';
import { Page1Component } from './Page1.component';

describe('Page1Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Page1Component
      ],
    }).compileComponents();
  }));

  it('should create the Page1 component', () => {
    const fixture = TestBed.createComponent(Page1Component);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
