import React from "react";
import { useParams } from "react-router";

function TableMenu() {
  const { id } = useParams();

  return (
    <div>
      <h1>Table ID: {id}</h1>
    </div>
  );
}

export default TableMenu;
