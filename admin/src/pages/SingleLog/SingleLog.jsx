import "./singleLog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import axios from 'axios'
import { useLocation, Link} from "react-router-dom";
import { useState, useEffect } from "react";


const SingleLog = () => {
  const location = useLocation()
  const pathSplit = location.pathname.split("/")
  const path = pathSplit[1]
  const id = pathSplit[2]

  const[data, setData] = useState({})
  const [edit, setEdit] = useState(false)

 

useEffect(() => {
const fetchWorkOrder = async () => {
  try{
    const res = await axios.get(`http://localhost:5000/${path}/get/${id}`)
    setData(res.data)
    console.log(res.data)
  } catch(err){
    console.log("There was an error", err)
  }
}
fetchWorkOrder()
}, [path, id])

const toggleEdit = () => {
  setEdit(!edit)
}

const handleChange = (e) => {
  setData(prev => ({...prev, [e.target.id]: e.target.value}))
}

const handleUpdate = async () => {
  try {
    const res = await axios.put(`http://localhost:5000/${path}/${id}`, data)
    setData(res.data)
    setEdit(false)
    alert("Work Order details have been updated successfully!")
  } catch (err) {
    console.error("Error updating Work Order:", err)
    alert("Updating details failed")
  }
  window.location.reload()
}

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left flex-col flex">
            {edit ? (<div className="cancelButton" onClick={toggleEdit}>Cancel</div>) : (<div className="editButton" onClick={toggleEdit}>Edit</div>)}
            {edit ? (<h1 className="title">Editing</h1>): (<h1 className="title">Information</h1>)}
            <h1 className="itemTitle font-bold text-2xl pb-4 text-gray-500 pl-30">Log For: {data.equipment_id}</h1>
            {edit ? (
            <div className="flex gap-5">
            <div className="item">
              <img
                src="https://static.thenounproject.com/png/5030542-200.png"
                alt=""
                className="w-30 h-30 p-3"
              />
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Log ID:</span>
                  <input className="itemValue"></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipment ID:</span>
                  <input className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="location" value={data.location} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <input className="itemValue capitalize field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="status" value={data.status} onChange={handleChange}>
                  </input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <input className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="description" value={data.description} onChange={handleChange}></input>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <input className="itemValue  field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="description" value={data.description} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Completed:</span>
                  <span className="itemValue">{data.createdAt}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Updated:</span>
                  <span className="itemValue">
                 {data.updatedAt}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Work Order ID:</span>
                  <span className="itemValue">{data.work_order_id}</span>
                </div>
              </div>
            </div>
          </div>) : (<div className="flex gap-5 pb-15 relative">
            <Link to="/maintenance"><h1 className="absolute bottom-0 bg-blue-300 p-1 rounded-lg text-blue-500">Back</h1></Link>
                          <div className="item">
                          <img
                            src="https://static.thenounproject.com/png/5030542-200.png"
                            alt=""
                            className="w-30 h-30 p-3"
                          />
                          <div className="details">
                            <div className="detailItem">
                              <span className="itemKey">Log ID:</span>
                              <span className="itemValue">{data.id}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Equipment ID:</span>
                              <span className="itemValue">{data.equipment_id}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Status:</span>
                              <span className="itemValue capitalize">
                                {data.status}
                              </span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Description:</span>
                              <span className="itemValue">{data.details}</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="details">                            <div className="detailItem">
                              <span className="itemKey">Location:</span>
                              <span className="itemValue">{data.name}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Completed:</span>
                              <span className="itemValue">{data.date_completed}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Last Updated:</span>
                              <span className="itemValue">{data.updatedAt}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Work Order ID:</span>
                              <span className="itemValue">{data.work_order_id}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                        {edit && (
            <div className="flex justify-end">
              <button className="border-2 border-blue-500 p-2 rounded-xl bg-blue-200 hover:bg-blue-300" onClick={handleUpdate}>
                Save Changes
              </button>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLog;
