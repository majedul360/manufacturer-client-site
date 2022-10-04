import { useEffect, useState } from "react";

const useUser = (user) => {
  const email = user?.email;
  const [simpleUser, setSimpleUser] = useState(false);
  const [simpleUserLoading, setSimpleUserLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://menufacturer-server-side-h26rnk2hy-majedul360.vercel.app/simpleUser/${email}`,
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
          setSimpleUser(result);
          setSimpleUserLoading(false);
        });
    }
  }, [user]);
  return [simpleUser, simpleUserLoading];
};
export default useUser;
