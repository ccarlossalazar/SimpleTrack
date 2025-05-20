import "./singleRequest.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const SingleRequest = () => {
  const location = useLocation()
  const pathSplit = location.pathname.split("/")
  const path = pathSplit[1]
  const id = pathSplit[2]

  const[data, setData] = useState({})
 

useEffect(() => {
const fetchRequest = async () => {
  try{
    const res = await axios.get(`http://localhost:5000/${path}/${id}`)
    setData(res.data)
    console.log(data)
  } catch(err){
    console.log("There was an error", err)
  }
}
fetchRequest()
}, [path, id])

 
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top relative">
          <div className="left">
          <Link to="/requests">
          <h1 className="absolute text-sm"><ArrowBackIcon className="text-gray-500"/></h1>
          </Link>
            <h1 className="title text-start pl-8">Information</h1>
            <div className="item">
              <img
                src="https://www.pngfind.com/pngs/m/333-3339813_icon-request-for-pro-content-icon-png-transparent.png"
                alt=""
                className="w-30 h-30 p-3"
              />
              <div className="details">
                <h1 className="itemTitle font-bold text-2xl">Request For: {data.name} in {data.location}</h1>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="font-bold">{data.description}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipment Name:</span>
                  <span className="itemValue">{data.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <span className="itemValue">{data.location}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Submitted by:</span>
                  <span className="itemValue capitalize">
                    {data.firstname} {data.lastname}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">
                    {data.email}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Requested:</span>
                  <span className="itemValue">{data.date_requested}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue capitalize">
                    {data.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
            <Link to={`/requests/new/${id}`}>
            <button className="border-2 border-green-500 p-2 rounded-xl text-green-600 hover:bg-green-200">Accept</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRequest;
