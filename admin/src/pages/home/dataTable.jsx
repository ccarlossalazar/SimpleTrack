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
      console.log(res.data)
      setData(res.data)
    }catch(err) {
      console.log("There was an error", err)
    }
  }
  fetchData();
}, []);

  const columns = [
    { field: "equipment_id", headerName: "Equipment ID", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
  ]

  return (
  <div className="w-full">
  <DataGrid 
        className="datagrid"
        rows={data || []}
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

export default DataTable;
