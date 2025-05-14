import "./singleEquipment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
//import List from "../../components/table/Table";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import RecentWorkOrders from "../../components/table/WorkOrderTable";
import { SquareChevronRight, SquareChevronDown } from "lucide-react";



const SingleEquipment = () => {
  const location = useLocation()
  const pathSplit = location.pathname.split("/")
  const path = pathSplit[1]
  const id = pathSplit[2]


  const[data, setData] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [view, setView] = useState(false)
  const[edit, setEdit] = useState(false)
  
 

useEffect(() => {
const fetchEquipment = async () => {
  try{
    const res = await axios.get(`http://localhost:5000/${path}/${id}`)
    setData(res.data)
  } catch(err){
    console.log("There was an error", err)
  }
}
fetchEquipment()
}, [path, id])


const toggleWorkOrders = () => {
setVisibility(!visibility)
}
const toggleLogs = () => {
  setView(!view)
  }

  const toggleEdit = () => {
    setEdit(!edit)
  }
  
  const handleChange = (e) => {
    setData(prev => ({...prev, [e.target.id]: e.target.value}))
  }
  
  const handleSubmit = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/${path}/${id}`, data)
      setData(res.data)
      setEdit(false)
      alert("Equipment details have been updated successfully!")
    } catch (err) {
      console.error("Error updating equipment:", err)
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
          <div className="left flex flex-col">
          {edit ? (<div onClick={toggleEdit} className="cancelButton">Cancel</div>) : (<div onClick={toggleEdit} className="editButton">Edit</div>)}
          {edit ? (<h1 className="title">Editing</h1>) : (<h1 className="title">Information</h1>)}
           {edit ? ( 
            <div className="item">
              <img
                src={`/equipment images/${data.name}.png`}
                alt=""
                className="itemImg outline-2 outline-blue-950"
              />
              <div className="details">
                <h1 className="itemTitle font-bold text-2xl">{data.name} {data.id}</h1>
                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <input id="location" className="itemValue  field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" value={data.location} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipment ID:</span>
                  <input id="id" className="itemValue  field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" value={data.id} onChange={handleChange}></input>
                </div>
                <div className="detailItem font-semibold text-[#555] text-sm">
            <label>
                Condition:
                <select className="border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="equipment_condition" value={data.equipment_condition} onChange={handleChange} required>
                    <option disabled value="">Select...</option>
                    <option value="poor">Poor</option>
                    <option value="good">Good</option>
                    <option value="excellent">CExcellent</option>
                </select>
            </label>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created:</span>
                  <span className="itemValue">{data.createdAt}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Updated:</span>
                  <span className="itemValue">{data.updatedAt}</span>
                </div>
              </div>
            </div> ) :
            (
              <div className="item">
              <img
                src={`/equipment images/${data.name}.png`}
                alt=""
                className="itemImg outline-2 outline-blue-950"
              />
              <div className="details">
                <h1 className="itemTitle font-bold text-2xl">{data.name} {data.id}</h1>
                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <span className="itemValue">{data.location}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipment ID:</span>
                  <span className="itemValue">
                    {data.id}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Condition:</span>
                  <span className="itemValue capitalize">{data.equipment_condition}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created:</span>
                  <span className="itemValue">{data.createdAt}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Updated:</span>
                  <span className="itemValue">{data.updatedAt}</span>
                </div>
              </div>
            </div>
            )}
            {edit && 
            <div className="flex justify-end">
              <button className="border-2 border-blue-500 p-2 rounded-xl bg-blue-200 hover:bg-blue-300" onClick={handleSubmit}>
                Save Changes
              </button>
            </div>}
          </div>
        </div>
        {!edit && (<>
        <div className="bottom">
        <div className="flex justify-between">
        <h1 className="title">Recent Work Orders</h1>
        <button className="title text-end" onClick={toggleWorkOrders}>
        {visibility ? <SquareChevronRight/> : <SquareChevronDown/>}
        </button>
        </div>
        {!visibility && <RecentWorkOrders/>}
        </div>
        <div className="bottom">
        <div className="flex justify-between">
        <h1 className="title">Maintenance History</h1>
        <button className="title text-end" onClick={toggleLogs}>
        {view ? <SquareChevronDown/> : <SquareChevronRight/>}
        </button>
        </div>
        {view && <RecentWorkOrders/>}
        </div> </>)}
      </div>
    </div>
  );
};

export default SingleEquipment;
