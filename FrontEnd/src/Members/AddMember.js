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
    <div className='member-container'>
      <h2>Add Member</h2>
      <div className='member-add'>
      <form onSubmit={handleSubmit} className='input-container'>
        <div className='member-center'>
        <input className="member-input" type="text" name="memberfirstName" placeholder="First Name" value={formData.memberfirstName} onChange={handleChange} required />
        <input className="member-input" type="text" name="memberlastName" placeholder="Last Name" value={formData.memberlastName} onChange={handleChange} required />
        <input className="member-input" type="email" name="memberEmail" placeholder="Email" value={formData.memberEmail} onChange={handleChange} required />
        </div>
        <button className="member-button" type="submit">Add Member</button>
      </form>
      </div>
    </div>
  );
};

export default AddMember;
