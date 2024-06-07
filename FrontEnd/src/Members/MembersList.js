import React, { useState } from 'react';
import axios from 'axios';

const MembersList = ({ members, fetchMembers }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    memberfirstName: '',
    memberlastName: '',
    memberEmail: ''
  });

  const handleUpdateClick = (member) => {
    setSelectedMember(member);
    setFormData({
      memberfirstName: member.memberfirstName,
      memberlastName: member.memberlastName,
      memberEmail: member.memberEmail
    });
  };

  const handleDeleteClick = async (member) => {
    try {
      await axios.delete(`https://learnit-1-aggl.onrender.com/members/${member.memberEmail}`);
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://learnit-1-aggl.onrender.com/members/${formData.memberEmail}`, formData);
      fetchMembers();
      setSelectedMember(null);
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  return (
    <div>
      <h2>Members List</h2>
      <table>
        <thead>
          <tr>
            <th>Member Names</th>
            <th>Member Emails</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td>
                {member.memberfirstName} {member.memberlastName}
              </td>
              <td>{member.memberEmail}</td>
              <td>
                <button onClick={() => handleUpdateClick(member)}>Update</button>
                <button onClick={() => handleDeleteClick(member)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMember && (
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
      )}
    </div>
  );
};

export default MembersList;
