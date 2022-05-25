import React from "react";
import { useQuery } from "react-query";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div>
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <MakeAdminRow
              key={users._id}
              index={index}
              user={user}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
