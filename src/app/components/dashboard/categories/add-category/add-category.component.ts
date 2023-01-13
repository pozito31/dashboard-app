import { CategoryService } from './../../../../services/category.service';
import { ICategory } from './../../../../interfaces/icategory';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @ViewChild("modal_add_category", { static: false }) modal_add_category;

  public category: ICategory;

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.category = {
      id: '',
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  addCategory() {

    // Creo la categoria
    let cat = new Category(this.category);

    // Añado la categoria
    this.categoryService.addCategory(cat);

    // Muestro el modal categoria añadida
    this.modalService.open(this.modal_add_category);

    // navego hacia categorias
    this.router.navigate(['/categories'])

  }

}
