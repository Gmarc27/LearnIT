import React, { useState } from 'react';
import axios from 'axios';

const UpdateMember = ({ fetchMembers }) => {
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
      await axios.put(`https://learnit-1-aggl.onrender.com/members/${formData.memberEmail}`, formData);
      fetchMembers();
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  return (
    <div>
      <h2>Update Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="memberfirstName"
          placeholder="First Name"
          value={formData.memberfirstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="memberlastName"
          placeholder="Last Name"
          value={formData.memberlastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="memberEmail"
          placeholder="Email"
          value={formData.memberEmail}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Member</button>
      </form>
    </div>
  );
};

export default UpdateMember;
