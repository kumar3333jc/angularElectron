import { TestBed, async } from '@angular/core/testing';
import { page_footerComponent } from './page_footer.component';

describe('page_footerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        page_footerComponent
      ],
    }).compileComponents();
  }));

  it('should create the page_footer component', () => {
    const fixture = TestBed.createComponent(page_footerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
