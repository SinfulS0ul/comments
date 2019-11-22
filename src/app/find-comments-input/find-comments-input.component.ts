import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';


@Component({
  selector: 'app-find-comments-input',
  templateUrl: './find-comments-input.component.html',
  styleUrls: ['./find-comments-input.component.scss']
})
export class FindCommentsInputComponent implements OnInit {

  commentFinder: string;

  constructor(private commentsService: CommentsService) {}

  onFieldChange(model: string){
    this.commentFinder = model;
    this.commentsService.findComments(this.commentFinder);
    console.log(model);
  }

  ngOnInit() {
  }

}
