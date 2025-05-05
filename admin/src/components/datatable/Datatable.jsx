import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from '../../hooks/useFetch.js'
import axios from 'axios'
import ConfirmDelete from "./confirmation.jsx";

const Datatable = ({columns}) => {
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  const [list, setList] = useState([])
  const {data, loading, error} = useFetch(`http://localhost:5000/${path}`) 
  const [openMessage, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  useEffect(()=> {
    console.log(data)
    setList(data)
  }, [data])
  
  const handleDelete = async () => {
    try{ 
    await axios.delete(`http://localhost:5000/${path}/${current}`)
    setList(list.filter((item) => item.id !== current));
  }catch(error){}
  setOpen(false)
  setCurrent(null)
  }

  const confirmDelete = async (id) => {
    setCurrent(id)
    setOpen(true)
  }

  const cancelDelete = async () => {
    setOpen(false)
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton hover:bg-blue-200">View</div>
            </Link>
            <div
              className="deleteButton hover:bg-red-200"
              onClick={() => confirmDelete(params.row.id)}
            >
              Delete
            </div>
           {path === "requests" && <Link to={`/requests/new/${params.row.id}`}><div className="acceptButton hover:bg-green-200">Accept</div></Link>}
          </div>
        );
      },
    },
  ];

  
  return (
    <div className="datatable">
      <div className="datatableTitle uppercase">
        {path}
        <Link to={`/${path}/new`} className="link hover:bg-green-100">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row.id}
      />

      <ConfirmDelete
        open={openMessage}
        message="Are you sure?"
        onConfirm={handleDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default Datatable;
