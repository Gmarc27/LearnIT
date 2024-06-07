import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MembersList from './MembersList';
import AddMember from './AddMember';
import UpdateMember from './UpdateMember';
import DeleteMember from './DeleteMember';

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
      <UpdateMember fetchMembers={fetchMembers} />
      <DeleteMember fetchMembers={fetchMembers} />
      <MembersList members={members} />
    </div>
  );
};

export default Members;
