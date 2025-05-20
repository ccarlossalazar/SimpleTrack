import "./singleWorkOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import axios from 'axios'
import { useLocation, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const SingleWorkOrder = () => {
  const location = useLocation()
  const pathSplit = location.pathname.split("/")
  const path = pathSplit[1]
  const id = pathSplit[2]

  const[data, setData] = useState({})
  const [edit, setEdit] = useState(false)

 

useEffect(() => {
const fetchWorkOrder = async () => {
  try{
    const res = await axios.get(`http://localhost:5000/${path}/${id}`)
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
  if (edit) {
    window.location.reload()
  }
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
          <div className="left">
          <Link to="/workorders">
          {!edit && <h1 className="absolute text-sm"><ArrowBackIcon className="text-gray-500"/></h1>}
          </Link>
            {edit ? (<div className="cancelButton" onClick={toggleEdit}>Cancel</div>) : (<div className="editButton" onClick={toggleEdit}>Edit</div>)}
            {edit ? (<h1 className="pb-5 text-blue-500">Editing</h1>): (<h1 className="title text-start pl-8">Information</h1>)}
            {edit ? (
            <div className="item">
              <img
                src="https://static.thenounproject.com/png/5030542-200.png"
                alt=""
                className="w-30 h-30 p-3"
              />
              <div className="details">
                <h1 className="itemTitle font-bold text-2xl">Work Order For: {data.equipment_id}</h1>
                <div className="detailItem">
                  <span className="itemKey">Work Order ID:</span>
                  <span className="itemValue">{data.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipment ID:</span>
                  <input className="itemValue field-sizing-content border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="equipment_id" value={data.equipment_id} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipment Name:</span>
                  <span className="itemValue" id="name">{data.Equipment?.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <span className="itemValue">{data.Equipment?.location}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Condition:</span>
                  <span className="itemValue capitalize" id="equipment_condition">{data.Equipment?.equipment_condition}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue capitalize">
                  {data.status} 
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <input className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="description" value={data.description} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created:</span>
                  <span className="itemValue ">{data.createdAt}</span>
                </div>
              </div>
            </div>) : (
                          <div className="item">
                          <img
                            src="https://static.thenounproject.com/png/5030542-200.png"
                            alt=""
                            className="w-30 h-30 p-3"
                          />
                          <div className="details">
                            <h1 className="itemTitle font-bold text-2xl">Work Order For: {data.equipment_id}</h1>
                            <div className="detailItem">
                              <span className="itemKey">Work Order ID:</span>
                              <span className="itemValue">{data.id}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Equipment ID:</span>
                              <span className="itemValue">{data.equipment_id}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Equipment Name:</span>
                              <span className="itemValue">{data.Equipment?.name}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Location:</span>
                              <span className="itemValue">{data.Equipment?.location}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Condition:</span>
                              <span className="itemValue capitalize">{data.Equipment?.equipment_condition}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Status:</span>
                              <span className="itemValue capitalize">
                                {data.status}
                              </span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Description:</span>
                              <span className="itemValue">{data.description}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Created:</span>
                              <span className="itemValue">{data.createdAt}</span>
                            </div>
                          </div>
                        </div>)}
                        {edit ? (
            <div className="flex justify-end">
              <button className="border-2 border-blue-400 p-2 rounded-lg hover:bg-blue-300 text-blue-400 hover:text-blue-600" onClick={handleUpdate}>
                Save Changes
              </button>
            </div>) : (<div className="flex justify-end">
              <Link to={`/maintenance/new/${id}`}><button className="border-2 border-green-500 p-2 rounded-xl text-green-600 hover:bg-green-200">
                Mark Complete
              </button></Link>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkOrder;
