import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CatEdit({ updateCat, allCats }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: 0,
  });
  const { name, breed, age } = formData;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const oneCat = allCats.find(cat => {
        return cat.id === Number(id);
      })
      const { name, age, breed } = oneCat;
      setFormData({ name, age, breed });
    }
    if (allCats.length) {
      prefillFormData()
    }
  }, [allCats, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          updateCat(id, formData);
        }}>
          <h3>Update Cat</h3>
          <label>Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>Age
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
            />
          </label>
          <label>Breed:
            <input
              type="text"
              name="breed"
              value={breed}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
  )
}
