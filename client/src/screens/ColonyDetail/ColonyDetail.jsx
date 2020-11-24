import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'


export default function CatDetail(props) {
  const [colony, setColony] = useState(null);
  const { allColonies, removeColony } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allColonies.length) {
      const oneColony = allColonies.find((colony) => colony.id === Number(id));
      setColony(oneColony)
    }
  }, [allColonies, id])
  
  return (
      <div className="cat-details">
        {
          colony &&
          <div className="card">
            name: <h3>{colony.name}</h3>
          borough: <h3>{colony.borough}</h3>
            <Link to={`/colonys/${colony.id}/edit`}><button>Update</button></Link>
            <button onClick={() => removeColony(colony.id)}>Delete</button>
          </div>
        }
      </div>
  )
}
