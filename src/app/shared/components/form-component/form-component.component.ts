import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']

})
export class FormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  resize() {
    var ss = document.getElementById('nms');
    console.log(ss);
    ss.style.display = 'block';
    if (ss.style.display === "none") {
      ss.style.display = 'block';
      // ss.classList.add();

    } else if(ss.style.display === 'block'){
      ss.style.display = 'none';
    }
  }
}
