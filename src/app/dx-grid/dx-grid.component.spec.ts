import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxGridComponent } from './dx-grid.component';

describe('DxGridComponent', () => {
  let component: DxGridComponent;
  let fixture: ComponentFixture<DxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
