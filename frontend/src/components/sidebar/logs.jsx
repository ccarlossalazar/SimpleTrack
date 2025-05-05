import Sidebar from './sidebar.jsx'
import LogTable from '../logsTable.jsx'
import Navbar from '../navbar/portalnavbar.jsx'



const Logs = () => {
    return(
    <div className='flex min-h-screen w-full'>
    <Sidebar/>
    <div className='flex flex-col flex-1'> 
    <Navbar/>
    <div className="p-6 flex-1">
    <LogTable/>
    </div>
    </div>
    </div>
    )
}

export default Logs