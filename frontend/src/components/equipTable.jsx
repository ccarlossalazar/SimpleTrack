import {DataGrid} from '@mui/x-data-grid'
import useFetch from '../hooks/useFetch.js'
import { Link } from 'react-router-dom'

const EquipTable = () => {

    const {data, loading, error} = useFetch("/equipment")

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'name', headerName: 'Name', flex: 1},
        {field: 'location', headerName: 'Location', flex: 1},
        {field: 'serial_number', headerName: 'Serial Number', flex: 1},
        {field: 'equipment_condition', headerName: 'Condition', flex: 1},
    ]

    if(error) {
        return <p className='text-red-600 text-center mt-4'>Failed to load equipment data.</p>
    }

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 100,
          renderCell: (params) => {
            return (
              <div className="h-full flex items-center gap-2 justify-center w-full">
              <Link to={`/equipment/${params.row.id}`}>
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
      ];
      

    return (
    <>
  <h1 className='text-center'>Equipment</h1>
<div className="flex justify-center w-full mt-8">
  <div className="w-full max-w-screen h-[600px] overflow-x-auto px-4">
    <DataGrid
      className="bg-white rounded-lg shadow-md"
      rows={data}
      columns={columns.concat(actionColumn)}
      loading={loading}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      getRowId={(row) => row.id}
      sx={{ border: 'none' }}
    />
  </div>
</div>

    </>
    ) 
}

export default EquipTable