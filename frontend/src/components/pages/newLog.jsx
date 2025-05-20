import Navbar from "../navbar/portalnavbar"
import Sidebar from "../sidebar/sidebar"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const NewLog = () => {
    const [info, setInfo] = useState({})
    const location = useLocation()
    const pathSplit = location.pathname.split("/")
    const id = pathSplit[3]
    const [cost, setCost] = useState("")
    const [details, setDetails] = useState("")

    const navigate = useNavigate()
    
useEffect (() => {
const fetchLog = async () => {
    try{
      const res = await axios.get(`http://localhost:5000/workorders/${id}`)
      setInfo({
        equipment_id: res.data.equipment_id,
        description: res.data.description,
        work_order_id: res.data.id,
        location: res.data.Equipment?.location
      })
      console.log(res.data)
    } catch(err){
      console.log("There was an error", err)
    }
  }
  fetchLog()
}, [id])


const handleSubmit = async () => {
  try {
    const data = {
      work_order_id: info.work_order_id,
      cost:  cost === "" ? "0.00" : parseFloat(cost),
      details: details
    }
    await axios.post("http://localhost:5000/maintenance", data)
    alert("Log Created Successfully!")
    navigate("/maintenance")
  } catch (err) {
    console.error("Error Creating Log:", err)
    alert("Error Submitting Log")
  }
}

    return (
        <div className='flex min-h-screen w-full overflow-hidden'>
        <Sidebar/>
        <div className='flex flex-col flex-1'>        
        <Navbar/>
        <div className='p-8 flex-1 overflow-auto'>
        <div className="flex shadow-md w-full rounded-lg mb-4 p-3">
            <h1 className="text-xl text-gray-400">New Log</h1>
        </div>
        <div className="flex p-5 w-full justify-center shadow-xl rounded-lg relative pb-15 text-lg">
        <button className="absolute bottom-5 right-5 p-2 text-green-500 border-2 rounded-lg hover:bg-green-200" onClick={handleSubmit}>Submit</button>
        <div className="w-3/7 p-8">
        <h1 className="border-b-1 w-1/2 text-xl pb-1">Work Order Details:</h1>
        <div className="flex gap-2 pt-5">
        <h1 className="font-bold">Equipment ID:</h1>
        <h1>{info.equipment_id}</h1>
        </div>
        <div className="flex gap-2">
        <h1 className="font-bold">Work Order ID:</h1>
        <h1>{info.work_order_id}</h1>
        </div>
        <div className="flex gap-2">
        <h1 className="font-bold">Location:</h1>
        <h1>{info.location || "NO"}</h1>
        </div>
        <div className="flex-col gap-2">
        <h1 className="font-bold">Description:</h1>
        <h1>{info.description || "NO"}</h1>
        </div>
        </div>
        <div className="w-1/2 space-y-3 p-8">
        <div className="flex-col gap-2">
        <h1 className="text-xl">Cost:</h1>
        <input type="number" placeholder="0.00" className="border-b focus:border-b-2 focus:border-blue-500 focus-within:outline-none" onChange={(e) => setCost(e.target.value)} value={cost}></input>
        </div>
        <div className="flex-col">
        <h1 className="text-xl">Details:</h1>
        <textarea placeholder="What was fixed?" rows={6} className="w-full h-full focus-within:outline-none focus:border-b-2 focus:border-b-blue-500 border-b-1 rounded-lg focus:bg-gray-50" value={details}  onChange={(e) => setDetails(e.target.value)}/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default NewLog