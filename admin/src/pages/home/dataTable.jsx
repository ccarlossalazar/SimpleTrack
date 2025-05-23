import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from 'axios'

const DataTable = () => {

const [data, setData] = useState([])

useEffect(() => {
  setData([])
  const fetchData = async () => {
    try{
      const res = await axios.get(`http://localhost:5000/workorders`)
      const completed = res.data.filter(
        (order) => order.status?.toLowerCase() === "in progress"
      );
      setData(completed);
    }catch(err) {
      console.log("There was an error", err)
    }
  }
  fetchData();
}, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "equipment_id", headerName: "Equipment ID", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "createdAt", headerName: "Created", flex: 1 },
    { field: "description", headerName: "description", flex: 4 },
  ]

  return (
  <div className="w-full">
  <DataGrid 
        className="w-full"
        rows={data || []}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        getRowId={(row)=>row.id}
        autoHeight
  />
  </div>
  );
};

export default DataTable;
