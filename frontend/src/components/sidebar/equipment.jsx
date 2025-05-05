import Sidebar from './sidebar.jsx'
import EquipTable from '../equipTable.jsx'
import Navbar from '../navbar/portalnavbar.jsx'



const Equipment = () => {
    return(
    <div className='flex min-h-screen w-full'>
    <Sidebar/>
    <div className='flex flex-col flex-1'> 
    <Navbar/>
    <div className="p-6 flex-1">
    <EquipTable/>
    </div>
    </div>
    </div>
    )
}

export default Equipment