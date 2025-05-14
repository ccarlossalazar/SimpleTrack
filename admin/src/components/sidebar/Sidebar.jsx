import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HandymanIcon from "@mui/icons-material/Handyman";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookIcon from "@mui/icons-material/Book";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "/src/context/authContext.jsx";

const Sidebar = () => {
  const { user, dispatch: authDispatch } = useContext(AuthContext)
  const [logout, setLogout] = useState(false)

 const handleLogout = () => {
        try {
            localStorage.removeItem("user")
            window.location.reload()
            authDispatch({type:"LOGOUT"})
            console.log("Logout successful")
            window.location.href = 'http://localhost:5173/'
        }
        catch (err) {
            console.error("Logout failed",err)
        }
    }

    const mainPage = () => {
      window.location.href = 'http://localhost:5173/'
    }

    const toggleLogout = () => {
      setLogout(!logout)
    }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SimpleTrack</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul className="text-[#003768]">
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to='/'><span>Dashboard</span></Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/equipment" style={{ textDecoration: "none" }}>
            <li>
              <FitnessCenterIcon className="icon" />
              <span>Equipment</span>
            </li>
          </Link>
          <Link to='/workorders'>
          <li>
            <HandymanIcon className="icon" />
            <span>Work Orders</span>
          </li>
          </Link>
          <Link to='/requests'>
          <li>
            <PendingActionsIcon className="icon" />
            <span>Pending Requests</span>
          </li>
          </Link>
          <Link to='/maintenance'>
          <li>
            <BookIcon className="icon" />
            <span>Logs</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to='/stats'>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          </Link>
          <Link to='/notifications'>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <KeyboardReturnIcon className="icon" />
            <span><button onClick={mainPage}>Back to site</button></span>
          </li>
          <li onClick={toggleLogout}>
            <AccountCircleOutlinedIcon className="icon" />
            {user ? (
              <span>{user.username}</span>
              ) 
              : <span>Profile</span>}
          </li>
          {logout && 
          <li>
            <ExitToAppIcon className="icon" />
            <span><button onClick={handleLogout}>Logout</button></span>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
