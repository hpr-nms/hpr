import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: []
})
export class TempComponent implements OnInit {

searchModel=new AppModelSearch();

  constructor(
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
