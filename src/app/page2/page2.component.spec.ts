import { TestBed, async } from '@angular/core/testing';
import { page2Component } from './page2.component';

describe('page2Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        page2Component
      ],
    }).compileComponents();
  }));

  it('should create the page2 component', () => {
    const fixture = TestBed.createComponent(page2Component);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
