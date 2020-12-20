import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Sheduler from "./components/Sheduler/Sheduler";
import { genUsl } from "./components/Sheduler/mockData";
import { OneUslType } from "./components/Sheduler/types";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      width: "100%",
      height: "100%",
    },
    paper: {
      padding: theme.spacing(2),
    },
  })
);

function App() {
  const classes = useStyles();
  const [num, setNum] = React.useState(100);
  const [usl, setUsl] = React.useState<OneUslType[]>(genUsl(num));

  React.useEffect(() => {
    console.log("Usl: ", usl);
  }, [usl]);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <h3>Таблица назначений</h3>
        <input
          type="range"
          id="vol"
          name="vol"
          min="20"
          max="200"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value))}
        ></input>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setUsl(genUsl(num))}
        >
          Сгенерировать ({num})
        </Button>
        <div style={{ paddingTop: 16 }}>
          <Sheduler usl={usl} />
        </div>
      </Paper>
    </div>
  );
}

export default App;
