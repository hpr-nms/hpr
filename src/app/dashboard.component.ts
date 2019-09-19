import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  openSideBar = false;
  Tab = "tab_1-1";
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.Tab = "tab_1-1";
    console.log(this.Tab);
  }

  openNav() {
    if (!this.openSideBar) {
      // document.getElementById("mySidebar").classList.add("open");
      // document.getElementById("main").classList.add("open");
      document.getElementById("sidebar-toggle").classList.remove("exitUmLeft");
      document.getElementById("sidebar-toggle").classList.add("exitUmLeft");

      console.log(document.getElementById("sidebar-toggle").classList, this.openSideBar);

    } else {
      // document.getElementById("mySidebar").classList.remove("open");
      // document.getElementById("main").classList.remove("open");
      document.getElementById("sidebar-toggle").classList.remove("exitUmLeft");
      document.getElementById("sidebar-toggle").classList.add("exitUmleft");

      console.log(document.getElementById("sidebar-toggle").classList, this.openSideBar);

    }
    this.openSideBar = !this.openSideBar;
  }

  changeTab(tabIndex) {
    this.Tab = tabIndex;
  }

  callComponent(component) {
    if (component === "assignActionToOperation") {
      this.Tab = "tab_6-6-1";
    } else if (component === "assignOperationToRole") {
      this.Tab = "tab_6-6-2";
    } else if (component === "assignRoleToUser") {
      this.Tab = "tab_6-6-3";
    }
  }

  toggleMenu(e) {
    this.openNav();
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
  }





}



