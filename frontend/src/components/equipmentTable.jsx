import {DataGrid} from '@mui/x-data-grid'
import useFetch from '../hooks/useFetch.js'

const EquipmentTable = () => {

    const {data, loading, error} = useFetch("/equipment")

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'name', headerName: 'Name', flex: 1},
        {field: 'location', headerName: 'Location', flex: 1},
    ]

    if(error) {
        return <p className='text-red-600 text-center mt-4'>Failed to load equipment data.</p>
    }

    return (
    <>
        <div className='w-full h-[600px] mb-20 p-5'>
        <DataGrid
        rows = {data}
        columns = {columns}
        loading = {loading}
        rowsPerPageOptions={[5,10,20]}
        pageSize={10}
        getRowId={(row) => row.id || row._id}
        checkboxSelection
        disableMultipleRowSelection
        className='bg-white' 
        />
        </div>
    </>
    ) 
}

export default EquipmentTable