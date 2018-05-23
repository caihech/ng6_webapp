import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NewsComponent, HomeComponent, TodolistComponent, UsersComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, JsonpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
