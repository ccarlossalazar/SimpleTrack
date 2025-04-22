import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "/src/context/authContext.jsx";

const Sidebar = () => {
  const { user, dispatch: authDispatch } = useContext(AuthContext)

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

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SimpleTrack</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
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
              <StoreIcon className="icon" />
              <span>Equipment</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            {user ? (<span>{user.username}</span>) : <span>Profile</span>}
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span><button onClick={handleLogout}>Logout</button></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
