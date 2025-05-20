import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-[#003768] min-w-full relative">        
        <div className="flex p-4 items-center">
        <img src="https://www.stmarys-ca.edu/sites/default/files/2023-08/230330_SMC%20logos_FINAL-01.png" className="w-40 h-30 p-5"/>
        <div className="text-white font-semibold pl-5">
        <h1>1928 St. Mary's Rd</h1>
        <h1> Moraga, CA 94575</h1>
        <h1>(925) 631-4000</h1>
        </div>
        </div>
        <div className="absolute bottom-5 right-5">
        <Link to='/login'>
        <button className="text-white text-lg hover:text-blue-400">Login</button>
        </Link>
        </div>
        </div>
     ) }

export default Footer