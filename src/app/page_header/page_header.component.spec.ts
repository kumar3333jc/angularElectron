import { TestBed, async } from '@angular/core/testing';
import { page_headerComponent } from './page_header.component';

describe('page_headerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        page_headerComponent
      ],
    }).compileComponents();
  }));

  it('should create the page_header component', () => {
    const fixture = TestBed.createComponent(page_headerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
