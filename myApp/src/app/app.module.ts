import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplatehtmlComponent } from './components/templatehtml/templatehtml.component'; 

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,TemplatehtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
