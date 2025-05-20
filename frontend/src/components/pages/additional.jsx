import Navbar from "../navbar.jsx"
import Footer from "../footer.jsx"
import { ChevronRight } from 'lucide-react';
import FAQ from "../FAQ.jsx";

const Additional = () => {

    return (
        <>
        <Navbar/>
        <div className="w-full bg-[#003768] text-center p-7">
        <h1 className="text-white text-lg w-full font-bold">Campus Recreation</h1>
        <h1 className="text-white text-5xl w-full font-bold">Additional Information</h1>
        </div>
        <div className="w-full overflow-hidden relative">
        <div className="flex justify-center items-center bg-[url(https://www.stmarys-ca.edu/sites/default/files/2024-08/Screenshot%202024-08-20%20at%201.36.48%20PM.png)] bg-cover h-90">
        </div>
        <div className="m-15">
        <h1 className="border-1 mt-1">Interested in making a reservation? <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4m2QN8b5O1jHg4aYw737Uz6vKMyQtekp93qgMkd5ITr385g/viewform">Click here!</a></h1>
        <h1 className="border-1 mt-1">One</h1>        
        <h1 className="border-1 mt-1">One</h1>        
        <h1 className="border-1 mt-1">One</h1>        
        </div>
        </div>
        <div className="w-full justify-center items-center flex-col flex pb-20">
        <img className="justify-center items-center w-50 h-30 mb-10" src="assets/logo2.png"></img>
        <span className="text-4xl font-extrabold text-[#003768]">Quick Links & Resources</span>
        <div className="grid grid-cols-2 w-4/7 gap-4 text-white pt-4 text-lg">
        <a href="https://www.stmarys-ca.edu/offices-services/joseph-l-alioto-recreation-center/fitness-sessions">
        <div className="bg-[#003768] p-3 flex items-center justify-between hover:bg-red-600 transition-colors duration-300 ease-in-out">Check Out Our Fitness Classes <ChevronRight /></div>
        </a>
        <a href="https://secure.touchnet.net/C21320_ustores/web/store_cat.jsp?STOREID=7&CATID=2&SINGLESTORE=true">
        <div className="bg-[#003768] p-3 flex items-center justify-between hover:bg-red-600 transition-colors duration-300 ease-in-out">Purchase a Membership<ChevronRight /></div>
        </a>
        <a href="https://www.stmarys-ca.edu/offices-services/joseph-l-alioto-recreation-center/policies-procedures">
        <div className="bg-[#003768] p-3 flex items-center justify-between hover:bg-red-600 transition-colors duration-300 ease-in-out">Facility Policy & Procedures <ChevronRight /></div>
        </a>
        <a href="https://secure.touchnet.net/C21320_ustores/web/product_detail.jsp?PRODUCTID=211&SINGLESTORE=true">
        <div className="bg-[#003768] p-3 flex items-center justify-between hover:bg-red-600 transition-colors duration-300 ease-in-out">Purchase a Locker Rental <ChevronRight /></div>
        </a>
        </div>
        </div>
        <h1 className="text-4xl text-center font-bold pb-15 text-[#003768]">Frequently Asked Questions</h1>
        <FAQ/>
        <Footer />
        </>
    )
}

export default Additional