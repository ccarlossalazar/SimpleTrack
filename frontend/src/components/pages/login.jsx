import {React, useState, useContext} from "react";
import {User, Lock, ArrowLeft} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { AuthContext } from "../../context/authContext.jsx";

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
    dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    navigate("/")
  } catch(err) {
    dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
  }
}

  return (
<div className="login-page min-w-screen min-h-screen bg-cover bg-[url('/assets/background.jpg')]">
<Link to="/"><button className="back flex text-white mx-4 py-4"><ArrowLeft />Back to Home </button></Link>
<div className="flex justify-center">
    <div className="flex bg-gray-700 rounded-lg justify-center items-center  max-w-md w-full shadow-2xl p-4">
    <form className="p-5">
        <img src="/assets/logo.png" className="w-40 h-32 mb-6 ml-14"/>
        <h1 className="text-center font-semibold">Login</h1>
        <div className='inputs p-4'>
        <div className="input flex mb-4 p-4 bg-gray-300 text-black rounded-2xl">
        <User />
        <input id='username' className="placeholder-black" placeholder="Username" required onChange={handleChange}/>
        </div>
        <div className="input flex mb-4 p-4 bg-gray-300 text-black rounded-2xl">
        <Lock />
        <input id='password' className="placeholder-black" placeholder="Password" required onChange={handleChange}/>
        </div>
        </div>
        <div className='remember pb-10'>
            <label><input type='checkbox'/>Remember Me</label>
        </div>
        <div className="bg-blue-500 mx-auto rounded-2xl">
        <button disabled={loading} onClick={handleClick} type='submit' className="text-center w-full p-2">Login</button>
       {error && <span>{error.message}</span>}
       </div>
    </form>
    </div>
    </div>
</div>
  )
}

export default Login;