import axios from "axios";
import { useState, useEffect } from "react";

export function useTodos() {
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
}
