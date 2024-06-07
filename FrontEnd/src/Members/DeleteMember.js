import React, { useState } from 'react';
import axios from 'axios';

const DeleteMember = ({ fetchMembers }) => {
  const [formData, setFormData] = useState({
    memberfirstName: '',
    memberlastName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete('https://learnit-1-aggl.onrender.com/memberDelete', { data: formData });
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div>
      <h2>Delete Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="memberfirstName" placeholder="First Name" value={formData.memberfirstName} onChange={handleChange} required />
        <input type="text" name="memberlastName" placeholder="Last Name" value={formData.memberlastName} onChange={handleChange} required />
        <button type="submit">Delete Member</button>
      </form>
    </div>
  );
};

export default DeleteMember;
