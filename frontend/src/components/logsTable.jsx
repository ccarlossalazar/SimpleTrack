import {DataGrid} from '@mui/x-data-grid'
import useFetch from '../hooks/useFetch.js'
import { Link } from 'react-router-dom'

const LogTable = () => {

    const {data, loading, error} = useFetch("/maintenance")

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'work_order_id', headerName: 'Work Order ID', flex: 1},
        {field: 'equipment_id', headerName: 'Equipment ID', flex: 1},
        {field: 'date_completed', headerName: 'Completed:', flex: 1},
        {field: 'details', headerName: 'Details:', flex: 1},
    ]

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="h-full flex items-center gap-2 justify-center w-full">
                <Link to={`/maintenance/${params.row.id}`}>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-blue-700 text-blue-700 rounded hover:bg-blue-50 transition"
                  >
                  View
                </button>
                  </Link>
                
              </div>
            );
          },
        },
      ]

    if(error) {
        return <p className='text-red-600 text-center mt-4'>Failed to load equipment data.</p>
    }
    return (
    <>
    <h1 className='text-center'>Maintenance</h1>
        <div className='flex justify-center w-full mt-8'>
        <div className="w-full max-w-screen h-[600px] overflow-x-auto px-4">    
        <DataGrid className='bg-white rounded-lg shadow-md'
        rows = {data}
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

export default LogTable