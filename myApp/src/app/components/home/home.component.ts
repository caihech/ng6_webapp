import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'hello angular 6.0';
  h = "<h2>这是一个 h2 用[innerHTML]来解析</h2>";

  constructor() { }

  ngOnInit() {
  }

}
