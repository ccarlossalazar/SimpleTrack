import {DataGrid} from '@mui/x-data-grid'
import useFetch from '../hooks/useFetch.js'
import { Link } from 'react-router-dom'

const WorkOrderTable = () => {

    const {data, loading, error} = useFetch("/workorders")

    const columns = [
        {field: 'id', headerName: 'Work Order Id', width: 90},
        {field: 'equipment_id', headerName: 'Equipment Id', width: 90},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'location', headerName: 'Location', width: 150},
        {field: 'status', headerName: 'Status', width: 150},
        {field: 'description', headerName: 'Description', width: 100},
    ]

    console.log(data)

    if(error) {
        return <p className='text-red-600 text-center mt-4'>Failed to load work order data.</p>
    }

    return (
    <>
    <h1 className='text-center'>Work Order</h1>
        <div className='flex justify-center w-full mt-8'>
        <div style={{ height: 600, width: 900 }}>    
        <DataGrid className='bg-white rounded-lg shadow-md'
        rows = {data}
        columns = {columns}
        loading = {loading}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row.id}
        sx={{ border: 'none' }} 
        />
        </div>
        </div>
    </>
    ) 
}

export default WorkOrderTable