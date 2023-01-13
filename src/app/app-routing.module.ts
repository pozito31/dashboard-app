import { LoginGuard } from './services/login-guard.service';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/dashboard/posts/add-post/add-post.component';
import { AddCategoryComponent } from './components/dashboard/categories/add-category/add-category.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { PostsComponent } from './components/dashboard/posts/posts.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent, canActivate: [LoginGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [LoginGuard] },
  { path: 'categories', component: CategoriesComponent, canActivate: [LoginGuard] },
  { path: 'add-category', component: AddCategoryComponent, canActivate: [LoginGuard] },
  { path: 'add-post', component: AddPostComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'resume' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
