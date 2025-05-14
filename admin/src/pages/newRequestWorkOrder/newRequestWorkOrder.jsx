import "./newRequestWorkOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react"
import { useLocation} from 'react-router-dom'
import { workOrderInputs } from "../../formSource";
import axios from 'axios'

const NewRequestWorkOrder = ({}) => {
    const location = useLocation()
    const pathSplit = location.pathname.split("/")
    const path = pathSplit[1]
    const id = pathSplit[3]
  
  const [info, setInfo] = useState({})
   
  const handleChange = (e) => {
    setInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
  }

  useEffect(() => {
  const fetchRequest = async () => {
    try{
      const res = await axios.get(`http://localhost:5000/${path}/${id}`)
      setInfo(res.data)
      console.log(res.data)
    } catch(err){
      console.log("There was an error", err)
    }
  }
  fetchRequest()
  }, [path, id])

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      const {id,status, ...newWorkOrder } = info
      console.log("New Work Order Payload:", newWorkOrder);
      await axios.post("http://localhost:5000/workorders", newWorkOrder)
      await axios.delete(`http://localhost:5000/requests/${id}`)
      window.location.href = "/workorders"
    }catch(err){
      console.error("Error Creating new work order:", err.message);
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
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} value={info[input.id]}/>
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequestWorkOrder;
