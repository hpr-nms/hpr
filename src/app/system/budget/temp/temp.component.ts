import { Component, OnInit } from '@angular/core';
import { ServerService } from 'app/services/server.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: []
})
export class TempComponent implements OnInit {

searchModel=new AppModelSearch();

  constructor(
    public serverServ:ServerService
  ) { }

  ngOnInit() {

  }

  searchFunc(){
    console.log('ss');
  }

}



export class AppModelSearch{
  constructor(
    public select= null,
    public input1: string = null,
    public input2: string = null
  ){  }
}
