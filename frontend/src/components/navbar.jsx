
//import Logo from '/src/assets/logo.png'
import { SquareMenu, X } from "lucide-react"
import { useState, useContext } from "react"
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext.jsx"

const Navbar = () => {
const [menuDrawerUp, setMenuDrawerUp] = useState(false)
const [logout, setLogout] = useState(false)
    
const toggleMenuDrawer = () => {
        setMenuDrawerUp(!menuDrawerUp)
    }

  const { user, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

 const handleLogout = () => {
        try {
            localStorage.removeItem("user")
            window.location.reload()
            dispatch({type:"LOGOUT"})
            console.log("Logout successful")
            navigate("/")
        }
        catch (err) {
            console.error("Logout failed",err)
        }
    }

const toAdminPortal = () => {
    window.location.href = 'http://localhost:5174/'
}

const toggleLogout = () => {
    setLogout(!logout)
}

    return (
        <nav className="sticky top-0 z-50 py-10 border-b border-[#003768] bg-opacity-40 backdrop-blur-3xl bg-white">
            <div className="px-6 mx-auto relative text-md">
                <div className="flex items-center">
                    <div className='flex justify-between items-center'>
                    <Link to='/'>
                    <div className="flex items-baseline flex-shrink-0">
                    <img className="h-10 w-10" src='https://www.logoai.com/oss/icons/2021/10/27/ppfWwJiPVMPOEPM.png' alt="logo"/>
                    <span className="text-3xl tracking-tight font-bold font-serif bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 inline-block text-transparent bg-clip-text ">impleTrack</span>
                    </div>
                    </Link>
                    </div>
                    <div className="capitalize font-semibold w-full">
                        <ul className="hidden lg:flex ml-14 space-x-8 text-lg text-[#003768]">
                        <li className="hover:text-blue-400">
                        <Link to='/events'>Event Calendar</Link>
                        </li>
                        <li className="hover:text-blue-400">
                        <Link to='/about'>About</Link>
                        </li>
                        <li className="hover:text-blue-400">
                        <Link to='/additional-info'>Additional Information</Link>
                        </li>
                        {user?.role !== 'admin' && (
                       <li className="hover:text-blue-400">
                        <Link to='/work-order'>Work Order</Link>
                        </li>)}
                        {user?.role === 'admin' && (
                        <li className="hover:text-blue-400">
                        <button onClick={toAdminPortal} className='capitalize'>Admin Portal</button>
                        </li>)}
                        {user?.role === 'maintenance' && (
                        <li className="hover:text-blue-400">
                        <Link to='/maintenance-portal'>Maintenance Portal</Link>
                        </li>)}
                        {user?.role === 'employee' && (
                        <li className="hover:text-blue-400">
                        <Link to='/employee-portal'>Employee Portal</Link>
                        </li>)}
                        </ul>
                        </div>
                    <div className='hidden lg:flex flex-col justify-end'>
                        {user ? (
                        <div className="space-x-4 flex items-center">
                        <div onClick={toggleLogout} className="flex space-x-3 flex-col justify-center items-center">
                        <img src={user.img || 'https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'}
                        className="w-5 h-5 rounded-full outline-2"
                        />
                        <span className="text-black font-semibold text-md">{user.username}</span>
                        </div>
                        {logout && 
                        <button className=" bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md" onClick={handleLogout}>Logout</button>}
                        </div>
                        ) : (
                    <div className="hidden lg:flex items-end space-x-">
                    <Link to='/login'>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-lg text-lg">Login</button>
                    </Link>
                    </div>
                        )}
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenuDrawer} className="hover:text-blue-400">
                        {menuDrawerUp ? <X /> : <SquareMenu />}
                    </button>
                    </div>
                    </div>
                    {menuDrawerUp && (
                    <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className="py-3 Capitalize font-semibold space-y-2 text-[#003768]">
                        <li className='hover:overline'>
                        <Link to='/events'>Event Calendar</Link>
                        </li>
                        <li className='hover:overline'>
                        <Link to='/about'>About</Link>
                        </li>
                        <li className='hover:overline'>
                        <Link to='/additional-info'>Additional Information</Link>
                        </li>
                        {user?.role !== 'admin' && (
                        <li className='hover:overline'>
                        <Link to='/work-order'>Work Order</Link>
                        </li>)}
                        {user?.role === 'admin' && (
                        <li className=''>
                        <button onClick={toAdminPortal} className='capitalize hover:overline'>Admin Portal</button>
                        </li>)}
                        {user?.role === 'maintenance' && (
                        <li className='hover:overline'>
                        <Link to='/maintenance-portal'>Maintenance Portal</Link>
                        </li>)}
                        {user?.role === 'employee' && (
                        <li className='hover:overline'>
                        <Link to='/employee-portal'>Employee Portal</Link>
                        </li>)}
                        </ul>
                        {user ? (
                        <div className="space-x-4 flex items-center justify-center">
                        <div className="flex space-x-3 justify-center items-center">
                        <img src={user.img || 'https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'}
                        className="w-10 h-10 rounded-full outline-2"
                        />
                        <span className="text-black font-semibold">{user.username}</span>
                        </div>
                        <button className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700" onClick={handleLogout}>Logout</button>
                        </div>
                        ) : (
                        <div className="space-x-6 flex py-2">
                        <Link to='/login'>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-md">Login</button>
                        </Link>
                        </div>
                        )}
                    </div>)}
                </div>
            </nav>
    )
}

export default Navbar