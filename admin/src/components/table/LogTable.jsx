import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

const RecentLogs = () => {
const location = useLocation()
const pathSplit = location.pathname.split("/")
const id = pathSplit[2]

const [log, setLog] = useState([])

useEffect(() => {
  const fetchLog = async () => {
    try{
     console.log(id)
      const res = await axios.get(`http://localhost:5000/maintenance/${id}`)
      console.log("Log Data", res.data)
      setLog(res.data)
      console.log(log)
    }catch(err) {
      console.log("There was an error", err)
    }
  }
  fetchLog();
}, [id]);

  const columns = [
    { field: "id", headerName: "ID", flex:0.5},
    { field: "date_completed", headerName: "Date Completed", flex: 0.5},
    { field: "details", headerName: "Details", flex: 3},
    { field: "cost", headerName: "Cost", flex: 0.5},
  ]

  return (
  <div className="w-full">
  <DataGrid 
        className="datagrid"
        rows={log || []}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row)=>row.id}
        autoHeight
  />
  </div>
  );
};

export default RecentLogs;
