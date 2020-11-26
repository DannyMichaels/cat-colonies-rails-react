import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function CatDetail(props) {
  const [colony, setColony] = useState({});
  const { getOneColony, allColonies, removeColony } = props;
  const { id } = useParams();

  // useEffect(() => {
  //   if (allColonies.length) {
  //     const oneColony = allColonies.find((colony) => colony.id === Number(id));
  //     setColony(oneColony)
  //   }
  // }, [allColonies, id])

  useEffect(() => {
    const getData = async () => {
      const getColony = await getOneColony(id);
      setColony(getColony);
      console.log(colony);
    };
    getData();
  }, [id]);

  const KITTY = colony.cats?.map((cat) => <p> {cat.name}</p>);

  return (
    <div className="cat-details">
      {colony && (
        <div className="card">
          name: <h3>{colony.name}</h3>
          borough: <h3>{colony.borough}</h3>
          CATS:
          {colony.cats && colony.cats.length ? KITTY : <p>NO KITTY FOR U</p> }
          <Link to={`/colonies/${colony.id}/edit`}>
            <button>Update</button>
          </Link>
          <button onClick={() => removeColony(colony.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
