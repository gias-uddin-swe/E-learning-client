import React, { useState } from "react";

const useUpdate = () => {
  const [response, setResponse] = useState({});

  const handleUpdate = (id, route, data) => {
    console.log(id, route, data);

    const url = `http://localhost:5000/${route}/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((result) => setResponse(result));
  };
  return { response, handleUpdate };
};

export default useUpdate;
