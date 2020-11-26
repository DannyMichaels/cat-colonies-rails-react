import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    width: '200px',
    margin: '20px auto'
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold'
  }
});


const Form = styled.form`
display: flex;
flex-direction: column;

button{
  margin-top: 20px;
}
`

export default function CatCreate(props) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: ""
  });
  const { name, age, breed } = formData;
  const { createCat } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Card className={classes.card}>
        <CardContent>
      <Form onSubmit={(e) => {
          e.preventDefault()
          createCat(formData);
        }}>
          <Typography className={classes.title}>Create a Cat</Typography>
          <TextField
            required
            label="Name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <TextField
              required
            label="Age"
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
            />
          <TextField
            required
              label="breed"
              type="text"
              name="breed"
              value={breed}
              onChange={handleChange}
            />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Form>
        </CardContent>
      </Card>
  )
}
