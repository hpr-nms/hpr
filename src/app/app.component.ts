
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


declare var $: any;

declare var _: any;
// declare var Storages: any;
declare var fakeLoader: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

  // providers: [MousetrapService, CustomEventsService]
})
export class AppComponent implements OnInit {

  public layout = 'top-navigation-1'; // default-sidebar-1,off-canvas-1,sidebar-over-1,off-canvas-1,
  // top-navigation-1,top-navigation-2,empty-view-1
  public background = 'light'; // light,dark,indigo,blue-grey
  public navbar = 'blue-grey'; // light,dark,indigo,blue-grey
  public sidebar = 'blue-grey'; // light,dark,indigo,blue-grey
  public topNavigation = 'blue-grey'; // light,dark,indigo,blue-grey
  public logo = 'blue-grey'; // light,dark,indigo,blue-grey
  public collapsed = false; // true,false
  public controller: string;
  public view: string;
  defultContextmenu;
  public leftBoxParvande = -615;

  isOpenKey = false;

  constructor(
    private router: Router
  ) {
    const config = {
      layout: this.layout,
      background: this.background,
      navbar: this.navbar,
      sidebar: this.sidebar,
      topNavigation: this.topNavigation,
      collapsed: this.collapsed,
      logo: this.logo
    };
    this.defultContextmenu = true;
    // const storage = Storages.localStorage;
    const collapsed = config.collapsed;

    // reset localStorage on page load for demo purposes only. this can be removed in production
    // storage.removeAll();

    // if (storage.isEmpty('config') || !storage.get('config')) {
    //   //  storage.removeAll();
    //   storage.set('config', config);
    // }
    // config = storage.get('config');

    // set attributes before page is loaded. this can be removed in production
    $('body').attr('data-background', config.background);
    $('body').attr('data-navbar', config.navbar);
    $('body').attr('data-sidebar', config.sidebar);
    $('body').attr('data-top-navigation', config.topNavigation);
    $('body').attr('data-collapsed', config.collapsed);
    $('body').attr('data-logo', config.logo);
    if ($('html').hasClass('loading')) {
      const loaderTime = 2000;
      $('#fakeloader').fakeLoader({
        timeToHide: loaderTime,
        zIndex: '99999',
        spinner: 'spinner5',
        bgColor: '#1f2346'
      });
      setTimeout(function() {
        $('html').removeClass('loading');
      }, loaderTime);
    }


  }

  MoveUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  @HostListener('window:scroll')
  onScroll() {
    if (document.getElementById('myBtn')) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById('myBtn').style.display = 'block';
      } else {
        document.getElementById('myBtn').style.display = 'none';
      }
    }
  }
  ngOnInit() {

    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('oncontextmenu', 'return ' + this.defultContextmenu);


  }


}
