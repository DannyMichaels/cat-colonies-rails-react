import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards({ name, age, breed }) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title}>{name}</Typography>
        <h2>{age}</h2>
        <p>{breed}</p>
      </CardContent>
    </Card>
  );
}
