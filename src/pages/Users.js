import React, { useEffect, useState } from "react";
import axios from "axios";
import Mapping from "../components/Mapping";

export default function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Mapping data={users} />
    </>
  );
}
