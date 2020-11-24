import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllCats, deleteCat, postCat, putCat } from '../../services/cats';
import Cats from '../../screens/Cats/Cats';
import CatDetail from '../../screens/CatDetail/CatDetail';
import CatCreate from '../../screens/CatCreate/CatCreate';
import CatEdit from '../../screens/CatEdit/CatEdit';

export default function CatsContainer() {
  const [allCats, setAllCats] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchCats();
  }, [])

  const fetchCats = async () => {
    const cats = await getAllCats();
    setAllCats(cats);
  }

  const createCat = async (catData) => {
    const newCat = await postCat(catData);
    setAllCats(prevState => ([
      ...prevState,
      newCat
    ]));
    history.push('/cats');
  }
  const updateCat = async (id, catData) => {
    const updatedCat = await putCat(id, catData);
    setAllCats(prevState => prevState.map(cat => {
        return cat.id === Number(id) ? updatedCat : cat
      })
    )
    history.push('/cats');
  }

  const removeCat = async (id) => {
    await deleteCat(id);
    setAllCats(prevState => prevState.filter(cat => cat.id !== id));
    history.push('/cats');
  }

  return (
    <>
      <Switch>
        <Route path='/cats/new'>
          <CatCreate
            createCat={createCat}
          />
        </Route>
        <Route path='/cats/:id/edit'>
          <CatEdit
            updateCat={updateCat}
            allCats={allCats}
          />
        </Route>
        <Route path='/cats/:id'>
          <CatDetail
            allCats={allCats}
            removeCat={removeCat}
          />
        </Route>
        <Route path='/cats'>
          <Cats
            allCats={allCats}
          />
        </Route>
      </Switch>
    </>
  )
}
