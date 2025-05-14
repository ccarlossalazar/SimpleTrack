import Navbar from '../navbar.jsx'
import Footer from '../footer.jsx'
import {useState } from 'react'
import { BadgeCheck, Asterisk} from 'lucide-react'
import {Link} from "react-router-dom"
import axios from 'axios'


const WorkOrder = () => {

    const [submitted, setSubmitted] = useState(false)
    const [workorder, setWorkOrder] = useState({})


    const toggleForm = () => {
        setSubmitted(!submitted)
        if(submitted) {
            setWorkOrder({})
        }
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setWorkOrder((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const submit = async (e) => {
        e.preventDefault()
        console.log(workorder)
        try{
        await axios.post("http://localhost:5000/requests/create", workorder)
        setSubmitted(!submitted)
        } catch (err){
        console.error('Error Submitting Request:', err ? err.response.data : err.message)
        }
    } 

    return (
    <>
    <Navbar/>
    { !submitted && (
    <div className="flex justify-center min-h-screen p-20 items-center bg-white">
        <div className="max-w-2xl w-full bg-gray-200 rounded-xl text-center">
        <h1 className="text-gray-700 text-lg mt-15">Think something is broken? Please let us know and fill out the form below.</h1>
        <h1 className="text-black font-semibold text-2xl mb-15">Submit form for a work order request.</h1>
         <form onSubmit={submit} className="space-y-8 m-5 text-start">
         <h1 className="flex text-start text-xs font-bold items-center">(<Asterisk className='text-red-500 size-2.5'/>) indicates a required field</h1>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
         <div>
         <label className=" flex block mb-3">First Name<Asterisk className='text-red-500 size-2.5'/></label>
          <input name="firstname" placeholder="ex. John" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>
          </div>
          <div>
          <label className="flex block mb-3">Last Name<Asterisk className='text-red-500 size-2.5'/></label>
          <input name="lastname" placeholder="ex. Smith" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>
        </div>
            <div>
            <label className="flex block mb-3">Email<Asterisk className='text-red-500 size-2.5'/></label>
            <input type="email" name="email" placeholder="ex. johnsmith@example.com" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>            
            </div>
            <div>
            <label className="flex block mb-3">Machine <Asterisk className='text-red-500 size-2.5'/></label>
            <input name="name" placeholder="ex. Treadmill" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>         
            </div>
            </div>
            <div className="md:col-span-2 m-6">
            <label className='flex'>
                Location<Asterisk className='text-red-500 size-2.5'/>:
                <select name="location" value={workorder.location} onChange={handleChange} required>
                    <option disabled value="">Select...</option>
                    <option value="Cardio 1">Cardio 1</option>
                    <option value="Cardio 2">Cardio 2</option>
                    <option value="Cardio 3">Cardio 3</option>
                </select>
            </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
            </div>
            <div className="w-full p-5">
            <label htmlFor="message" className="flex block mb-2 text-black text-start">Details<Asterisk className='text-red-500 size-2.5'/>:</label>
            <textarea name="description" rows="3" className="block p-2.5 w-full text-sm text-black rounded-lg bg-white focus:outline-hidden" placeholder="Please explain what the issue is." required onChange={handleChange}/>
            </div>
            <div className="bg-blue-500 rounded-2xl p-2 m-10 hover:bg-blue-600">
        <button type='submit' className="text-center w-full p-2 text-white font-semibold">Submit Request</button>
            </div>
         </form>
        </div>     
    </div>
    )}
    {submitted && ( 
    <>
    <div className="flex justify-center items-center min-h-screen"> 
        <div className="bg-gray-200 rounded-4xl p-20 flex-col text-center w-full m-20">
            <h1 className='text-2xl font-semibold'>Thank you for your submission!</h1>
        <div className="flex justify-center items-center mb-4">
            <BadgeCheck className="text-blue-500 w-20 h-20 m-5" />
        </div>
        <div className='flex flex-col w-full space-y-3'>
        <Link to="/"><button className="text-center w-full p-2 text-white font-semibold bg-blue-500 rounded-xl hover:bg-blue-600">Back to home</button></Link>
            <button type='submit' className="text-center w-full p-2 text-white font-semibold bg-blue-500 rounded-xl hover:bg-blue-600" onClick={toggleForm}>Submit another request</button>
        </div>
        </div>
    </div>
    <div className='fixed bottom-0 min-w-full'>
    <Footer/> 
    </div>
    </>
    )} 
    {!submitted &&(
    <Footer/>)}
    </>
    )
}

export default WorkOrder