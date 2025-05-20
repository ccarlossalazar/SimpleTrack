import Footer from "../footer.jsx"
import TeamSection from "../team.jsx"
import Navbar from "../navbar.jsx"
import { Diamond } from 'lucide-react';

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="w-full bg-[#003768] text-center p-7">
        <h1 className="text-white text-lg w-full font-bold">About</h1>
        <h1 className="text-white text-5xl w-full font-bold">Campus Recreation</h1>
        </div>
        <div className="bg-blur-sm flex justify-center items-center bg-[url(https://www.stmarys-ca.edu/sites/default/files/styles/header_desktop/public/2024-12/JARC%2012-2021%20rharper-129%20%281%29.webp?itok=-WlaXZJX)] bg-cover h-90">
        </div>
        <div className="pt-20 pb-10 mx-30 text-lg font-semibold">
        <h1 className="font-bold text-4xl pb-5 text-[#003768]">Our Vision</h1>
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
        <div className="pt-20 pb-10 mx-50 flex-col">
        <h1 className="font-bold text-4xl pb-5 text-[#003768]">Our Values</h1>
        <ul className="text-lg flex w-full flex-col justify-start items-start space-y-2">
        <li className="flex justify-center items-center gap-2"><Diamond className="size-3 text-red-600"/> <b>Integrity</b>- We uphold a culture of honesty, respect, trust, fairness, and responsibility.</li>    
        <li className="flex justify-center items-center gap-2"><Diamond className="size-3 text-red-600"/> <b>Wellness</b>- We model and inspire lifestyles that encourage lifelong health and well-being.</li> 
        <li className="flex justify-center items-center gap-2"><Diamond className="size-3 text-red-600"/> <b>Excellence</b>- We operate our programs and facilities at the highest of safety, quality, and customer service.</li>    
        <li className="flex justify-center items-center gap-2"><Diamond className="size-3 text-red-600"/> <b>Diversity</b>- We create an environment that values, embraces, and enriches individual differences by providing programs, 
        services, and staff that reflect our mission.</li>    
        <li className="flex justify-center items-center gap-2"><Diamond className="size-3 text-red-600"/> <b>Leadership</b>- We encourage initiative and responsibility. We provide programs and opportunities that allow for leadership development.</li>    
        <li className="flex justify-center items-center gap-2"><Diamond className="size-3 text-red-600"/> <b>Accountability</b>- We inspire ownership in the department. Operate in a fiscally, ethically, and safe responsible manner.</li> 
        </ul>
        </div>
        <TeamSection />
        <Footer />
        </>
    )
}

export default About