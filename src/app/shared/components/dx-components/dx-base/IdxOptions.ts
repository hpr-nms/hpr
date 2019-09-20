

export class IdxOptions {
  Columns: IColumn[];
  sorting?: {
    allowSorting?: boolean;
    sortingMode: 'multiple' | 'single';
  };
  scrolling: {
    columnRenderingMode?: string;
    mode?: string;
    preloadEnabled?: boolean;
    rowRenderingMode?: string;
    scrollByContent?: boolean;
    scrollByThumb?: boolean;
    showScrollbar?: string;
    useNative?: boolean;
  };
  filterPanet?: IfilterPanel;
  filterRow?: IfilterRow;
  headerFilter?: IheaderFilter;
  colunmWordWrap?: true | false;
  columnFixing: {
    enabled?: boolean;
    texts?: {
      fix?: string;
      leftPosition?: string;
      rightPosition?: string;
      unfix?: string;
    };
  };

  constructor(
    Columns = [],
    filterPanet = null,
    filterRow = new IfilterRow()
  ) {
    this.Columns = Columns;
    this.filterPanet = filterPanet;
    this.filterRow = filterRow;
    this.sorting = {
      allowSorting: true,
      sortingMode: 'multiple'
    };
    this.colunmWordWrap = true;
  }
}


export class IColumn {

  dataField: string = null;
  dataType?: string = null;
  caption: string = null
  columnAutoWidth?: boolean;
  width?: number;
  constructor(
    dataField,
    dataType,
    caption,
    width = null,
    columnAutoWidth = true
  ) {
    this.dataField = dataField;
    this.dataType = dataType;
    this.caption = caption;
    this.columnAutoWidth = columnAutoWidth;
  }
}

export class IfilterPanel {
  customizeText?: Function;
  filterEnabled?: boolean;
  texts?: {
    clearFilter?: string;
    createFilter?: string;
    filterEnabledHint?: string;
  };
  visible?: boolean;

}
export class IfilterRow {

  applyFilter?: string = "اعمال فیلتر ";
  applyFilterText?: string = "اعمال ";
  betweenEndText?: string = " بین";
  betweenStartText?: string = " بین";
  operationDescriptions?: {
    between?: " بین";
    contains?: " در محدوده";
    endsWith?: " پایان با";
    equal?: " مساوی";
    greaterThan?: "بزرگتر از ";
    greaterThanOrEqual?: " بزرگتر یا مساوی";
    lessThan?: " کوچکتر";
    lessThanOrEqual?: "کوچکتر یا مساوی ";
    notContains?: "نباشد در ";
    notEqual?: " نامساوی";
    startsWith?: " شروع با";
  };
  resetOperationText?: string = "ریست";
  showAllText?: string = "نمایش همه";
  showOperationChooser?: boolean = true;
  visible?: boolean = true;
}

// تنظیمات فیلتر برای هدر
export class IheaderFilter {
  allowSearch?: boolean;
  height?: number;
  searchTimeout?: number;
  texts?: {
    cancel?: string;
    emptyValue?: string;
    ok?: string;
  };
  visible?: boolean;
  width?: number;
}



//  selectionFilterChange: EventEmitter<any>;
