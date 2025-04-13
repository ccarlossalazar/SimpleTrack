import Navbar from '../navbar.jsx'
import useFetch from '../../hooks/useFetch'
import Footer from '../footer.jsx'

const HomePage = () => {

    const {data,loading} = useFetch("/equipment/countByLocation?locations=Cardio+1,Cardio+2,Cardio+3")

    return (
      <>
      <Navbar/>
      <div className='flex flex-col not-first:justify-center items-center brightness-85 bg-center bg-[url(https://www.stmarys-ca.edu/sites/default/files/2023-02/rec_center_01.jpg)] bg-cover h-100'>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl pb-5 text-[#003768]">
            Saint Mary's Campus Recreation
          </p>
          <img src="/assets/logo.png" className='pb-10 size-fit'/>
          </div>
          <h1 className='text-5xl font-semibold text-center'>Layout</h1>
          <div className='flex flex-col justify-center items-center m-10'>
          <img src="/assets/floorplan.jpg" className='border-3 object-fit brightness-90'></img>
          </div>
      {loading ? ("Loading Please Wait!") : (<>
      <div className='flex flex-col justify-center items-center'>
        <h1>Equipment</h1>
        <table class="table-auto bg-gray-400 m-5 w-200">
      <thead>
        <tr>
          <th>Location</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cardio 1</td>
          <td>{data[0]}</td>
        </tr>
        <tr>
          <td>Cardio 2</td>
          <td>{data[1]}</td>
        </tr>
        <tr>
          <td>Cardio 3</td>
          <td>{data[2]}</td>
        </tr>
      </tbody>
      </table></div></>)}
      <Footer />
      </>
    )
  }
  
  export default HomePage