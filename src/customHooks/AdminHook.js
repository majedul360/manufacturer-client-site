import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const email = user?.email;
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => setAdmin(result));
    }
  }, [user]);
  return [admin];
};
export default useAdmin;
