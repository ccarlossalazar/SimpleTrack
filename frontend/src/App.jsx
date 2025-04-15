import Login from './components/pages/login.jsx'
import HomePage from './components/pages/homepage.jsx'
import About from './components/pages/about.jsx'
import Events from './components/pages/events.jsx'
import Additional from './components/pages/additional.jsx'
import EmployeePortal from './components/pages/employee.jsx'
import MaintenacePortal from './components/pages/maintenance.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/additional-info" element={<Additional />} />
      <Route path="/employee-portal" element={<EmployeePortal />} />
      <Route path="/maintenance-portal" element={<MaintenacePortal />} />


      </Routes>
      </Router>
  );
}

export default App;