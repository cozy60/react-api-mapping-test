import React, { useEffect, useState } from "react";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import axios from "axios";
import Mapping from "./components/Mapping";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  // const { todos } = useTodos();
  // const [todos, setTodos] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     // console.log(result.data);
  //     setTodos(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Todos />
      <Users />
      {/* <Mapping data={todos} /> */}
    </>
  );
}
