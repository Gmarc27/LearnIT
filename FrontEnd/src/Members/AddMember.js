import React, { useState } from 'react';
import axios from 'axios';

const AddMember = ({ fetchMembers }) => {
  const [formData, setFormData] = useState({
    memberfirstName: '',
    memberlastName: '',
    memberEmail: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://learnit-1-aggl.onrender.com/memberAdd', formData);
      fetchMembers();
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <div>
      <h2>Add Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="memberfirstName" placeholder="First Name" value={formData.memberfirstName} onChange={handleChange} required />
        <input type="text" name="memberlastName" placeholder="Last Name" value={formData.memberlastName} onChange={handleChange} required />
        <input type="email" name="memberEmail" placeholder="Email" value={formData.memberEmail} onChange={handleChange} required />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;
