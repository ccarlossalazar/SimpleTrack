import "./newEquipment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react"
import {Link} from 'react-router-dom'
import { equipmentInputs } from "../../formSource";
import axios from 'axios'

const NewEquipment = ({}) => {
    const [info, userInfo] = useState({})
   
    const handleChange = (e) => {
      userInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
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
            <form>
              {equipmentInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <Link to=""><button onClick={handleClick}>Send</button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEquipment;
