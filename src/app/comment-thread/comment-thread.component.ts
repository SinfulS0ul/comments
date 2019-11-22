import { Component, OnInit, Input } from '@angular/core';
import { trackByFunction } from '../comments-list/comments-list.component';
import { Comment } from '../services/comments.service';

@Component({
  selector: 'app-comment-thread',
  templateUrl: './comment-thread.component.html',
  styleUrls: ['./comment-thread.component.scss']
})
export class CommentThreadComponent implements OnInit {

  constructor() { }

  trackByFn = trackByFunction;
  
  @Input() commentData: Comment;

  ngOnInit() {
  }

}
