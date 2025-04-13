import Navbar from "../navbar.jsx"


const Additional = () => {
    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center bg-[url(https://www.stmarys-ca.edu/sites/default/files/2024-08/Screenshot%202024-08-20%20at%201.36.48%20PM.png)] bg-cover h-90">
        <h1 className="text-white text-5xl">Additional Information</h1>
        </div>
        <div className="m-15">
        <h1 className="border-1 mt-1">Interested in making a reservation? <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4m2QN8b5O1jHg4aYw737Uz6vKMyQtekp93qgMkd5ITr385g/viewform">Click here!</a></h1>
        <h1 className="border-1 mt-1">One</h1>        
        <h1 className="border-1 mt-1">One</h1>        
        <h1 className="border-1 mt-1">One</h1>        
        </div>
        </>
    )
}

export default Additional