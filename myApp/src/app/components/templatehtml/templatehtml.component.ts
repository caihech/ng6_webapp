import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatehtml',
  templateUrl: './templatehtml.component.html',
  styleUrls: ['./templatehtml.component.css']
})
export class TemplatehtmlComponent implements OnInit {


  h: any;

  constructor() { }

  ngOnInit() {
    this.h = "<h2>这是一个 h2 用[innerHTML]来解析</h2>";
  }

}
