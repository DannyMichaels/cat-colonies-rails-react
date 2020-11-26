import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ColonyEdit({ updateColony, allColonies }) {
  const [formData, setFormData] = useState({
    name: "",
    borough: "",
  });
  const { name, borough } = formData;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const oneColony = allColonies.find(colony => {
        return colony.id === Number(id);
      })
      const { name, borough } = oneColony;
      setFormData({ name, borough });
    }
    if (allColonies.length) {
      prefillFormData()
    }
  }, [allColonies, id])


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
          updateColony(id, formData);
        }}>
          <h3>Update Colony</h3>
          <label>Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label>Borough:
            <input
              type="text"
              name="borough"
              value={borough}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
  )
}
