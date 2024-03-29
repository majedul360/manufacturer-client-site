import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const email = user?.email;
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://menufacturer-server-side-h26rnk2hy-majedul360.vercel.app/admin/${email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setAdmin(result);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};
export default useAdmin;
