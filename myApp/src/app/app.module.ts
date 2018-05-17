import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgForComponent } from './components/ng-for/ng-for.component'; 

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, NgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
