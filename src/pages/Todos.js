import React, { useEffect, useState } from "react";
import axios from "axios";
import Mapping from "../components/Mapping";

export default function Todos() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Mapping data={todos} />
    </>
  );
}
