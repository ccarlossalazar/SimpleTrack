import Login from './components/pages/login.jsx'
import HomePage from './components/pages/homepage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { AuthContextProvider } from './context/authContext.js';

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