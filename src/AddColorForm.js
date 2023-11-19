import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({name: "", hex:"#ffffff"});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({[formData.name]: formData.hex});
    navigate('/colors');
  };

  const {name, hex} = formData;

  return (
    <div>
      <h2>Add A Color</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Color Name:</label>
        <input
          id='name'
          placeholder='Enter a color name here'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <label htmlFor='hex'>Color:</label>
        <input
          id='hex'
          type='color'
          name='hex'
          value={hex}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddColorForm;

