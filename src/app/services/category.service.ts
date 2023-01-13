import { ICategory } from './../interfaces/icategory';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

import { forEach } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private afd: AngularFireDatabase
  ) { }

  /**
   * Obtiene todas las categorias
   */
  getCategories(): Observable<ICategory[]> {
    return this.afd.list<ICategory>('categories').valueChanges();
  }

  /**
   * Añade una categoria
   * @param category 
   */
  addCategory(category: Category) {

    // Obtengo la referencia de categories
    let categoryRef = this.afd.database.ref('categories');

    // Añado un nuevo elemento
    let newCategory = categoryRef.push();

    // Añado un nuevo id con el key del elemento añadido
    category.id = newCategory.key;

    // Obtengo el elemento con ese id
    let categoryRefId = this.afd.database.ref('categories/' + category.id)

    // Seteo el valor de la categoria
    categoryRefId.set(category.getData())

  }

  /**
   * Borro categorias con los ids pasados
   * @param ids ids a borrar
   */
  deleteCategories(ids: string[]) {

    // Recorro los ids
    forEach(ids, id => {
      // Obtengo el elemento y lo borro
      this.afd.object("/categories/" + id).remove()
    })
  }

}
