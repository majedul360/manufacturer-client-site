import React from "react";

const MakeAdminRow = ({ user, index }) => {
  const { email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{email}</th>
      <th>
        <button className="btn">Add Admin</button>
      </th>
    </tr>
  );
};

export default MakeAdminRow;
