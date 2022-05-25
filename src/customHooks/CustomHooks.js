const { useState, useEffect } = require("react");

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.accessToken) {
            localStorage.setItem("accessToken", result?.accessToken);
          }
        });
    }
  }, [user]);

  return { token };
};

export default useToken;
