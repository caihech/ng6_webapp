import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  public username: any;
  public list = [];
  constructor(private storage: StorageService) {
    this.username = '';
  }

  ngOnInit() {
    var todolist = this.storage.getItem("todolist");
    if (todolist) {
      this.list = todolist;
    }

  }

  addData(e) {

    if (e.keyCode == 13) {

      var obj = {
        username: this.username,
        status: false
      }

      //如果todolist 有数据
      var todolist = this.storage.getItem("todolist");
      if (todolist) {
        todolist.push(obj)
        this.storage.setItem("todolist", todolist);
      } else {
        var arr = [];
        arr.push(obj);
        this.storage.setItem("todolist", arr);
      }


      this.list.push(obj);
      this.username = '';
    }
  }

  deleteData(key) {
    console.info("deleteData:"+key);
    this.list.splice(key, 1);
    this.storage.removeItem(key);
    this.storage.setItem("todolist", this.list);
  }
  changeData(key,b) {
    this.list[key].status = b;
    this.storage.setItem("todolist",this.list);
  }

}
