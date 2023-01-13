import { PostService } from './../../../../services/post.service';
import { ConfigService } from 'src/app/services/config.service';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../../services/comment.service'
@Component({
  selector: 'app-widget-stadistics',
  templateUrl: './widget-stadistics.component.html',
  styleUrls: ['./widget-stadistics.component.css']
})
export class WidgetStadisticsComponent implements OnInit {

  // Atributos
  public numUsers: number;
  public numComments: number;
  public numPosts: number;

  constructor(
    private config: ConfigService,
    private commentService: CommentService,
    private postService: PostService
  ) { }

  ngOnInit() {
    // Obtengo el numero de usuarios
    this.numUsers = this.config.numUsers;

    // Obtengo el numero de comentarios
    this.commentService.getComments().subscribe(listComments => {
      this.numComments = listComments.length;
    });

    // Obtengo el numero de posts 
    this.postService.getPosts().subscribe(listPosts => {
      this.numPosts = listPosts.length;
    })


  }

}
