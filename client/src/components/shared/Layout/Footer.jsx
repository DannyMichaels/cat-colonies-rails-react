import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PetsIcon from '@material-ui/icons/Pets';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    bottom: 0,
    display: 'flex',
    position: 'absolute',
  },
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <BottomNavigation
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
  className={classes.root}
    >
   <BottomNavigationAction label="Cats" value="cats" icon={<PetsIcon />} />
  <BottomNavigationAction label="Colonies" value="colonies" icon={<ExploreIcon />} />
</BottomNavigation>
  )
}

export default Footer
