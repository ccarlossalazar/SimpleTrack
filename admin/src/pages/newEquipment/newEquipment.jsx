import "./newEquipment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react"
import {Link} from 'react-router-dom'
import { equipmentInputs } from "../../formSource";
import axios from 'axios'

const NewEquipment = ({}) => {
    const [info, userInfo] = useState({})
    const [err,setError] = useState("")
   
    const handleChange = (e) => {
      userInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
      setError("")
    }

    const handleClick = async (e) => {
      e.preventDefault()
      try{
        const newEquipment = {
          ...info,
        }
        console.log("New Equipment Payload:", newEquipment);
        await axios.post("http://localhost:5000/equipment", newEquipment)
        window.location.href = "/equipment"
      }catch(err){
        console.error("New Equipment Error:", err.message);
        setError(err.response?.data?.message || "There was an error creating equipment")
      }
    }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Equipment</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form className="relative">
              {equipmentInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input className="focus-within:outline-none" id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
            <div className="formInput">
             <label>Condition:</label>
              <select className="border-b border-b-gray-400 focus-within:outline-none focus:border-b-blue-500 focus:border-b-2" id="equipment_condition" onChange={handleChange} defaultValue="excellent">
               <option value="" disabled>Select condition</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              <option value="poor">Poor</option>
              </select>
            </div>
              <div className=" absolute right-5 bottom-0 border-2 p-2 text-green-500 rounded-lg hover:bg-green-200" onClick={handleClick}>Send</div>
              {err && <h1 className="errorMessage">{err}</h1>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEquipment;
