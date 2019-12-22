import { TestBed, async } from '@angular/core/testing';
import { PageNotFoundComponent } from './page_not_found.component';

describe('PageNotFoundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ${classname}
      ],
    }).compileComponents();
  }));

  it('should create the page_not_found component', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
