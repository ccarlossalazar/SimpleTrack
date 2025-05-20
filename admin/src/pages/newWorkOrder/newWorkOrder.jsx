import "./newWorkOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react"
import axios from 'axios'

const NewWorkOrder = ({}) => {
  const [info, userInfo] = useState({})
  const [equipmentList, setEquipmentList] = useState([])
  const [selected, setSelected] = useState(null)
   
  const handleChange = (e) => {
    userInfo(prev=>({...prev, [e.target.name]:e.target.value})) 
  }

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const res = await axios.get("http://localhost:5000/equipment")
        setEquipmentList(res.data)
      } catch (err) {
        console.error("There was an error fetching equipment", err)
      }
    }
    fetchEquipment()
  }, [])

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:5000/workorders", info)
      window.location.href = "/workorders"
    }catch(err){
      console.error("New Work Order Error:", err.message);
    }
  }

  const handleSelect = (e) => {
    const selectedId = e.target.value
    const equipment = equipmentList.find(eq => eq.id === selectedId)
    setSelected(equipment)
    userInfo(prev => ({ ...prev, equipment_id: selectedId }))
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Work Order</h1>
        </div>
        <div className="bottom flex-col flex-2">
            <div className="flex pl-12 pr-12 relative pb-15">
              <div className="w-1/2 flex-col h-full">
              <div>
              <h2>Equipment ID:</h2>
            <select value={info.equipment_id} onChange={handleSelect} className="border-b-1 border-b-gray-400 focus-within:outline-none pb-1 focus-within:border-b-blue-500 focus-within:border-b-2">
                  <option value="">Select Equipment ID</option>
                  {equipmentList.map((eq) => (
                    <option key={eq.id} value={eq.id}>
                      {eq.id} - {eq.name}
                    </option>
                  ))}
                </select>
                <div className="pt-8">
                <h2>Description:</h2>
                <textarea
                  name="description"
                  placeholder="What is wrong?"
                  value={info.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full h-3/4 focus-within:outline-none border-b-1 border-b-gray-400 focus-within:border-b-blue-500 focus-within:border-b-2"
                  />
                  </div>
              </div>
              </div>
              <div className="w-1/2 flex flex-col items-center">
                <div className="flex flex-col">
                <span className="underline">Equipment Details:</span>
              {selected && 
              <div className="">
                <div>
                <b>Name:</b>
                <h2> {selected.name}</h2>
                </div>
                <div>
                <b>Location:</b>
                <h2> {selected.location}</h2>
                </div>
                <div>
                <b>Condition:</b>
                <h2 className="capitalize">{selected.equipment_condition}</h2>
                </div>
              </div>
              }
                </div>
                  </div>
                  <button className="absolute bottom-3 right-8 text-green-500 p-2 rounded-xl hover:bg-green-200 border-2" onClick={handleClick}>Send</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewWorkOrder;
