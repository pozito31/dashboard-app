
// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
// Module
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'primeng/chart';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { AngularEditorModule } from '@kolkov/angular-editor';

// Pipes
import { TranslatePipe } from './pipes/translate.pipe';
import { JoinPipe } from './pipes/join.pipe';

// Services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';

// Directives
import { HighligthDirective } from './directives/highligth.directive';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { PostsComponent } from './components/dashboard/posts/posts.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { WidgetComponent } from './components/dashboard/widget/widget.component';
import { WidgetStadisticsComponent } from './components/dashboard/widget/widget-stadistics/widget-stadistics.component';
import { WidgetLastCommentsComponent } from './components/dashboard/widget/widget-last-comments/widget-last-comments.component'
import { WidgetLastVisitsComponent } from './components/dashboard/widget/widget-last-visits/widget-last-visits.component';
import { AddCategoryComponent } from './components/dashboard/categories/add-category/add-category.component';
import { AddPostComponent } from './components/dashboard/posts/add-post/add-post.component';
import { WidgetSelectCategoryComponent } from './components/dashboard/widget/widget-select-category/widget-select-category.component';
import { WidgetUploadThumbnailComponent } from './components/dashboard/widget/widget-upload-thumbnail/widget-upload-thumbnail.component';
import { LoginComponent } from './components/login/login.component';


export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

// Configuracion del proyecto firebase
// Cambiarlo con el de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyDdhVMvDLzPIljKJyVaVOGUuzCgdRdAGOI",
  authDomain: "ddr-blog-app-90f35.firebaseapp.com",
  projectId: "ddr-blog-app-90f35",
  storageBucket: "ddr-blog-app-90f35.appspot.com",
  messagingSenderId: "775614210394",
  appId: "1:775614210394:web:45c469b5df765a76e51363",
  measurementId: "G-M6TFYXY1JL"
};

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    SidebarComponent,
    DashboardComponent,
    CategoriesComponent,
    PostsComponent,
    ResumeComponent,
    WidgetComponent,
    WidgetStadisticsComponent,
    WidgetLastCommentsComponent,
    WidgetLastVisitsComponent,
    AddCategoryComponent,
    HighligthDirective,
    AddPostComponent,
    WidgetSelectCategoryComponent,
    WidgetUploadThumbnailComponent,
    JoinPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ChartModule,
    FormsModule,
    NgbModule,
    TableModule,
    CheckboxModule,
    AngularEditorModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
