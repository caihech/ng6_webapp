import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { url } from 'inspector';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public entity: any = { "name": "", "time": "", "version": "" };
  public list: any;

  constructor(private http: Http, private jsonp: Jsonp) {

  }

  ngOnInit() {

  }


  getAjax() {

    var _that = this;
    var url = "http://test.svc.s2icode.com/api/svc/version";
    this.http.get(url).subscribe(function (successData) {
      var temp = JSON.parse(successData['_body']);
      _that.entity = temp;
    }, function (errorData) {
      console.info(errorData);
    });
  }

  getJsonp() {

    var _that = this;
    this.jsonp.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK")
      .subscribe(
        function (data) {
          console.log(data['_body']['result']);
          _that.list=data['_body']['result'];
        }, function (err) {
          console.log('失败');
        });

  }

}
