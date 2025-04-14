import {DataGrid} from '@mui/x-data-grid'
import useFetch from '../hooks/useFetch.js'

const EquipmentTable = () => {

    const {data, loading, error} = useFetch("/equipment")

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'location', headerName: 'Location', width: 150},
        {field: 'serial_number', headerName: 'Serial Number', width: 150},
        {field: 'equipment_condition', headerName: 'Condition', width: 150},
    ]

    if(error) {
        return <p className='text-red-600 text-center mt-4'>Failed to load equipment data.</p>
    }

    return (
    <>
        <div className='w-full h-[600px] mb-20 p-5'>
        <h2 className='text-center text-3xl mb-6'>Equipment</h2>
        <DataGrid
        rows = {data}
        columns = {columns}
        loading = {loading}
        rowsPerPageOptions={[5,10,20]}
        pageSize={10}
        getRowId={(row) => row.id || row._id} 
        />
        </div>
    </>
    ) 
}

export default EquipmentTable