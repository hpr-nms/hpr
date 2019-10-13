export class IColumnChooser {
  constructor(
    public allowSearch: boolean = true,
    public emptyPanelText: string = "'Drag a column here to hide it",
    public enabled: boolean = true,
    public height: number = 260,
    public mode: string = "dragAndDrop",
    public searchTimeout: number = 500,
    public title: string = "ستون های مخفی",
    public width: number = 250,
  ) { }
}
export class IColumnFixing {
  constructor(
    public enabled: boolean = true,
    public texts = {
      fix: 'فیکس',
      leftPosition: "چپ",
      rightPosition: "راست",
      unfix: "بدون فیکس",
    }
  ) { }
}
export class IExportExcel {
  constructor(
    public allowExportSelectedData: boolean = true,
    public enabled: boolean = true,
    public fileName: string = "Export",
    public texts = {
      exportAll: "خروجی همه",
      exportSelectedRows: "خروجی سطر های انتخابی",
      exportTo: "خروجی",
    }
  ) { }
}
export class IfilterRow {
  constructor(
    public applyFilter: string = "auto", // 'onClick' نوع اعمال فیلتر
    public applyFilterText: string = "اعمال فیلتر",
    public betweenEndText: string = " بین",
    public betweenStartText: string = " بین",
    public operationDescriptions = {
      between: " بین",
      contains: " در محدوده",
      endsWith: " پایان با",
      equal: " مساوی",
      greaterThan: "بزرگتر از ",
      greaterThanOrEqual: " بزرگتر یا مساوی",
      lessThan: " کوچکتر",
      lessThanOrEqual: "کوچکتر یا مساوی ",
      notContains: "نباشد در ",
      notEqual: " نامساوی",
      startsWith: " شروع با",
    },
    public resetOperationText: string = "ریست",
    public showAllText: string = "نمایش همه",
    public showOperationChooser: boolean = true,  // نمایش ایکون ها
    public visible: boolean = true, //   نمایش فیلتر
  ) { }
}
export class IHeaderFilter {
  constructor(
    public allowSearch: boolean = true,
    public height: number = 325,
    public searchTimeout: number = 500,
    public texts = { cancel: "انصراف", emptyValue: "خالی کردن", ok: "اعمال" },
    public visible: boolean = true,
    public width: number = 252,
  ) { }
}

/**
 * مقدار های دیفالت برای کامپوننت گرید
 */
export class DxDefault {
  constructor(
    public remoteOperations: boolean = true, // عملیات ها(سرچ و گروه بندی و ...) سمت سرور باشد
    public cellHintEnabled: boolean = true,  // نشان دادن متن کامل سلولی که متنش کوتاه شده با هاور
    public columnChooser: IColumnChooser = new IColumnChooser(),
    public columnFixing: IColumnFixing = new IColumnFixing(),
    public columnResizingMode: string = "widget",
    //  Columns[] قسمت ارایه ستون ها و تنظیمات مربوط به ستون در dxoption.column گذاشته میشود و مقدار دیفالت انجا ست میشود
    //  public  disabled:  boolean = false, //  برای فریز کردن گرید
    //  public  editing :IEditing=new IEditing(),  // بعدا اضافه شود
    public exportExcel: IExportExcel = new IExportExcel(), //  تنظیمات اکسپورت اکسل
    public filterRow: IfilterRow = new IfilterRow(),
    public filterSyncEnabled: boolean = true, // همگام سازی همه فیلتر ها با هم ( filter row, header filter, and filter builder)
    //  public focusedRowEnabled: boolean = false, // هنگام باز شدن سطر از قبل انتخاب شده باشد یا خیر
    //  public focusedRowKey: any = undefined, // اگر سطر انتخاب شده کلید سطر
    //  public  grouping:IGrouping=new IGrouping(), // بعدا اضافه شود
    public groupPanel = { allowColumnDragging: true, emptyPanelText: "خالی کردن گروه بندی", visible: true, },
    public headerFilter: IHeaderFilter = new IHeaderFilter(),
    public height: string = "60vh",
    /////////////////// fixed to here
    public  wordWrapEnabled :boolean=false,
  ) { }
}
