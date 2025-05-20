import Navbar from '../../navbar.jsx'
import FloorPlan from '../../layout/floorplan.jsx'
import Footer from '../../footer.jsx'
import EquipmentTable from '../../equipmentTable.jsx'
import HeroSection from '../../herosection.jsx'
import FacilityInfo from '../../../aboutfacility.jsx'
import Social from "../../social.jsx"

const HomePage = () => {

    return (
      <>
      <Navbar/>
      <div className='bg-[url(textured-backgrounds/textured-background-1.png)] bg-cover justify-center space-x-55 md:flex p-10 md:pt-30 pb-30 items-center'> 
      <div className='flex-col not-first:justify-center items-center flex'>
      <p className="mx-auto max-w-lg text-center font-bold tracking-tight sm:text-5xl pb-5 text-[#003768] font-">
            Saint Mary's Campus Recreation
          </p>
      <img src="/assets/logo.png" className=''/>
        <p className='text-4xl text-center pt-10 text-[#003768] font-bold'>Visit us here!</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.831781622668!2d-122.11207289999999!3d37.8408238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f89bc75eb3347%3A0x671589debc2e35ed!2sJoseph%20Alioto%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1746569781320!5m2!1sen!2sus" width="700" height="550" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="shadow-2xl"></iframe>
      </div>
      <FacilityInfo/>
      <div className='bg-[url(textured-backgrounds/textured-background-2.png)] bg-cover rounded-tr-full p-30 mt-10 rounded-bl-xl'>
      <h1 className='text-center text-5xl text-[#003768] font-bold'>Explore Our Facility</h1>
      <HeroSection/>
      </div>
      <div className='flex-col p-20 bg-[url(textured-backgrounds/textured-background-5.png)] w-full gap-10'>
      <h1 className='text-center text-5xl text-[#003768] font-bold mb-10'>Explore Our Facility</h1>
      <div className='flex gap-10'>
      <FloorPlan />
      <div className='w-5/7 bg-red-200'>
      <h1>Hello</h1>
      </div>
      </div>
      <h1 className='text-center text-5xl text-[#003768] font-bold m-20'>Check Out Our Equipment</h1>
      <div className='flex p-4 w-full'>
      <div className='w-3/7 bg-red-300'>
        <h1>Our Facility</h1>
      </div>
      <div className='w-3/4 h-full'>
      <EquipmentTable />
      </div>
      </div>
      </div>
      <div className='text-center'>
      <h1 className="text-5xl font-bold text-[#003768] mt-20">Follow us on Instagram!</h1>
      <div className='p-20'>
      <Social />
      </div>
      </div>
      <Footer />
      </>
    )
  }
  
  export default HomePage