import React, { useState, useEffect } from "react";
import axios from "axios";

const Business = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/156")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

export default Business;
