import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { CommentsService } from './services/comments.service';
import { ShowInputService } from './services/show-input.service';

import { AppComponent } from './app.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentThreadComponent } from './comment-thread/comment-thread.component';
import { CommentSubmitFormComponent } from './comment-submit-form/comment-submit-form.component';
import { FindCommentsInputComponent } from './find-comments-input/find-comments-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    CommentComponent,
    CommentThreadComponent,
    CommentSubmitFormComponent,
    FindCommentsInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ShowInputService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
