import { useLocation, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "../sidebar/sidebar"
import Navbar from '../navbar/portalnavbar.jsx'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const SingleEquipment = () => {
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
                <div className="flex flex-col p-3 w-full justify-between shadow-xl rounded-lg pb-15">
                <Link to="/equipment"><ArrowBackIcon className="absolute"/></Link>              
                <h1 className="text-xl text-center text-gray-400 font-bold">Information</h1>
                <div className="p-8">
                <h1 className="text-2xl font-bold mb-4 mt-2">Equipment Details:</h1>
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">ID:</h1>
                  <h1 className="text-lg">{data.id}  </h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Name:</h1>
                  <h1 className="text-lg">{data.name}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Location:</h1>
                  <h1 className="text-lg">{data.location}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Condition:</h1>
                  <h1 className="text-lg capitalize">{data.equipment_condition}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Created:</h1>
                  <h1 className="text-lg">{data.createdAt}</h1>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SingleEquipment