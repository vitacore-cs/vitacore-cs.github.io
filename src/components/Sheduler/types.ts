
export type UslCategoryType = "Hазначения" | "Консультации" | "Исследования" | "Операции";

export type OneUslType = {
  tday: string;
  ttime: string;
  dt: Date;
  name: string;
  ctype: UslCategoryType;
  isAborted: boolean;
  isNotPlanned: boolean;
};

export type ShedulerPropsType = {
  usl: OneUslType[];
  dt?: Date;
};

export type RowType = {
  value: any;
  ctype: "usl" | "uslCategory";
  color?: string;
};

export type ColumnType = {
  id: string;
  label: string;
  ctype: "label" | "data";
};

export type TableDataType = {
  cols: ColumnType[];
  rows: RowType[];
};
