import { Component, Input, OnInit } from '@angular/core';
import { trackByFunction } from '../comments-list/comments-list.component';
import { Comment } from '../services/comments.service';
import { ShowInputService } from '../services/show-input.service';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  constructor(public showInputService: ShowInputService, public commentsService: CommentsService ) { }

  postDate: string;
  trackByFn = trackByFunction;

  @Input() commentData: Comment;

  changeInput(){
    this.showInputService.changeReply(this.commentData);
  }

  deleteComment(){
    this.commentsService.deleteComment(this.commentData);
  }

  ngOnInit() {
    const date = this.commentData.postDate;

    this.postDate = 
      `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}
       ${date.getHours()}:${date.getMinutes()}`
  }

}
