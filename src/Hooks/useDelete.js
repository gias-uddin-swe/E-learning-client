import { useState } from "react";

const useDelete = () => {
  const [response, setResponse] = useState({});

  const DeleteFromDB = (id, route) => {
    fetch(`http://localhost:5000/${route}/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setResponse(result);
      });
  };

  return { response, DeleteFromDB };
};

export default useDelete;
