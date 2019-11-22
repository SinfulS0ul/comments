import { Injectable } from '@angular/core';

export interface Comment {
  userName: string;
  text: string;
  postDate: Date;
  comments: Array<Comment>;
}

@Injectable()
export class CommentsService {
  keyWord: string;
  foundComments: Array<Comment> = [];

  comments: Array<Comment> = [
    {
      userName: 'Max',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postDate: new Date('2019-11-17T10:20:00'),
      comments: [
        {
          userName: 'Marina',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          postDate: new Date('2019-11-17T10:40:00'),
          comments: []
        },
        {
          userName: 'Jordan',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          postDate: new Date('2019-11-17T10:45:00'),
          comments: [
            {
              userName: 'Max',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              postDate: new Date('2019-11-17T11:50:00'),
              comments: []
            }
          ],
        },
      ]
    },
    {
      userName: 'John',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      postDate: new Date('2019-11-17T10:28:00'),
      comments: [
        {
          userName: 'Max',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          postDate: new Date('2019-11-17T10:30:00'),
          comments: []
        }
      ]
    }
  ];
  
  findNestedComment = (arr, comment) => {
    arr.reduce((a, item) => {
      if (a) return a;
      if (item.text.includes(comment)) this.foundComments = [...this.foundComments, item];
      if (item.comments) return this.findNestedComment(item.comments, comment)
    }, null)
  };


  findComments = comment => {
    this.keyWord = comment;
    this.foundComments = [];
    this.findNestedComment(this.comments, comment);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  removeFromComments = (arr, commentToRemove) => {
    arr.reduce((a, item, i) => {
      if (a) return a;
      if (item === commentToRemove) arr.splice(i, 1);
      if (item.comments) return this.removeFromComments(item.comments, commentToRemove)
    }, null)
  }

  deleteComment = comment => {
    this.removeFromComments(this.comments, comment)
    if(this.foundComments.length>0)
      this.removeFromComments(this.foundComments, comment)
  }

  userNamesArray: Array<string> = ['Max', 'Harry', 'Sasuke', 'Belzebubs', 'Fionna'];

  addComment(commentToReply: any, text: string) {
    const newComment = {
      userName: this.userNamesArray[this.getRandomInt(5)],
      text,
      postDate:  new Date(),
      comments: []
    }
    commentToReply.comments = [...commentToReply.comments, newComment]
  }
}
