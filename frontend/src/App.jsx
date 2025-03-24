import Navbar from './components/pages/navbar.jsx';
import Login from './components/pages/login.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
  );
}

export default App;