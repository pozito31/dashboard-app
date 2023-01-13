import { CategoryService } from './../../../services/category.service';
import { TranslateService } from './../../../services/translate.service';
import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public cols: any[];
  public categories: ICategory[];
  public showCategories: boolean;
  public selectCategories: string[];
  public searchWord: string;

  constructor(
    private translateService: TranslateService,
    private categoryService: CategoryService
  ) {
    this.categories = [];
    this.selectCategories = [];
    // Creo las columnas para la tabla
    this.cols = [
      { header: '' },
      { header: this.translateService.getTranslate("label.name.category") },
      { header: this.translateService.getTranslate("label.description.category") }
    ];
    this.showCategories = false;
  }

  ngOnInit() {
    // Obtengo las categorias
    this.categoryService.getCategories().subscribe(listCategories => {
      this.categories = listCategories;
      this.showCategories = true;
    }, error => {
      console.error("Error al recuperar las categorias: " + error);
      this.showCategories = true;
    })

  }

  /**
   * Borro las categorias seleccionadas
   */
  deleteCategories() {
    this.categoryService.deleteCategories(this.selectCategories);
    this.selectCategories = [];
  }

  /**
   * Actualiza la cadena buscada para la directiva
   * @param value cadena buscada
   */
  updateWord(value) {
    this.searchWord = value;
  }

}
