import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplatehtmlComponent } from './components/templatehtml/templatehtml.component';
import { NgForComponent } from './components/ng-for/ng-for.component'; 

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,TemplatehtmlComponent, NgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
