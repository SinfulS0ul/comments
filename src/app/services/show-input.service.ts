import { Injectable } from '@angular/core';
import { Comment } from './comments.service';

@Injectable()
export class ShowInputService {
  showInput: Comment;

  changeReply(commentToReply: Comment) {
    this.showInput = commentToReply;
  }
}