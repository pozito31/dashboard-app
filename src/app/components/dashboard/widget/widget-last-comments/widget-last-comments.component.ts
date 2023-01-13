import { CommentService } from './../../../../services/comment.service';
import { IComment } from './../../../../interfaces/icomment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-last-comments',
  templateUrl: './widget-last-comments.component.html',
  styleUrls: ['./widget-last-comments.component.css']
})
export class WidgetLastCommentsComponent implements OnInit {

  public listComments: IComment[];

  constructor(
    private commentService: CommentService
  ) {
    this.listComments = [];
  }

  ngOnInit() {
    // Obengo los comentarios
    this.commentService.getLastComments().subscribe(lastComments => this.listComments = lastComments)
  }

}
