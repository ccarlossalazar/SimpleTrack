import {DataGrid} from '@mui/x-data-grid'
import useFetch from '../hooks/useFetch.js'
import { Link } from 'react-router-dom'

const WorkOrderTable = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

    const {data, loading, error} = useFetch("/workorders")

    const columns = [
        {field: 'id', headerName: "Work Order ID", flex: 0.5},
        {field: 'equipment_id', headerName: 'Equipment ID', flex: 0.5},
        {field: 'status', headerName: 'Status', flex: 0.5},
        {field: 'description', headerName: 'Description', flex: 2},
    ]

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="h-full flex items-center gap-2 justify-center w-full">
                <Link to={`/workorders/${params.row.id}`}>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-blue-700 text-blue-700 rounded hover:bg-blue-50 transition"
                  >
                  View
                </button>
                  </Link>
            {role === "maintenance" && (
              <Link to={`/maintenance/new/${params.row.id}`}>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-green-700 text-green-700 rounded hover:bg-green-50 transition"
                  >
                  Complete
                </button>
                  </Link>
              )}
              </div>
            );
          },
        },
      ]
      
      
    if(error) {
        return <p className='text-red-600 text-center mt-4'>Failed to load work order data.</p>
    }

    return (
    <>
    <h1 className='text-center'>Work Order</h1>
        <div className='flex justify-center w-full mt-8'>
        <div className="w-full max-w-screen h-[600px] overflow-x-auto px-4">    
        <DataGrid className='bg-white rounded-lg shadow-md'
        rows = {data?.filter(order => order.status?.toLowerCase() === "in progress")}
        columns = {columns.concat(actionColumn)}
        loading = {loading}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row.id}
        checkboxSelection
        disableMultipleRowSelection
        sx={{ border: 'none' }} 
        />
        </div>
        </div>
    </>
    ) 
}

export default WorkOrderTable