import "./newLog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react"
import { logInputs } from "../../formSource";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NewLog = ({}) => {
  const [info, setInfo] = useState({})
  const location = useLocation()
    const pathSplit = location.pathname.split("/")
    const id = pathSplit[3]


  useEffect(() => {
  const fetchLog = async () => {
    try{
      const res = await axios.get(`http://localhost:5000/workorders/${id}`)
      setInfo({
        equipment_id: res.data.equipment_id,
        details: res.data.details,
        work_order_id: res.data.id
      })
      console.log(res.data)
    } catch(err){
      console.log("There was an error", err)
    }
  }
  fetchLog()
  }, [id])

  useEffect(() => {
    console.log("Info updated:", info);
  }, [info]);  
  
   
  const handleChange = (e) => {
    setInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
    console.log("Info State:", info)
    }

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      const newLog = {
        equipment_id: info.equipment_id,
        details: info.details, 
        work_order_id: info.work_order_id,
      }
      console.log("New Log Payload:", newLog);
      await axios.post("http://localhost:5000/maintenance", newLog)
      window.location.href = "/maintenance"
    } catch(err){
      console.error("Error Creating New Log:", err.message);
    }
  }

if (!info) {
  return <div>Loading...</div>
}

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Log</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {logInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} value={info[input.id] || ""} readOnly={input.readOnly}/>
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

export default NewLog;
