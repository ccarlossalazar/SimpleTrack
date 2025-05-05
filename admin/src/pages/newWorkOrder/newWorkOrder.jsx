import "./newWorkOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react"
import {Link} from 'react-router-dom'
import { workOrderInputs } from "../../formSource";
import axios from 'axios'

const NewWorkOrder = ({}) => {
  const [info, userInfo] = useState({})
   
  const handleChange = (e) => {
    userInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      const newWorkOrder = {
        ...info,
      }
      console.log("New Work Order Payload:", newWorkOrder);
      await axios.post("http://localhost:5000/workorders", newWorkOrder)
      window.location.href = "/workorders"
    }catch(err){
      console.error("New Work Order Error:", err.message);
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Work Order</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {workOrderInputs.map((input) => (
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

export default NewWorkOrder;
