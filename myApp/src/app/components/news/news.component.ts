import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  datas: Array<any> = [
    { id: 1, date: "2017-04-1", title: "测试标题1", content: "测试内容1" },
    { id: 2, date: "2017-04-2", title: "测试标题2", content: "测试内容2" },
    { id: 3, date: "2017-04-3", title: "测试标题3", content: "测试内容3" },
    { id: 4, date: "2017-04-4", title: "测试标题4", content: "测试内容4" },
    { id: 5, date: "2017-04-5", title: "测试标题5", content: "测试内容5" },
    { id: 6, date: "2017-04-6", title: "测试标题6", content: "测试内容6" },
    { id: 7, date: "2017-04-7", title: "测试标题7", content: "测试内容7" },
    { id: 8, date: "2017-04-8", title: "测试标题8", content: "测试内容8" },
    { id: 9, date: "2017-04-9", title: "测试标题9", content: "测试内容9" }
  ];


  constructor() { }

  ngOnInit() {
  }

}
