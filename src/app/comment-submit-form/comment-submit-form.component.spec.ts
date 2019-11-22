import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSubmitFormComponent } from './comment-submit-form.component';

describe('CommentSubmitFormComponent', () => {
  let component: CommentSubmitFormComponent;
  let fixture: ComponentFixture<CommentSubmitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSubmitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
