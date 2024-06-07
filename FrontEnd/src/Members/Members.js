import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MembersList from './MembersList';
import AddMember from './AddMember';

const Members = () => {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('https://learnit-1-aggl.onrender.com/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div>
      <h1>Members CRUD</h1>
      <AddMember fetchMembers={fetchMembers} />
      <MembersList members={members} fetchMembers={fetchMembers} />
    </div>
  );
};

export default Members;
