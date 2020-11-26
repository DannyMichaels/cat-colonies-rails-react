import * as React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PetsIcon from '@material-ui/icons/Pets';
import HomeIcon from '@material-ui/icons/Home'
import ExploreIcon from '@material-ui/icons/Explore';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'sticky',
    bottom: 0,
    marginTop: '20px'
  },
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
  <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
            <BottomNavigationAction label="home" icon={<HomeIcon />} component={Link} to="/"/>
      <BottomNavigationAction label="cats" icon={<PetsIcon />} component={Link} to="/cats"/>
        <BottomNavigationAction label="colonies" component={Link} to="/colonies" icon={<ExploreIcon />} />
    </BottomNavigation>
  )
}

export default Footer
