import Footer from "../footer.jsx"
import HeroSection from "../herosection.jsx"
import TeamSection from "../team.jsx"
import Navbar from "../navbar.jsx"
import Social from "../social.jsx"

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="bg-blur-sm flex justify-center items-center bg-[url(https://www.stmarys-ca.edu/sites/default/files/styles/header_desktop/public/2024-12/JARC%2012-2021%20rharper-129%20%281%29.webp?itok=-WlaXZJX)] bg-cover h-90">
        <h1 className="text-white text-5xl">About</h1>
        </div>
        <div className="pt-20 pb-10 mx-10 text-lg font-semibold">
        <h1>The JARC was created as a place to gather; great for exercising, socializing, and 
            learning something new. The facility offers a NCAA certified swimming pool and hydro-spa, 
            a state of the art climbing wall with new and challenging routes updated throughout the year, 
            and three indoor courts with basketball, soccer, and volleyball amenities.
        </h1>
        <br></br>
        <h1>Cardio and strength training equipment, in addition to rooms for yoga, dance, fitness, and spin classes 
            provide plenty of choices for our SMC community to enjoy. All students currently enrolled in SMC classes
            have access to the facility. Faculty/Staff and Affiliates are encouraged to explore their membership options.
        </h1>
        </div>
        <h1 className="text-center text-5xl text-[]">Facility Ammenities</h1>
        <HeroSection />
        <TeamSection />
        <Social />
        <Footer />
        </>
    )
}

export default About