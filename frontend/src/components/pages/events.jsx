import Navbar from "../navbar"
import Calender from "../calender.jsx"
import {Link} from "react-router-dom"
import Footer from "../footer.jsx"
import Calender2 from "../calender2.jsx"

const Events = () => {
    return (
        <>
        <Navbar/>
        <div className="w-full bg-[#003768] text-center p-7">
        <h1 className="text-white text-lg w-full">Campus Recreation</h1>
        <h1 className="text-white text-5xl w-full">Calender & Events</h1>
        </div>
        <div className="flex justify-center items-center brightness-150 bg-[url(https://www.stmarys-ca.edu/sites/default/files/styles/header_desktop/public/2023-12/Screenshot%202023-12-07%20at%201.01.12%20PM.webp?itok=CS75BdZh)] bg-cover h-90">
        </div>
        <div>
        <h1 className="text-center mt-10 font-semibold text-5xl">Event Calendar</h1>
        <h1 className="mx-30 mt-10 indent-6 text-lg font-semibold">Stay up to date with everything happening at our Campus Rec Center! This calendar 
          highlights upcoming events, fitness classes, facility reservations, and special 
          programs. It’s a great way to see what’s scheduled and get a feel for how busy 
          certain areas of the rec center may be throughout the day.

          Planning to drop by? Checking the calendar can help you avoid peak times and better
           plan your workout or visit.

          Interested in reserving space for your own activity or joining one of our classes
           or events? You can go to our <Link to="/additional-info" className="text-blue-600 underline hover:text-red-800">additional information</Link> section to reserve or contact us for more information.
            Whether you're looking to participate or host, this is your go-to tool for staying
             connected with what's happening in our community!</h1>
            </div>
        <Calender/>
        <Calender2/>
        <Footer/>
        </>
    )
}

export default Events