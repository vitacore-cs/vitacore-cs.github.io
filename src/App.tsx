import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Sheduler from "./components/Sheduler/Sheduler";
import { genUsl, oneUsl } from "./mock/mockData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      width: '100%',
      height: '100%',
    },
    paper: {
      padding: theme.spacing(2),
    }
  })
);

function App() {
  const classes = useStyles();
  const [usl, setUsl] = React.useState<oneUsl[]>(genUsl(100));

   React.useEffect(() => {
    //  console.log("Usl: ", usl);
  }, [usl]);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <h3>Таблица назначений</h3>
        <Sheduler usl={usl} />
      </Paper>
    </div>
  );
}

export default App;
