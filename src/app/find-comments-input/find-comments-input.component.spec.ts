import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommentsInputComponent } from './find-comments-input.component';

describe('FindCommentsInputComponent', () => {
  let component: FindCommentsInputComponent;
  let fixture: ComponentFixture<FindCommentsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommentsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommentsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
