import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {PostService} from "./services/post.service";
import { PostsComponent } from './component/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {IBrowser} from "selenium-webdriver";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSpinnerModule} from "ngx-spinner";
import {CommentsServices} from "./services/comments.services";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      NgxSpinnerModule,
      FormsModule
  ],
  providers: [PostService, CommentsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
