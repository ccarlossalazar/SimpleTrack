import Navbar from '../navbar.jsx'
import useFetch from '../../hooks/useFetch'
import Footer from '../footer.jsx'

const HomePage = () => {

    const {data,loading} = useFetch("/equipment/countByLocation?locations=Cardio+1,Cardio+2,Cardio+3")

    return (
      <>
      <Navbar/>
      <div className='flex flex-col justify-center items-center brightness-70 bg-center bg-[url(https://www.stmarys-ca.edu/sites/default/files/2023-02/rec_center_01.jpg)] bg-cover h-125'>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl pb-5 text-[#003768]">
            Saint Mary's Campus Recreation
          </p>
          <img src="/assets/logo.png" className='pb-10 size-fit'/>
          </div>
      {loading ? ("Loading Please Wait!") : (<>
        <h1>Welcome to the Home Page</h1>
        <p>This is the landing page for the web app.</p>
        <h1>This is how many Cardio 1 machines {data[0]}</h1>
        <h1>This is how many Cardio 2 machines {data[1]}</h1>
        <h1>This is how many Cardio 3 machines {data[2]}</h1></>)}
      <Footer />
      </>
    )
  }
  
  export default HomePage