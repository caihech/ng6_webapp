import { Component, OnInit } from '@angular/core'; /*引入 angular 核心*/

@Component({
  selector: 'app-header', /*使用这个组件的名称*/
  templateUrl: './header.component.html', /*html 模板*/
  styleUrls: ['./header.component.css'] /*css 样式*/
})
export class HeaderComponent implements OnInit {  /*实现接口*/

  testTxt = 'this is';
  h: any;
  testAny: any;

  constructor() {
    /*构造函数*/
  }

  ngOnInit() {
    /*初始化加载的生命周期函数*/
    this.testAny = "header";
   
  }

}
