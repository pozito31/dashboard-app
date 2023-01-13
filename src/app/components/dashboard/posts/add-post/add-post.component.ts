import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Post } from './../../../../models/post';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild("modal_add_post", { static: false }) modal_add_post;

  public post: Post;
  public config: AngularEditorConfig

  constructor(
    private postService: PostService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.post = new Post({});
    // Configuracion HTML editor
    this.config = {
      editable: true,
      height: '22rem',
      minHeight: '5rem'
    }
  }

  ngOnInit() {
  }

  /**
   * Obtengo las categories del widget
   * @param $event Categorias seleccionadas para el post
   */
  getCategories($event) {
    this.post.categories = $event;
  }

  /**
   * Obtengo la ruta de la imagen del widget
   * @param $event Ruta de la imagen seleccionada
   */
  getPath($event) {
    this.post.img = $event;
  }

  /**
   * Añade el post
   */
  addPost() {

    // Añade el post
    this.postService.addPost(this.post);

    // Abre el modal de añadido con exito
    this.modalService.open(this.modal_add_post);

    // Volvemos a posts
    this.router.navigate(['/posts'])

  }

}
