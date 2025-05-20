import { useLocation, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "../sidebar/sidebar"
import Navbar from '../navbar/portalnavbar.jsx'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SingleLog = () => {

    const user = JSON.parse(localStorage.getItem("user"))
    const role = user?.role

    const location = useLocation()
    const pathSplit = location.pathname.split("/")
    const path = pathSplit[1]
    const id = pathSplit[2]
    const [edit, setEdit] = useState(false)

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

        const toggleEdit = () => {
          setEdit(!edit)
        }

    return (
        <div className='flex min-h-screen w-full overflow-hidden'>
        <Sidebar/>
        <div className='flex flex-col flex-1'>        
        <Navbar/>
        <div className='p-6 flex-1 overflow-auto'>
                <div className="flex flex-col p-3 w-full justify-center shadow-xl rounded-lg relative pb-15">
             {edit ? (<><h1 className="text-xl text-blue-500 pl-10 font-bold">Editing</h1></>):(<><Link to="/maintenance"><ArrowBackIcon className="absolute"/></Link>              
              <h1 className="text-xl text-center text-gray-400 font-bold">Information</h1></>)}
                <div className="p-8">
                <h1 className="text-2xl font-bold mb-4 mt-2">Maintenance Log {data.id} Details:</h1>
                {role === "maintenance" && 
                edit ? (<>
                <button onClick={toggleEdit} className="absolute top-0 right-0 bg-red-200 text-lg p-2 rounded-md text-red-500 hover:bg-red-300">Cancel</button>
                <button className="absolute bottom-5 right-5 text-lg p-2 rounded-md text-blue-500 border-2 hover:bg-blue-200">Save Changes</button>
                  <div className="flex w-full">
                  <div className="flex-col flex w-1/2 space-y-2">
                  <div className="flex space-x-2">
                  <h1 className="text-lg font-bold">ID:</h1>
                    <h1 className="text-lg">{data.id}  </h1>
                  </div>
                  <div className="flex space-x-2">
                  <h1 className="text-lg font-bold">Work Order ID:</h1>
                    <h1 className="text-lg">{data.WorkOrder?.id}</h1>
                  </div>
                  <div className="flex space-x-2">
                  <h1 className="text-lg font-bold">Equipment ID:</h1>
                    <h1 className="text-lg">{data.WorkOrder?.equipment_id}</h1>
                  </div>
                  <div className="flex space-x-2">
                  <h1 className="text-lg font-bold">Location:</h1>
                    <h1 className="text-lg">{data.WorkOrder?.Equipment?.location}</h1>
                  </div>
                  <div className="flex space-x-2">
                  <h1 className="text-lg font-bold">Completed:</h1>
                    <h1 className="text-lg">{data.date_completed}</h1>
                  </div>
                  <div className="flex space-x-2">
                  <h1 className="text-lg font-bold">Description:</h1>
                    <h1 className="text-lg">{data.WorkOrder?.description}</h1>
                  </div>
                  </div>
                  <div className="flex-col w-1/2 flex space-y-2 h-full">
                  <div className="flex space-x-2">
                  <h1 className="text-lg">Cost:</h1>
                    <input type="number" className="text-lg border-b focus:border-b-blue-500 focus:border-b-2 focus-within:outline-none" value={data.cost}></input>
                  </div>
                  <div className="h-full">
                  <h1 className="text-lg">Details:</h1>
                    <textarea rows={5} className="text-lg w-full focus-within:outline-none border-b focus:border-b-blue-500 focus:border-b-2" value={data.details}/>
                  </div>
                  </div>
                  
                  </div>
              </>
                ): 
                (<><button onClick={toggleEdit} className="absolute top-0 right-0 bg-blue-200 text-lg p-2 rounded-md text-blue-500">Edit</button>
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">ID:</h1>
                  <h1 className="text-lg">{data.id}  </h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Work Order ID:</h1>
                  <h1 className="text-lg">{data.WorkOrder?.id}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Equipment ID:</h1>
                  <h1 className="text-lg">{data.WorkOrder?.equipment_id}</h1>
                </div>
                                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Location:</h1>
                  <h1 className="text-lg">{data.WorkOrder?.Equipment?.location}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Completed:</h1>
                  <h1 className="text-lg">{data.date_completed}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-bold">Description:</h1>
                  <h1 className="text-lg">{data.WorkOrder?.description}</h1>
                </div>
                </div>
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                  <h1 className="text-lg ">Cost:</h1>
                    <h1 className="text-lg">{data.cost}</h1>
                  </div>
                <div>
                <h1 className="text-lg ">Details:</h1>
                  <h1 className="text-lg">{data.details}</h1>
                </div>
                </div>
            </div>
            </>
                )}
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SingleLog