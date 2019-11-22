import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comment-submit-form',
  templateUrl: './comment-submit-form.component.html',
  styleUrls: ['./comment-submit-form.component.scss']
})
export class CommentSubmitFormComponent implements OnInit {
  sendReplyForm: FormGroup;

  @Input() commentData: Comment;

  constructor(private formBuilder: FormBuilder, private commentsService: CommentsService) { }

  ngOnInit() {
    this.sendReplyForm = this.formBuilder.group({
      reply: ['', [
            Validators.required
      ]]
    })
  }

  onSubmit() {
    const controls = this.sendReplyForm.controls;

    if (this.sendReplyForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }
    this.commentsService.addComment(this.commentData, this.sendReplyForm.value.reply);
    this.sendReplyForm.reset();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.sendReplyForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

}
