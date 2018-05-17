import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  
  datas: Array<any> = [
    { num: 1, date: "2017-04-12", sellNum: "000000", sellMpney: "1233", returnNum: "24" },
    { num: 2, date: "2017-04-12", sellNum: "111111", sellMpney: "1233", returnNum: "24" },
    { num: 3, date: "2017-04-12", sellNum: "222222", sellMpney: "1233", returnNum: "24" },
    { num: 4, date: "2017-04-12", sellNum: "333333", sellMpney: "1233", returnNum: "24" },
    { num: 5, date: "2017-04-12", sellNum: "444444", sellMpney: "1233", returnNum: "24" },
    { num: 6, date: "2017-04-12", sellNum: "555555", sellMpney: "1233", returnNum: "24" },
    { num: 7, date: "2017-04-12", sellNum: "666666", sellMpney: "1233", returnNum: "24" },
  ];

  constructor() {


  }

  ngOnInit() {
  }

}
