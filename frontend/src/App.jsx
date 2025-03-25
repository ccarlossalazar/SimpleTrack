import Navbar from './components/navbar.jsx';
import Login from './components/pages/login.jsx'
import HomePage from './components/pages/homepage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
  );
}

export default App;