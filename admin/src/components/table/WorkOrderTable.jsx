import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

const RecentWorkOrders = () => {
const location = useLocation()
const pathSplit = location.pathname.split("/")
const id = pathSplit[2]

const [workorder, setWorkOrder] = useState([])

useEffect(() => {
  setWorkOrder([])
  const fetchWorkOrder = async () => {
    try{
      const res = await axios.get(`http://localhost:5000/workorders/equipment/${id}`)
      console.log(res.data)
      setWorkOrder(res.data)
    }catch(err) {
      console.log("There was an error", err)
    }
  }
  fetchWorkOrder();
}, [id]);

  const columns = [
    { field: "equipment_id", headerName: "Equipment ID", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
  ]

  return (
  <div className="w-full">
  <DataGrid 
        className="datagrid"
        rows={workorder || []}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row.id}
      //  slots={{
        //  noRowsOverlay: CustomNoRowsOverlay,
        //}}
        autoHeight
  />
  </div>
  );
};

export default RecentWorkOrders;
