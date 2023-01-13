import { TranslateService } from './../../../services/translate.service';
import { IPost } from './../../../interfaces/ipost';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import { forEach, find } from 'lodash-es';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: IPost[];
  public showPosts: boolean;
  public cols: any[];
  public selectedPosts: string[];
  public searchWord: string;

  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private translateService: TranslateService
  ) {
    this.showPosts = false;
    this.posts = [];
    // Creo las columnas para la tabla
    this.cols = [
      { header: '' },
      { header: this.translateService.getTranslate('label.title') },
      { header: this.translateService.getTranslate('label.date.post') },
      { header: this.translateService.getTranslate('label.categories') },
      { header: this.translateService.getTranslate('label.thumbnail') }
    ];
    this.selectedPosts = [];
  }

  ngOnInit() {

    // Obtengo los posts
    this.postService.getPosts().subscribe(posts => {
      // Obtengo las categorias
      this.categoryService.getCategories().subscribe(categories => {

        // Recorro los posts
        forEach(posts, p => {
          // Recorro las categorias
          forEach(p.categories, (c_post, index) => {
            // Busco la categoria dentro del posts 
            const categoryFound = find(categories, c => c.id === c_post);
            // Si esta, la asocio
            if (categoryFound) {
              p.categories[index] = categoryFound
            }

          });
        });

        this.posts = posts;
        this.showPosts = true;

      }, error => {
        console.error("Error al recuperar las categorias: " + error);
        this.showPosts = true;
      })
    }, error => {
      console.error("Error al recuperar los posts: " + error);
      this.showPosts = true;
    })


  }

  /**
   * Actualiza la cadena a buscar por la directiva
   * @param value cadena a buscar
   */
  updateWord(value) {
    this.searchWord = value;
  }

  /**
   * Borra los posts seleccionados
   */
  deletePosts() {
    this.postService.deletePosts(this.selectedPosts);
    this.selectedPosts = [];
  }

}
