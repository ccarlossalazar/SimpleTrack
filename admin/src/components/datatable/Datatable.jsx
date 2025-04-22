import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from '../../hooks/useFetch.js'
import axios from 'axios'

const Datatable = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  const [list, setList] = useState([])
  const {data, loading, error} = useFetch(`http://localhost:5000/${path}`) 

  useEffect(()=> {
    console.log(data)
    setList(data)
  }, [data])
  const handleDelete = async (id) => {
    try{ 
    await axios.delete(`http://localhost:5000/${path}/${id}`)
    setList(list.filter((item) => item.id !== id));
  }catch(error){}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row.id}
      />
    </div>
  );
};

export default Datatable;
