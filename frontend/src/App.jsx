import Login from './components/pages/login.jsx'
import HomePage from './components/pages/home/homepage.jsx'
import About from './components/pages/about.jsx'
import Events from './components/pages/events.jsx'
import Additional from './components/pages/additional.jsx'
import EmployeePortal from './components/pages/employee.jsx'
import MaintenacePortal from './components/pages/maintenance.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Equipment from './components/sidebar/equipment.jsx'
import WorkOrder from './components/pages/workOrderForm.jsx'
import WorkOrders from './components/sidebar/workOrders.jsx'
import Logs from './components/sidebar/logs.jsx'
import { AuthContext } from './context/authContext.jsx'
import { useContext } from 'react'
import SingleWorkOrder from './components/pages/singleWorkOrder.jsx'
import SingleEquipment from './components/pages/singleEquipment.jsx'
import SingleLog from './components/pages/singleLog.jsx'
import Notifications from './components/pages/notifications.jsx'
import NewLog from './components/pages/newLog.jsx'

function App() {

  const ProtectedRoute = ({ children, allowRoles }) => {
    const {user} = useContext(AuthContext)

    if(!user) {
      return <Navigate to="/login" />
    }

    if (allowRoles && !allowRoles.includes(user.role)) {
      return <Navigate to='/' />
    }  

    return children
  }

  return (
      <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/additional-info" element={<Additional />} />
      <Route path="/employee-portal" element={<ProtectedRoute allowRoles={['employee']}><EmployeePortal /></ProtectedRoute>} />
      <Route path='/work-order' element={<WorkOrder/>}/>
      <Route path="/maintenance-portal" element={<ProtectedRoute allowRoles={['maintenance']}><MaintenacePortal/></ProtectedRoute>} />

    {/*Routes for Sidebar component*/}
      <Route path="/workorders" element={<WorkOrders />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/maintenance" element={<Logs />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/workorders/:id" element={<SingleWorkOrder />} />
      <Route path="/maintenance/new/:id" element={<NewLog />} />
      <Route path="/equipment/:id" element={<SingleEquipment />} />
      <Route path="/maintenance/:id" element={<SingleLog />} />


      </Routes>
      </Router>
  );
}

export default App;