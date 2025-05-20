import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

const CompletedWorkOrders = () => {
const location = useLocation()
const pathSplit = location.pathname.split("/")
const id = pathSplit[2]

const [workorder, setWorkOrder] = useState([])

useEffect(() => {
  setWorkOrder([])
  const fetchWorkOrder = async () => {
    try{
      const res = await axios.get(`http://localhost:5000/workorders`)
      const completed = res.data.filter(
        (order) => order.status?.toLowerCase() === "completed"
      )
      setWorkOrder(completed)
    }catch(err) {
      console.log("There was an error", err)
    }
  }
  fetchWorkOrder();
}, [id]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5},
    { field: "equipment_id", headerName: "Equipment ID", flex: 0.5 },
    { field: "status", headerName: "Status", flex: 0.5 },
    { field: "description", headerName: "Description", flex: 3 },
]

  return (
  <div className="w-full">
  <DataGrid 
        className="datagrid"
        rows={workorder || []}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row)=>row.id}
        autoHeight
  />
  </div>
  );
};

export default CompletedWorkOrders;
