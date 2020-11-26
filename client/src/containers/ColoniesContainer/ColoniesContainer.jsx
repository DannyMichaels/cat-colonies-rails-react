import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllColonies, deleteColony, postColony, putColony, getOneColony} from '../../services/colonies';
import Colonies from '../../screens/Colonies/Colonies';
import ColonyDetail from '../../screens/ColonyDetail/ColonyDetail';
import ColonyCreate from '../../screens/ColonyCreate/ColonyCreate';
import ColonyEdit from '../../screens/ColonyEdit/ColonyEdit';

  
export default function ColoniesContainer() {
  const [allColonies, setAllColonies] = useState([]);
  const [loaded, setLoaded] = useState(false)

  const history = useHistory();

  useEffect(() => {
    fetchColonies();
  }, [])

  const fetchColonies = async () => {
    const colonies = await getAllColonies();
    setAllColonies(colonies);
    setLoaded(true);
  }

  const oneColony = async () => {
    const gotOneColony = await getOneColony();
    setAllColonies(gotOneColony);
  }

  const createColony = async (colonyData) => {
    const newColony = await postColony(colonyData);
    setAllColonies(prevState => ([
      ...prevState,
      newColony
    ]));
    history.push('/colonies');
  }
  
  const updateColony = async (id, colonyData) => {
    const updatedColony = await putColony(id, colonyData);
    setAllColonies(prevState => prevState.map(colony => {
        return colony.id === Number(id) ? updatedColony : colony
      })
    )
    history.push('/colonies');
  }

  const removeColony = async (id) => {
    await deleteColony(id);
    setAllColonies(prevState => prevState.filter(colony => colony.id !== id));
    history.push('/colonies');
  }

  return (
    <>
      <Switch>
        <Route path='/colonies/new'>
          <ColonyCreate
            createColony={createColony}
          />
        </Route>
        <Route path='/colonies/:id/edit'>
          <ColonyEdit
            updateColony={updateColony}
            allColonies={allColonies}
          />
        </Route>
        <Route path='/Colonies/:id'>
          <ColonyDetail
            getOneColony={getOneColony}
            allColonies={allColonies}
            removeColony={removeColony}
          />
        </Route>
        <Route path='/colonies'>
          <Colonies
            loaded={loaded}
            allColonies={allColonies}
          />
        </Route>
      </Switch>
    </>
  )
}
