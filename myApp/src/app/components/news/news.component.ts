import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title = '新闻模块';
  public name1: string = 'name=1';

  public tabBower: any = 1;

  public list = [];
  public obj = { name: 'aabvcc' };


  public stuudents: any[];

  public msg: any;

  public flag: boolean;

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


  constructor() {

    this.list = ['1', '2', '3'];
    this.msg = "信息";
    this.flag = true;

    this.stuudents = [
      {
        'name': '学生a',
        'credits': [
          { 'chinese': '98' },
          { 'chinese': '55' }
        ]
      }, {
        'name': '学生b',
        'credits': [
          { 'chinese': '12' },
          { 'chinese': '33' }
        ]
      }, {
        'name': '学生c',
        'credits': [
          { 'chinese': '66' },
          { 'chinese': '77' }
        ]
      }
    ];
  }

  ngOnInit() {
  }

  getMsg() {

    alert(this.msg);

  }

  updateFlagValue() {
    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  run(e){
    console.info(e);
  }

}
