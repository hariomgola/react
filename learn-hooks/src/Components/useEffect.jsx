import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v2/person")
      .then((response) => {
        console.log(response.data.data); // Logs the parsed JSON
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.firstname}</li>
      ))}
    </ul>
  );
};

export default UseEffect;
