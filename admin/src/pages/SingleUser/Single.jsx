import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Single = () => {
  const location = useLocation()
  const pathSplit = location.pathname.split("/")
  const path = pathSplit[1]
  const id = pathSplit[2]

  const[data, setData] = useState({})
  const [edit, setEdit] = useState(false)
 

useEffect(() => {
const fetchUser = async () => {
  try{
    const res = await axios.get(`http://localhost:5000/${path}/${id}`)
    setData(res.data)
  } catch(err){
    console.log("There was an error", err)
  }
}
fetchUser()
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

const handleSubmit = async () => {
  try {
    const res = await axios.put(`http://localhost:5000/${path}/${id}`, data)
    setData(res.data)
    setEdit(false)
    alert("Users details have been updated successfully!")
  } catch (err) {
    console.error("Error updating user:", err)
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
           {edit ? (<div onClick={toggleEdit} className="cancelButton">Cancel</div>) : (<div onClick={toggleEdit} className="editButton">Edit</div>)}
            <Link to="/users">
            {!edit && <h1 className="absolute text-sm"><ArrowBackIcon className="text-gray-500"/></h1>}
            </Link>
            {edit ? (<h1 className="pb-5 text-blue-500">Editing</h1>) : (<h1 className="title text-start pl-8">Information</h1>)}
            <h1 className="itemTitle font-bold text-2xl pb-4 text-gray-500 pl-30">{data.firstname} {data.lastname}</h1>
            {edit ? (
            <div className="item">
              <img
                src={ data.img ? `${data.img}` : "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"}
                alt=""
                className="itemImg outline-2"
              />
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">First Name:</span>
                  <input className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="firstname" value={data.firstname} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Name:</span>
                  <input className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="lastname" value={data.lastname} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <input className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="username" value={data.username} onChange={handleChange}></input>
                </div>
                <div className="font-semibold text-[#555] text-sm">
            <label>
                Role:
                <select className="border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="role" value={data.role} onChange={handleChange} required>
                    <option disabled value="">Select...</option>
                    <option value="admin">Admin</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="employee">Employee</option>
                </select>
            </label>
                </div>
              </div>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Change Password:</span>
                  <input className="itemValue field-sizing-fixed border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="password" onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <input className="itemValue field-sizing-content border-b-2 border-b-gray-300 outline-hidden focus:border-b-blue-500" id="email" value={data.email} onChange={handleChange}></input>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created:</span>
                  <span className="itemValue">
                    {data.createdAt}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Updated:</span>
                  <span className="itemValue capitalize">{data.updatedAt}</span>
                </div>
              </div>
            </div> )
            : (
            <div className="item">
              <img
                src={ data.img ? `${data.img}` : "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"}
                alt=""
                className="itemImg outline-2"
              />
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">First Name:</span>
                  <span className="itemValue">{data.firstname}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Name:</span>
                  <span className="itemValue">{data.lastname}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{data.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue capitalize">{data.role}</span>
                </div>
              </div>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Password:</span>
                  <span className="itemValue">********</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">
                    {data.email}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created:</span>
                  <span className="itemValue">
                    {data.createdAt}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Updated:</span>
                  <span className="itemValue capitalize">{data.updatedAt}</span>
                </div>
              </div>
            </div>)}
            {edit && 
            <div className="flex justify-end">
              <button className="border-2 border-blue-400 p-2 rounded-lg hover:bg-blue-300 text-blue-400 hover:text-blue-600" onClick={handleSubmit}>
                Save Changes
              </button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
