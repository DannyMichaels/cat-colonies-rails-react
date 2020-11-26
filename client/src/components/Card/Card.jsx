import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWidth: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards({ name, age, breed }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>{name}</Typography>
        <Typography>{age}</Typography> 
        <Typography>{breed}</Typography>
      </CardContent>
    </Card>
  );
}
