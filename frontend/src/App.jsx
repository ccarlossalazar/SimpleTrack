import Login from './components/pages/login.jsx'
import HomePage from './components/pages/homepage.jsx'
import About from './components/pages/about.jsx'
import Events from './components/pages/events.jsx'
import Additional from './components/pages/additional.jsx'
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

      </Routes>
      </Router>
  );
}

export default App;