import Navbar from './components/navbar.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;