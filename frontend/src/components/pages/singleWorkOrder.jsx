import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "../sidebar/sidebar"
import Navbar from '../navbar/portalnavbar.jsx'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SingleWorkOrder = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role;
  
    const location = useLocation()
    const pathSplit = location.pathname.split("/")
    const path = pathSplit[1]
    const id = pathSplit[2]

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchWorkOrder = async () => {
          try{
            const res = await axios.get(`http://localhost:5000/${path}/${id}`)
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
                <div className="flex flex-col p-3 w-full justify-between shadow-xl rounded-lg relative pb-15">
                <Link to="/workorders"><ArrowBackIcon className="absolute"/></Link>              
                <h1 className="text-xl font-bold text-center text-gray-400">Information</h1>
                {role === "maintenance" && (<> <Link to={`/maintenance/new/${id}`}><button className="absolute bottom-5 right-8 border-2 border-green-500 text-green-500 p-2 rounded-md hover:bg-green-200">Complete</button></Link> </>)}
                <div className="p-8">
                <h1 className="text-2xl font-bold mb-4 mt-2">Work Order {data.id} Details:</h1>
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">ID:</h1>
                  <h1 className="text-lg">{data.id}  </h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Equipment ID:</h1>
                  <h1 className="text-lg">{data.equipment_id}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Status:</h1>
                  <h1 className="text-lg capitalize">{data.status}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Location:</h1>
                  <h1 className="text-lg">{data.Equipment?.location}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Created:</h1>
                  <h1 className="text-lg">{data.createdAt}</h1>
                </div>
                </div>
                <div className="flex-col flex w-1/2 space-y-2">
                <h1 className="text-lg font-bold">Details:</h1>
                  <h1 className="text-lg">{data.description}</h1>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SingleWorkOrder