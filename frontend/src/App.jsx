import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
     <p>This is the about page about the rec and stuff</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/login">
        <button>Go to Login Page</button>
      </Link>
      <p>This is the about page about the rec and stuff</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;