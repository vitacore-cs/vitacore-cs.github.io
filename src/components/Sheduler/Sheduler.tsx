import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { oneUsl } from "./mockData";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

type ShedulerPropsType = {
  usl: oneUsl[];
  dt?: Date;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 540,
  },
  stickyCell: {
    position: "sticky",
    background: "#fff",
    left: 0,
    zIndex: 10,
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
  },
  stickyColumn: {
    position: "sticky",
    background: "rgba(224, 224, 224, 1)",
    left: 0,
    zIndex: 11,
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
  },
  sheduledIcon: {
    color: "white",
    backgroundColor: "#c4c4c4",
    padding: "4px 8px",
    marginLeft: "2px",
    borderRadius: "4px",
    fontSize: 14,
  },
  cellColumn: {
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
  },
  todayColumn: {
    border: "1px solid rgba(224, 224, 224, 1)",
    borderTop: "5px solid #1a75ff",
  },
  cell: {
    borderRight: "1px solid rgba(224, 224, 224, 1)",
  },
  nowrap: {
    whiteSpace: "nowrap",
  },
});

type RowType = {
  value: any;
  ctype: "usl" | "uslCategory";
  rowname: string;
};

type ColumnType = {
  id: string;
  label: string;
  ctype: "label" | "data";
  minWidth?: number;
  align?: "right";
};

type tableDataType = {
  cols: ColumnType[];
  rows: RowType[];
};

type RenderDayProps = {
  usls: oneUsl[];
  dt: Date;
};

type RenderUslProps = {
  usl: oneUsl;
  dt: Date;
};

export default function Sheduler(props: ShedulerPropsType) {
  const classes = useStyles();
  const { usl } = props;
  const [dt] = React.useState(props.dt ? props.dt : new Date());
  const [table, setTable] = React.useState<tableDataType>({
    cols: [],
    rows: [],
  });

  const RenderUsl = (props: RenderUslProps) => {
    const { usl, dt } = props;
    if (usl.isAborted) {
      // отмененное
      return (
        <BlockIcon
          style={{ backgroundColor: "#ff704d" }}
          className={classes.sheduledIcon}
        />
      );
    }
    if (!usl.isAborted && usl.dt < dt) {
      // сделано
      return (
        <CheckIcon
          style={{ backgroundColor: "rgb(54, 187, 106)" }}
          className={classes.sheduledIcon}
        />
      );
    }
    if (!usl.isAborted && usl.dt > dt) {
      // планируется
      return <AccessTimeIcon className={classes.sheduledIcon} />;
    }
    return <>1</>;
  };

  const RenderDay = (props: RenderDayProps) => {
    const { usls, dt } = props;
    return (
      <div className={classes.nowrap}>
        {usls
          .sort((a, b) => {
            return a.dt > b.dt ? 1 : -1;
          })
          .map((u, n) => {
            const key = `rd-${u.dt}-${n}`;
            return <RenderUsl usl={u} dt={dt} key={key} />;
          })}
      </div>
    );
  };

  const renderCell = (col: ColumnType, row: RowType) => {
    // первая колонка
    if (col.ctype === "label") {
      if (row.ctype === "uslCategory") {
        return <strong>{row.value}</strong>;
      }
      return row.value;
    }
    // Категория услуг - пустое значение
    if (col.ctype === "data" && row.ctype === "uslCategory") {
      return "";
    }
    // Один день назначений
    if (col.ctype === "data" && row.ctype === "usl") {
      return (
        <RenderDay
          usls={usl
            .filter((i) => i.tday === col.label)
            .filter((i) => i.name === row.value)}
          dt={dt}
        />
      );
    }

    return <>Значение</>;
  };

  React.useEffect(() => {
    // собираем строки
    const uslCategory = Array.from(new Set(usl.map((i) => i.ctype))).sort();
    const newRows: RowType[] = [];
    uslCategory.forEach((v) => {
      newRows.push({ value: v, ctype: "uslCategory", rowname: "names" });
      const names = Array.from(
        new Set(usl.filter((i) => i.ctype === v).map((i) => i.name))
      ).sort();
      names.forEach((n) => {
        newRows.push({ value: n, ctype: "usl", rowname: "names" });
      });
    });
    // собираем колонки
    const newCols: ColumnType[] = [];
    newCols.push({ id: "Название", label: "", ctype: "label" });
    for (let i = -3; i < 4; i++) {
      const d = new Date(dt.getTime());
      d.setDate(d.getDate() + i);
      const day = d.toISOString().substring(0, 10);
      newCols.push({ id: day, label: day, ctype: "data" });
    }
    setTable({ rows: newRows, cols: newCols });
  }, [usl, dt]);

  React.useEffect(() => {
    console.log("Table: ", table);
    console.log("Usl:", usl);
  }, [table]);

  const RenderTh = (col: ColumnType) => {
    if (col.ctype === "data") {
      const d = new Date(col.label);
      return (
        <span>
          {`${d.getDate()} ${months[d.getMonth()]}`}
          <br />
          {days[d.getDay()]}
        </span>
      );
    }
    return col.label;
  };

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            {table.cols.map((column, index) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                className={
                  column.label === dt.toISOString().substring(0, 10)
                    ? classes.todayColumn
                    : index === 0
                    ? classes.stickyColumn
                    : classes.cellColumn
                }
              >
                {RenderTh(column)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.rows.map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.value}>
                {table.cols.map((column, indx) => {
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      className={indx === 0 ? classes.stickyCell : classes.cell}
                    >
                      {renderCell(column, row)}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
