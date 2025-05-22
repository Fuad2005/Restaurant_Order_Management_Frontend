import React from "react";
import { useParams } from "react-router";
import TableMenu from "../../components/table/TableMenu";
import axios from "axios";
import { LOCAL_BASE_URL } from "../../utils/variables";
import { useNavigate } from "react-router";

function TableMenuPage() {
  const { id } = useParams();

  const navigate = useNavigate()
  const [tableData, setTableData] = React.useState({});


  React.useEffect(() => {
    axios.get(`${LOCAL_BASE_URL}/tables/${id}`).then((res) => {
        setTableData(res.data);
    }).catch((err) => {
      console.log(err);
      navigate('/')
    })
  }, [id, navigate]);

  return (
    <div>
      <TableMenu id={tableData.id} />
    </div>
  );
}

export default TableMenuPage;
