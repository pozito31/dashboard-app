import { CategoryService } from './../../../../services/category.service';
import { ICategory } from 'src/app/interfaces/icategory';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget-select-category',
  templateUrl: './widget-select-category.component.html',
  styleUrls: ['./widget-select-category.component.css']
})
export class WidgetSelectCategoryComponent implements OnInit {

  // Output para devolver las categorias seleccionadas
  @Output() select: EventEmitter<string[]>;

  public categories: ICategory[];
  public selectedCategories: string[];

  constructor(
    private categoryService: CategoryService
  ) {
    this.categories = [];
    this.selectedCategories = [];
    this.select = new EventEmitter<string[]>();
  }

  ngOnInit() {

    // Obtiene las categorias
    this.categoryService.getCategories().subscribe(list => {
      this.categories = list;
    })

  }

  sendCategories() {
    // Emite las categorias seleccionadas
    this.select.emit(this.selectedCategories);
  }

}
