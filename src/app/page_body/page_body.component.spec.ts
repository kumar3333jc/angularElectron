import { TestBed, async } from '@angular/core/testing';
import { page_bodyComponent } from './page_body.component';

describe('page_bodyComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        page_bodyComponent
      ],
    }).compileComponents();
  }));

  it('should create the page_body component', () => {
    const fixture = TestBed.createComponent(page_bodyComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
