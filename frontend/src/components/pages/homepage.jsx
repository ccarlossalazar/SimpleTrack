import Navbar from '../navbar.jsx'
import useFetch from '../../hooks/useFetch'

const HomePage = () => {

    const {data,loading, error} = useFetch("http://localhost:5000/equipment/countByType?locations=Cardio+1,Cardio+2,Cardio+3")

    console.log(data)
    return (
      <div>
        {loading ? ("Loading Please Wait!") : (<><Navbar/>
        <h1>Welcome to the Home Page</h1>
        <p>This is the landing page for the web app.</p>
        <h1>This is how many Cardio 1 machines {data[0]}</h1>
        <h1>This is how many Cardio 2 machines {data[1]}</h1>
        <h1>This is how many Cardio 3 machines {data[2]}</h1></>)}
      </div>
    );
  };
  
  export default HomePage;