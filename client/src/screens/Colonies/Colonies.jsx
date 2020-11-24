import React from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
export default function Cats({allColonies}) {

  return (
      <div className="card-list">
        {allColonies.map(colony => (
          <React.Fragment key={colony.id}>
            <Link to={`/colonies/${colony.id}`}>
            <Card
                name={colony.name}
                age={colony.borough}
              />
            </Link>
          </React.Fragment>
        ))}
      <Link to="/colonies/new"><button>Create a colony</button></Link>
      </div>
  )
}