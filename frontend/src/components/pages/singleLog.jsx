import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "../sidebar/sidebar"
import Navbar from '../navbar/portalnavbar.jsx'

const SingleLog = () => {

    const user = JSON.parse(localStorage.getItem("user"))
    const role = user?.role

    const location = useLocation()
    const pathSplit = location.pathname.split("/")
    const path = pathSplit[1]
    const id = pathSplit[2]

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchWorkOrder = async () => {
          try{
            const res = await axios.get(`http://localhost:5000/${path}/get/${id}`)
            setData(res.data)
          } catch(err){
            console.log("There was an error", err)
          }
        }
        fetchWorkOrder()
        }, [path, id])

    return (
        <div className='flex min-h-screen w-full overflow-hidden'>
        <Sidebar/>
        <div className='flex flex-col flex-1'>        
        <Navbar/>
        <div className='p-6 flex-1 overflow-auto'>
                <div className="flex flex-col p-3 w-3/4 justify-between bg-gray-100 shadow-xl rounded-lg relative">
                <h1 className="text-2xl font-bold mb-4 mt-2">Maintenance Log {data.id} Details:</h1>
                {role === "maintenance" && (<button className="absolute top-0 right-0 bg-blue-200 text-lg p-2 rounded-md text-blue-500">Edit</button>)}
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">ID:</h1>
                  <h1 className="text-lg">{data.id}  </h1>
                </div>
                <div className="flex-col space-x-2">
                <h1 className="text-lg font-semibold">Work Order ID:</h1>
                  <h1 className="text-lg">{data.work_order_id}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Equipment ID:</h1>
                  <h1 className="text-lg">{data.equipment_id}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Completed:</h1>
                  <h1 className="text-lg">{data.date_completed}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Email:</h1>
                  <h1 className="text-lg"> </h1>
                </div>
                </div>
                <div className="flex-col flex w-1/2 space-y-2">
                <h1 className="text-lg font-semibold">Details:</h1>
                  <h1 className="text-lg">{data.details}</h1>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SingleLog