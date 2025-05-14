import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from '../../hooks/useFetch.js'
import axios from 'axios'

const displayFields = {
  users: ['id', 'firstname','lastname', 'email', 'role'],
  equipment: ['id', 'name', 'location', 'equipment_condition'],
  workorders: ['id', 'equipment_id', 'status', 'cost', 'location'],
  requests: ['firstname', 'lastname', 'email', 'name', 'location', 'description'],
  maintenance: ['id', 'equipment_id', 'work_order_id','date_completed', 'details'],
}

const fieldLabels = {
  id: "ID",
  firstname: "First Name",
  lastname: "Last Name",
  equipment_condition: "Condition",
  cost: "Cost",
  email: "Email",
  role: "Role",
  location: "Location",
  status: "Status",
  equipment_id: "Equipment",
  description: "Description",
  details: "Details",
  date_completed: "Date Completed"

};


const Datatable = ({columns}) => {
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  const [list, setList] = useState([])
  const {data, loading, error} = useFetch(`http://localhost:5000/${path}`) 
  const [openMessage, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)
  const [deleteData, setDeleteData] = useState({}) 


  useEffect(()=> {
    console.log(data)
    setList(data)
  }, [data])

  useEffect(() => {
    setOpen(false);
    setCurrent(null);
    setDeleteData({});
  }, [path])
  
  const handleDelete = async () => {
    try{ 
    await axios.delete(`http://localhost:5000/${path}/${current}`)
    setList(list.filter((item) => item.id !== current));
  }catch(error){}
  setOpen(false)
  setCurrent(null)
  }

  const confirmDelete = async (id) => {
    try {

      const endpoint = path === "maintenance"
      ? `http://localhost:5000/${path}/get/${id}`
      : `http://localhost:5000/${path}/${id}`

      const res = await axios.get(endpoint)    
      setCurrent(id)
      setOpen(true)
      setDeleteData(res.data)
    } catch(err) {
      console.error("Failed to fetch:", err)
    }
  }

  const cancelDelete = async () => {
    setOpen(false)
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton hover:bg-blue-200">View</div>
            </Link>
            {path === "requests" && <Link to={`/requests/new/${params.row.id}`}><div className="acceptButton hover:bg-green-200">Accept</div></Link>}
            {path === "workorders" && <Link to={`/maintenance/new/${params.row.id}`}><div className="acceptButton hover:bg-green-200">Complete</div></Link>}
            <div
              className="deleteButton hover:bg-red-200"
              onClick={() => confirmDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  
  return (
    <div className="datatable relative">
      <div className="datatableTitle uppercase">
        {path}
        {path !== "requests" && path !== "maintenance" &&
        <Link to={`/${path}/new`} className="link hover:bg-green-100">
          Add New
        </Link>
        }
      </div>
      <DataGrid
        className="datagrid px-3"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableMultipleRowSelection
        getRowId={(row)=>row.id}
      />

      {openMessage && (
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-lg h-1/2">
            <h1 className="text-black text-2xl p-2 font-semibold">
              Are you sure you want to delete this?
            </h1>

            <div className="mb-4 bg-gray-300 shadow-xl p-4 rounded-md">
              {displayFields[path]?.map((field) => (
                <p key={field} className="text-sm text-black">
                  <strong>{fieldLabels[field] || field}:</strong>{" "}
                  {String(deleteData[field] || "N/A")}
                </p>
              ))}
                  </div>

      <div className='flex gap-4 justify-end pt-10'>
        <button onClick={handleDelete} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
        Confirm
        </button>
        <button onClick={cancelDelete} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        Cancel
      </button>
      </div>
      </div>
      </div>
    )}
    </div>
  );
};

export default Datatable;
