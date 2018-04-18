import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsSmallComponent } from './movie-details-small.component';

describe('MovieDetailsSmallComponent', () => {
  let component: MovieDetailsSmallComponent;
  let fixture: ComponentFixture<MovieDetailsSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
