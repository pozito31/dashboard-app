import { IPost } from './../interfaces/ipost';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

import * as moment from 'moment'
import { forEach } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private afd: AngularFireDatabase
  ) { }

  /**
   * Devuelve los posts
   */
  getPosts(): Observable<IPost[]> {
    return this.afd.list<IPost>('posts').valueChanges();
  }

  /**
   * Añade un post a firebase
   * @param post post a añadir
   */
  addPost(post: Post) {

    // Añado la fecha al post
    post.date = moment().toISOString()

    // Obtengo la referencia de la parte de posts
    let postRef = this.afd.database.ref('posts');

    // Añado un nuevo elemento (sin valor)
    let newPost = postRef.push();

    // Guardo el id del post con el key del post que hemos añadido
    post.id = newPost.key;

    // Obtengo el elemento 
    let postRefId = this.afd.database.ref('posts/' + post.id);

    // Seteo el valor con el post
    postRefId.set(post.getData())

  }

  /**
   * Borro posts con los ids dados
   * @param ids ids a borrar
   */
  deletePosts(ids: string[]) {

    // Recorro los ids
    forEach(ids, id =>
      // Obtengo el elmento y lo elimino
      this.afd.object('/posts/' + id).remove()
    );

  }

}
