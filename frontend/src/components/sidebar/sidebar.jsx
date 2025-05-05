import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
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

    const dashboardRoutes = {
      employee: '/employee-portal',
      maintenance: '/maintenance-portal'
    }


     const dashboardLink = dashboardRoutes[user?.role] || '/'
  
     return (
    <div className="sidebar h-screen bg-white flex flex-col max-w-s border-2 border-gray-200">
      <div className="top">
        <Link to={dashboardLink} style={{ textDecoration: "none" }}>
          <span className="text-[#003768] font-bold text-2xl">SimpleTrack</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={dashboardLink}>
          <li>
            <DashboardIcon className="text-[#003768]" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/equipment" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="text-[#003768]" />
              <span>Equipment</span>
            </li>
          </Link>
          <Link to="/work-orders" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="text-[#003768]" />
            <span> Work Orders</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to='/maintenance'>
          <li>
            <PsychologyOutlinedIcon className="text-[#003768]" />
            <span>Maintenance Logs</span>
          </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="text-[#003768]" />
            <span>Notifications</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="text-[#003768]" />
            {user ? (<span>{user.username}</span>) : null}
          </li>
          <Link to='/'>
          <li>
            <KeyboardReturnIcon className="text-[#003768]" />
            <span>Back to MainPage</span>
          </li>
          </Link>
          <li>
            <ExitToAppIcon className="text-[#003768]" />
            <span><button onClick={handleLogout}>Logout</button></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
