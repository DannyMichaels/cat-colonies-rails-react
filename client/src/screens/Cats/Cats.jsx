import React from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './Cats.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from '@material-ui/core/Button'

export default function Cats({allCats, loaded}) {

  if (!loaded) {
    return <> <h1>Loading</h1><CircularProgress /> </>
  }

  return (
      <div className="card-list">
        {allCats.map(cat => (
          <React.Fragment key={cat.id}>
            <Link style={{textDecoration: 'none' }}to={`/cats/${cat.id}`}>
            <Card
                name={cat.name}
                age={cat.age}
                breed={cat.breed}
              />
            </Link>
          </React.Fragment>
        ))}
      <Link to="/cats/new"><Button variant="contained" color="primary">Adopt a cat</Button></Link>
      </div>
  )
}