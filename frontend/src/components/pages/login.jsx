import {React, useState, useContext} from "react"
import {User, Lock, ArrowLeft} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { AuthContext } from "../../context/authContext.jsx"

const Login = () => {

const [ credentials, setCredentials ] = useState ({
    username:undefined,
    password: undefined,
  })

  const {loading , error, dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

const handleChange = (e) => {
  setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
}

const handleClick = async e => {
  e.preventDefault()
  dispatch({type:'LOGIN_START'})
  console.log(credentials)
  try{
    const res = await axios.post("http://localhost:5000/auth/login", credentials)
    
    const user = res.data.details
    const {role} = user

    
    console.log("Logged in as:", user);
    dispatch({type: "LOGIN_SUCCESS", payload: user})
    window.location.reload()
    switch(role) {
      case'admin':
      window.location.href = 'http://localhost:5174/'
      break
      case 'employee':
      navigate('/employee-portal')
      break
      case 'maintenance':
        navigate('/maintenance-portal')
      break
      default:
        dispatch({type:"LOGIN_FAILURE", payload: {message: "Unknown Role"} })
    }
  } catch(err) {
      dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
    }
}

  return (
<>
<div className=" bg-cover bg-[url('/assets/background.jpg')] h-screen w-screen flex justify-center items-center">
<div className=" bg-gray-400 rounded-lg justify-center items-center max-w-md w-full shadow-3xl p-8">
<Link to="/"><button className="flex font-semibold text-start pb-5"><ArrowLeft />Back to Home </button></Link>
    <div className="w-full flex flex-col justify-center items-center">
    <img src="/assets/logo.png" className="w-50 h-35"/>
    <form className="p-4 items-center justify-center">
        <h1 className="text-center font-semibold text-lg">Login</h1>
        {error && (
          <div className="bg-white rounded-xl p-2 mt-2 text-center text-red-600">
          <span>{error.message}
          </span>
          </div>)}
        <div className='p-4 grid grid-cols-1 gap-4'>
        <div className="input flex p-4 bg-gray-300 text-black rounded-2xl">
        <User className='text-gray-400'/>
        <input id='username' className="placeholder-gray-400 focus:outline-hidden ml-2 w-full" placeholder="Username" required onChange={handleChange}/>
        </div>
        <div className="input flex p-4 bg-gray-300 text-black rounded-2xl">
        <Lock className='text-gray-400' />
        <input id='password' className="placeholder-gray-400 focus:outline-hidden ml-2 w-full" placeholder="Password" required onChange={handleChange}/>
        </div>
        </div>
        <div className='remember pb-10'>
            <label><input id="default-checkbox" type='checkbox'/>Remember Me</label>
        </div>
        <div className="bg-blue-500 mx-auto rounded-2xl">
        <button disabled={loading} onClick={handleClick} type='submit' className="text-center w-full p-2 text-white font-semibold">Login</button>
        </div>
    </form>
    </div>
    </div>
</div>
</>
  )
}

export default Login;