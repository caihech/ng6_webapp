// Angular 模块类描述应用的部件是如何组合在一起的。 每个应用都至少有一个 Angular 模块，也就是根模块，
// 用来引导并运行应用。 你可以为它取任何名字。常规名字是 AppModule。 也就是 app.module.ts 文件


/*引入组件*/



import { BrowserModule } from '@angular/platform-browser'; /*BrowserModule，浏览器解析的模块*/
import { NgModule } from '@angular/core'; /*angualrjs 核心模块*/
import { AppComponent } from './app.component'; /*根组件*/
import { HeaderComponent } from './components/header/header.component';


@NgModule({
   /*引入当前项目运行的的组件*/
  declarations: [
    AppComponent,HeaderComponent
  ],
   /*引入当前模块运行依赖的其他模块*/
  imports: [
    BrowserModule
  ],
  /*定义的服务 回头放在这个里面*/
  providers: [],
  /*指定应用的主视图(称为根组件) 通过引导根 AppModule 来启动应用 ，这里一般写的是根组件*/
  bootstrap: [AppComponent]
})

/*根模块不需要导出任何东西， 因为其它组件不需要导入根模块。 但是一定要写*/
export class AppModule { }
