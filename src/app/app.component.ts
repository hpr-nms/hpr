
import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IdxOptions } from './shared/components/dx-components/dx-base/IdxOptions';
import { MatInput } from '@angular/material/input';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

declare var _: any;
// declare var Storages: any;
declare var fakeLoader: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // providers: [MousetrapService, CustomEventsService]
})
export class AppComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  @Input() username: MatInput;
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
  name;
  isOpenKey = false;

  ////////////////
  bankModel = new AppBank();

  Options: IdxOptions;
  dataSource;

  constructor(
    private router: Router
  ) { this.defultContextmenu = true; }



hos(event){
  console.log(event);
  // this.inp.focus();
}
hhh(checkoutForm: NgForm){
  console.log(checkoutForm);
  // checkoutForm.reset();
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



  this.Options = new IdxOptions();
  this.getFormList();
}
  private getFormList() {
  this.dataSource = [
    // tslint:disable-next-line: max-line-length
    { id: 1, name: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا ' },
    // tslint:disable-next-line: max-line-length
    { id: 2, name: 'لورم ایپسوم متن ساختگی با تولید سادگیرها و متوبرای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا ' },
    // tslint:disable-next-line: max-line-length
    { id: 3, name: 'لورم ایپسوم متن ساخی متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا ' },
    { id: 4, name: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ا می طلبد تا ' }
  ]
  this.Options.Columns = [
    { caption: 'ایدی', dataField: 'id', dataType: "string" },
    { caption: 'نام بانک', dataField: 'name', dataType: "string" }
  ];
  this.Options.sorting = { allowSorting: true, sortingMode: 'multiple' }

}




getserver() {
  this.getFormList();
}

submitForm(MapParvaneForm, $event) {

}
clearform(form) {

}

}








export class AppBank {
  constructor(
    public id: number = 0,
    public name: string = null
  ) { }
}
