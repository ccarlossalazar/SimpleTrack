import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { AuthContext } from "../../context/authContext";
import { useContext} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
const { user } = useContext(AuthContext)
const [logout, setLogout] = useState(false) 


const toggleLogout = () => {
  setLogout(!logout)
}
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <Link to="/notifications">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          </Link>
          <div className="flex-col relative">
          <div className="item" onClick={toggleLogout}>
            <img
              src={user.img}
              alt=""
              className="avatar"
              />
          </div>
          {logout &&
          <button className="absolute border-1 border-red-500 mt-4 p-1 rounded-md text-red-400 hover:bg-red-400 hover:text-white">Logout</button>
        }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
