import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']

})
export class FormComponentComponent implements OnInit {



  @Input() height: string = '50vh';
  @Input() opensPanel: boolean;
  @Input() closesPanel: boolean;
  @Input() formState: 0;  //نیازی نیست در خود فرم بالای فیلد ها قرار میگیرد
  // @Output() onshowEditPanelChange = new EventEmitter<any>();
  openByToggle = false;
  divHeight = '0px';
  constructor() { }

  ngOnInit() {
    // this.isshowdiv = false;
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes['opensPanel']) { this.openPanel(); }
    if (changes['closesPanel']) { this.closePanel(); }
  }
  togglePanel() {
    if (this.divHeight === '0px') { this.divHeight = this.height; } else { this.divHeight = '0px'; }
  }
  openPanel() { this.divHeight = this.height; }
  closePanel() { this.divHeight = '0px'; }
}
