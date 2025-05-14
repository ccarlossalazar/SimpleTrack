import "./widget.scss";
import HandymanIcon from "@mui/icons-material/Handyman";
import BookIcon from "@mui/icons-material/Book";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Widget = ({ type }) => {
const[amount, setAmount] = useState(0)

  let data;

  useEffect(() => {
    const fetchCount = async () => {
      try {
        let res

        switch (type) {
          case "requests":
            res = await axios.get("http://localhost:5000/requests/count")
            setAmount(res.data)
            break
          case "order":
            res = await axios.get("http://localhost:5000/maintenance/count")
            setAmount(res.data)
            break
          case "equipment":
            res = await axios.get("http://localhost:5000/equipment/count")
            setAmount(res.data)
            break
          case "workorders":
            res = await axios.get("http://localhost:5000/workorders/count")
            setAmount(res.data)
            break
      }
    } catch(err) {
      console.error("Failed to fetch data:", err)
    }
  }
  fetchCount()
},[type])

  switch (type) {
    case "requests":
      data = {
        title: "PENDING REQUESTS",
        isMoney: false,
        link: "See all requests",
        url: "/requests",
        icon: (
          <PendingActionsIcon
            className="text-red-500"
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "MAINTENANCE LOGS",
        isMoney: false,
        link: "View maintenance history",
        url: "/maintenance",
        icon: (
          <BookIcon
            className="text-yellow-500"
          />
        ),
      };
      break;
    case "equipment":
      data = {
        title: "EQUIPMENT COUNT",
        isMoney: false,
        link: "View equipment",
        url: "/equipment",
        icon: (
          <FitnessCenterIcon
            className="text-blue-500"
          />
        ),
      };
      break;
    case "workorders":
      data = {
        title: "WORK ORDERS",
        isMoney: false,
        link: "View all work orders",
        url: "/workorders",
        icon: (
          <HandymanIcon
            className="text-green-600"
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <a href={data.url} className="link hover:text-blue-500">{data.link}</a>
      </div>
      <div className="right">
        {data.icon}
        </div>
      </div>
  );
};

export default Widget;
