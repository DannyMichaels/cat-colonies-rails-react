import React from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from '@material-ui/core/Button'

export default function Colonies({ allColonies, loaded }) {
  const COLONIES = allColonies.map((colony) => (
    <React.Fragment key={colony.id}>
      <Link style={{ textDecoration: "none" }} to={`/colonies/${colony.id}`}>
        <Card name={colony.name} age={colony.borough} />
      </Link>
    </React.Fragment>
  ));

  if (!loaded) {
    return (
      <>
        <h1>Loading</h1>
        <CircularProgress />
      </>
    );
  }

  return (
    <div className="card-list">
      {COLONIES}
      <Link to="/colonies/new">
        <Button variant="contained" color="primary">Create a colony</Button>
      </Link>
    </div>
  );
}
