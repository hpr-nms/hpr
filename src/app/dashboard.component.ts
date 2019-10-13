import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  @Input() height: string;
  @Input() isshowdiv: boolean;
  @Input() formState: 0;
  @Output() onshowEditPanelChange = new EventEmitter<any>();
  openByToggle = false;
  divHeight = '0px';
  constructor() { }

  ngOnInit() {
    this.isshowdiv = false;
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes['isshowdiv']) {
      // if (changes['isshowdiv'].currentValue) {
        this.onClick();
        console.log('equalllll');
      // } else {
        console.log('close');
      // }
      // this.HideDiv(changes['isshowdiv'].currentValue);
    }
  }
  onClick() {
    if (this.isshowdiv) {
      this.divHeight = this.height;
    } else {
      this.divHeight = '0px';
    }
    // this.openByToggle=!this.openByToggle;

  }
  toggle() {
    console.log(this.divHeight);
    if (this.divHeight !== '0px') {
      this.divHeight='0px';
      this.isshowdiv=false;

    }else{
      this.divHeight=this.height;
      this.isshowdiv=true;

    }

  }

}



