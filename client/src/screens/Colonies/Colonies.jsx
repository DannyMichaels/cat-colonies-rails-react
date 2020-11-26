import React from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Colonies({ allColonies, loaded }) {
  const COLONIES = allColonies.map((colony) => (
    <React.Fragment key={colony.id}>
      <Link to={`/colonies/${colony.id}`}>
        <Card name={colony.name} age={colony.borough} />
      </Link>
    </React.Fragment>
  ));

  if (!loaded) {
    return <> <h1>Loading</h1><CircularProgress /> </>
  }

  return (
    <div className="card-list">
      {COLONIES}
      <Link to="/colonies/new">
        <button>Create a colony</button>
      </Link>
    </div>
  );
}
