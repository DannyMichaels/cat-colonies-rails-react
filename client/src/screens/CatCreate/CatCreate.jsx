import React, { useState } from 'react'

export default function CatCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    breed: ""
  });
  const { name, img_url, breed } = formData;
  const { createCat } = props;

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
          createCat(formData);
        }}>
          <h3>Create a Cat</h3>
          <label>Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>Image Url:
            <input
              type="text"
              name="img_url"
              value={img_url}
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
