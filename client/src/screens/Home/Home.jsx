import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

function Home() {
  
  return (
    <>
      <div style={{display: 'flex', flexFlow: 'column wrap', justifyContent: 'center', textAlign: 'center', alignItems: 'center'}}>
        <div>  
          <Typography> Home Sweet Home  <FavoriteIcon style={{ color: 'red' }} /> </Typography>
        </div>
        <img
          style={{ width: '400px', height: '500px', margin: '20px auto'}}
          src="https://iconarchive.com/download/i78374/iconka/meow/cat-purr.ico"
          alt="grey cat"
          />
          </div>
    </>
  );
}

export default Home;
