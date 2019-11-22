import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

export const trackByFunction = (index, item) =>
  `${item.postDate}${item.text}`;

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})

export class CommentsListComponent implements OnInit {

  constructor(public commentsService: CommentsService) { }
  text: string;


  trackByFn = trackByFunction;
  
  ngOnInit() {
    
  }

}
