import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: [`top-nav.component.css`]
})
export class TopNavComponent implements OnInit {
  @ViewChild('menuContainer',{static:false}) menuContainer;
  tabSelected = 0;
  tabSubSelected = 0;

  toggleMenu = false;
  constructor(  ) {}

  ngOnInit() {}

  toggleFullscreen(): void {
    const body = $('body');
    const value = body.attr('data-fullscreen') === 'true' ? true : false;
    body.attr('data-fullscreen', !value);
    $(document).fullScreen(!value);
  }
  clearLocal() {
    localStorage.clear();

  }

  // منوی موبایل
  openMenu() {
    this.menuContainer.nativeElement.classList.toggle('open');
  }

  // باز شدن زیرمنو
  showSubMenu(index) {
    // this.toggle = !this.toggle;
    // console.log('clicked');
    this.tabSelected = index;
    document.getElementById('sub' + index).classList.toggle('open');
  }
  // باز شدن subsub menu
  showSubSubMenu(index) {
    this.tabSubSelected = index;
    document.getElementById('sub' + index).classList.toggle('open');
  }

  closeMenu() {
    this.menuContainer.nativeElement.classList.remove('open');
  }

}
