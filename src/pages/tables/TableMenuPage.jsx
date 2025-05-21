import React from "react";
import { useParams } from "react-router";
import TableMenu from "../../components/table/TableMenu";

function TableMenuPage() {
  const { id } = useParams();

  return (
    <div>
      <TableMenu id={id} />
    </div>
  );
}

export default TableMenuPage;
