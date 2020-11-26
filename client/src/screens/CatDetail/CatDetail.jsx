import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

export default function CatDetail(props) {
  const [cat, setCat] = useState(null);
  const { allCats, removeCat } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allCats.length) {
      const oneCat = allCats.find((cat) => cat.id === Number(id));
      setCat(oneCat);
    }
  }, [allCats, id]);

  const COLONIES = cat?.colonies?.map((colony) => <p>{colony.name}</p>);

  return (
    <div className="cat-details">
      {cat && (
        <Card className="card" style={{margin: '0 auto'}}>
         cat name: <h3>{cat.name}</h3>
          age: <h3>{cat.age}</h3>
          breed: <p>{cat.breed}</p>
          Colonies: {cat.colonies && cat.colonies.length ? COLONIES : <p>No Colonies</p>}
          <Link to={`/cats/${cat.id}/edit`}>
            <Button style={{margin: '20px'}} variant="contained" color="primary">Update</Button>
          </Link>
          <Button variant="contained" color="secondary" onClick={() => removeCat(cat.id)}>Release</Button>
        </Card>
      )}
    </div>
  );
}
