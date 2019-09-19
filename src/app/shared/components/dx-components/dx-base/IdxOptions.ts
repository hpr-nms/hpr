

export class IdxOptions {
  Columns: IColumn[];
  filterPanet?: IfilterPanel;
  filterRow?: IfilterRow;
  headerFilter?: IheaderFilter;
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
    Columns=[],
    filterPanet=null,
    filterRow=null
  ) {
    this.Columns = Columns;
    this.filterPanet = filterPanet;
    this.filterRow = filterRow;
  }
}


export class IColumn {

  dataField: string = null;
  dataType?: string = null;
  caption: string = null

  constructor(
    dataField,
    dataType,
    caption,
  ) {
    this.dataField = dataField;
    this.dataType = dataType;
    this.caption = caption;
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

  applyFilter?: string;
  applyFilterText?: string;
  betweenEndText?: string;
  betweenStartText?: string;
  operationDescriptions?: {
    between?: string;
    contains?: string;
    endsWith?: string;
    equal?: string;
    greaterThan?: string;
    greaterThanOrEqual?: string;
    lessThan?: string;
    lessThanOrEqual?: string;
    notContains?: string;
    notEqual?: string;
    startsWith?: string;
  };
  resetOperationText?: string;
  showAllText?: string;
  showOperationChooser?: boolean;
  visible?: boolean;
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
