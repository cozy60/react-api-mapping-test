import React from "react";
import List from "./List";

export default function Mapping({ data }) {
  console.log(data);
  return (
    <select>
      {data &&
        data.map((item) => {
          return <List key={item.id} num={item.id} />;
        })}
    </select>
  );
}
