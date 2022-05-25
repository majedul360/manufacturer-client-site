import React from "react";

const MakeAdminRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{email}</th>
      <th>
        {role === "admin" ? (
          <span className="text-accent">Admin done</span>
        ) : (
          <button className="btn" onClick={makeAdmin}>
            Add Admin
          </button>
        )}
      </th>
    </tr>
  );
};

export default MakeAdminRow;
