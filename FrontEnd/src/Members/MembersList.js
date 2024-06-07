import React from 'react';

const MembersList = ({ members }) => {
  return (
    <div>
      <h2>Members List</h2>
      <table>
      <tr>
                <th>Member Names</th>
                <th>Member Emails</th>
            </tr>
      
        {members.map((member) => (
          <tr>
                <td key={member._id}>
                {member.memberfirstName} {member.memberlastName}
                </td>
                <td key={member._id}> {member.memberEmail}
                </td>
                </tr>
        ))}
      
      </table>
    </div>
  );
};

export default MembersList;
