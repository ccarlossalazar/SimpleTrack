
import Logo from '/src/assets/logo.png'
import { SquareMenu, X } from "lucide-react"
import { useState, useContext } from "react"
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext.jsx"

const Navbar = () => {
const [menuDrawerUp, setMenuDrawerUp] = useState(false)
    
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

    return (
        <nav className="sticky top-0 z-50 py-8 backdrop-blur-xl border-b border-[#003768] bg-opacity-90">
            <div className="px-4 mx-auto relative text-sm">
                <div className="flex items-center">
                    <div className='flex justify-between items-center'>
                    <Link to='/'>
                    <div className="flex items-center flex-shrink-0">
                    <button><img className="h-15 w-15" src={Logo} alt="logo"/></button>
                    <span className="text-2xl tracking-tight font-bold font-serif">SimpleTrack</span>
                    </div>
                    </Link>
                    </div>
                    <div className="uppercase font-bold">
                        <ul className="hidden lg:flex ml-14 space-x-12 text-lg text-[#003768]">
                        <li>
                        <Link to='/events'>Event Calendar</Link>
                        </li>
                        <li>
                        <Link to='/about'>About</Link>
                        </li>
                        <li>
                        <Link to='/additional-info'>Additional Information</Link>
                        </li>
                        {user?.role === 'admin' && (
                        <li>
                        <button onClick={toAdminPortal} className='uppercase'>Admin Portal</button>
                        </li>)}
                        {user?.role === 'maintenance' && (
                        <li>
                        <Link to='/maintenance-portal'>Maintenance Portal</Link>
                        </li>)}
                        {user?.role === 'employee' && (
                        <li>
                        <Link to='/employee-portal'>Employee Portal</Link>
                        </li>)}
                        </ul>
                        </div>
                    <div className=''>
                        {user ? (
                        <div className="space-x-4 flex items-center">
                        <span className="text-black font-semibold bg-blue-600 p-2 rounded-2xl">{user.username}</span>
                        <button className=" bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md" onClick={handleLogout}>Logout</button>
                        </div>
                        ) : (
                    <div className="hidden lg:flex justify-center space-x- items-center">
                    <Link to='/login'>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-lg text-xl">Login</button>
                    </Link>
                    </div>
                        )}
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenuDrawer}>
                        {menuDrawerUp ? <X /> : <SquareMenu />}
                    </button>
                    </div>
                    </div>
                    {menuDrawerUp && (
                    <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className="py-3 uppercase font-semibold space-y-2 text-[#003768]">
                        <li className='hover:overline'>
                        <Link to='/events'>Event Calendar</Link>
                        </li>
                        <li className='hover:overline'>
                        <Link to='/about'>About</Link>
                        </li>
                        <li className='hover:overline'>
                        <Link to='/additional-info'>Additional Information</Link>
                        </li>
                        {user?.role === 'admin' && (
                        <li className='hover:overline'>
                        <button onClick={toAdminPortal} className='uppercase'>Admin Portal</button>
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
                        <div className="space-x-4 flex items-center">
                        <span className="text-black font-semibold bg-blue-600 p-2 circle">{user.username}</span>
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