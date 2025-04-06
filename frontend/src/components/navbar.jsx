
import Logo from '/src/assets/logo.png'
import { SquareMenu, X } from "lucide-react"
import { useState, useContext } from "react"
import {Link } from 'react-router-dom'
import { AuthContext } from "../context/authContext.jsx"

const Navbar = () => {
const [menuDrawerUp, setMenuDrawerUp] = useState(false)
    
const toggleMenuDrawer = () => {
        setMenuDrawerUp(!menuDrawerUp)
    }

  const { user } = useContext(AuthContext)


    return (
        <nav className="sticky top-0 z-50 py-8 backdrop-blur-xl border-b border-[#003768] bg-opacity-90">
            <div className="px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <Link to='/'>
                    <div className="flex items-center flex-shrink-0">
                    <button><img className="h-15 w-15" src={Logo} alt="logo"/></button>
                    <span className="text-2xl tracking-tight font-bold font-serif">SimpleTrack</span>
                    </div>
                    </Link>
                    <div className="uppercase items-end font-bold">
                        <ul className="hidden lg:flex ml-14 space-x-12 text-lg text-[#003768]">
                        <li>
                        <Link to='/events'><a href="#">Event Calendar</a></Link>
                        </li>
                        <li>
                        <Link to='/about'><a>About</a></Link>
                        </li>
                        <li>
                        <a>Additional Information</a>
                        </li>
                        </ul>
                        </div>
                        {user ? user.username : (
                    <div className="hidden lg:flex justify-center space-x- items-center">
                    <Link to='/login'>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-lg text-xl">Login</button>
                    </Link>
                    </div>
                        )}
                    <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenuDrawer}>
                        {menuDrawerUp ? <X /> : <SquareMenu />}
                    </button>
                    </div>
                    </div>
                    {menuDrawerUp && (
                    <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className="py-3 uppercase font-semibold">
                        <li>
                        <a href="#">Event Calender</a> 
                        </li>
                        <li>
                        <Link to='/about'><a>About</a></Link>
                        </li>
                        <li>
                        <a>Additional Information</a>
                        </li>
                        </ul>
                        {user ? user.username : (
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