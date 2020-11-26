import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import PetsIcon from "@material-ui/icons/Pets";
import { StickyContainer, Sticky } from 'react-sticky';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    height: '80px'
  },
  appBar: {
    height: '60px',
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  timeClass: {
    display: "flex",
    position: "absolute",
    marginLeft: "45%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    whiteSpace: "nowrap",
  },
}));

export default function Header({darkMode, setDarkMode}) {
  
  const classes = useStyles();
  let time = new Date();
  let timeWithoutSeconds = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <PetsIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Cats and Colonies
          </Typography>
          <div className={classes.timeClass}>
            <Typography>Today: {timeWithoutSeconds}</Typography>
          </div>
          <div>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </Toolbar>
        </AppBar>
    </div>
  );
}
