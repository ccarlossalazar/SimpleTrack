import "./singleLog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import axios from 'axios'
import { useLocation, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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
    alert("Log details have been updated successfully!")
  } catch (err) {
    console.error("Error updating Log:", err)
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
            <Link to="/maintenance">
          {!edit && <h1 className="absolute text-sm"><ArrowBackIcon className="text-gray-500"/></h1>}
          </Link>
          {edit ? (<h1 className="pb-5 text-blue-500">Editing</h1>): (<h1 className="title text-start pl-8">Information</h1>)}
            <h1 className="itemTitle font-bold text-2xl pb-4 text-gray-500 pl-30">Log For: {data.WorkOrder?.equipment_id}</h1>
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
                  <span className="itemValue">{data.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue capitalize">
                    {data.WorkOrder?.status}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Work Order ID:</span>
                  <span className="itemValue">{data.work_order_id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Completed:</span>
                  <span className="itemValue">{data.date_completed}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Updated:</span>
                  <span className="itemValue">
                 {data.updatedAt}
                  </span>
                </div>

                <div className="detailItem flex">
                  <span className="itemKey">Description:</span>
                </div>
                  <textarea rows={4} className="w-full itemValue text-sm font-light field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="details" value={data.details} onChange={handleChange}/>
              </div>
            </div>
            <div className="item">
              <div className="details">
              <div className="detailItem">
                  <span className="itemKey">Equipment ID:</span>
                  <span className="itemValue">{data.WorkOrder?.equipment_id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue capitalize">
                    {data.WorkOrder?.Equipment?.name}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <span className="itemValue">{data.WorkOrder?.Equipment?.location}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Condition:</span>
                  <span className="itemValue capitalize">
                    {data.WorkOrder?.Equipment?.equipment_condition}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Cost:</span>
                  <input type="number" className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="cost" value={data.cost} onChange={handleChange}>
                  </input>
                </div>
              </div>
            </div>
          </div>) : (<div className="flex gap-5 pb-15 relative">                          <div className="item">
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
                              <span className="itemKey">Status:</span>
                              <span className="itemValue capitalize">
                                {data.WorkOrder?.status}
                              </span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Work Order ID:</span>
                              <span className="itemValue">{data.WorkOrder?.id}</span>
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
                              <span className="itemKey">Description:</span>
                              <span className="itemValue">{data.details}</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="details">
                          <div className="detailItem">
                              <span className="itemKey">Equipment ID:</span>
                              <span className="itemValue">{data.WorkOrder?.equipment_id}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Name:</span>
                              <span className="itemValue">{data.WorkOrder?.Equipment?.name}</span>
                            </div>                            
                            <div className="detailItem">
                              <span className="itemKey">Location:</span>
                              <span className="itemValue">{data.WorkOrder?.Equipment?.location}</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Condition:</span>
                              <span className="itemValue capitalize">
                                {data.WorkOrder?.Equipment?.equipment_condition}
                              </span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Cost:</span>
                              <span className="itemValue capitalize">
                                {data.cost}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                        {edit && (
            <div className="flex justify-end">
              <button className="border-2 border-blue-400 p-2 rounded-lg hover:bg-blue-300 text-blue-400 hover:text-blue-600" onClick={handleUpdate}>
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
