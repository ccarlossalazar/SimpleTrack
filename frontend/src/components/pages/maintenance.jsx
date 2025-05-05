import Sidebar from "../sidebar/sidebar.jsx"
import Navbar from "../navbar/portalnavbar.jsx"

const MaintenancePortal = () => {
    return(
        <div className='flex min-h-screen w-full overflow-hidden'>
        <Sidebar/>
        <div className='flex flex-col flex-1'>        
        <Navbar/>
        <div className='p-6 flex-1 overflow-auto'>
            <h1>Maintenance Portal</h1>
        </div>
        </div>
        </div>
        )
    }
    

export default MaintenancePortal