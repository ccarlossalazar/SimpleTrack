import {DataGrid} from '@mui/x-data-grid'
import useFetch from '../hooks/useFetch.js'

const LogTable = () => {

    const {data, loading, error} = useFetch("/maintenance")

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'location', headerName: 'Location', width: 150},
        {field: 'serial_number', headerName: 'Serial Number', width: 150},
        {field: 'equipment_condition', headerName: 'Condition', width: 100},
    ]

    if(error) {
        return <p className='text-red-600 text-center mt-4'>Failed to load equipment data.</p>
    }
    return (
    <>
    <h1 className='text-center'>Maintenance</h1>
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

export default LogTable