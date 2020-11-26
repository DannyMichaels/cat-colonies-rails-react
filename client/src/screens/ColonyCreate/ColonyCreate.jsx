import React, { useState } from 'react'

export default function ColonyCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    borough: "",
  });
  const { name, borough  } = formData;
  const { createColony } = props;

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
          createColony(formData);
        }}>
          <h3>Create a Colony</h3>
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
