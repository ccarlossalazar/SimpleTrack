import Sidebar from './sidebar.jsx'
import WorkOrderTable from '../workOrderTable.jsx'
import Navbar from '../navbar/portalnavbar.jsx'



const WorkOrders = () => {
    return(
    <div className='flex min-h-screen w-full overflow-hidden'>
    <Sidebar/>
    <div className='flex flex-col flex-1'>        
    <Navbar/>
    <div className='p-6 flex-1 overflow-auto'>
    <WorkOrderTable/>
    </div>
    </div>
    </div>
    )
}

export default WorkOrders