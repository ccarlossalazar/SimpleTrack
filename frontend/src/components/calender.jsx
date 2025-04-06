import Footer from "./footer"

const Calender = () => {
    return (
        <>
        <div className="flex justify-center items-center brightness-150 bg-[url(https://www.stmarys-ca.edu/sites/default/files/styles/header_desktop/public/2023-12/Screenshot%202023-12-07%20at%201.01.12%20PM.webp?itok=CS75BdZh)] bg-cover h-90">
        <h1 className="text-white text-5xl">Events</h1>
        </div>
        <h1 className="text-center mt-10 font-semibold text-5xl">Event Calendar</h1>
        <div className="flex justify-center mt-10 mb-10 mx-auto">
        <iframe
          src="https://calendar.google.com/calendar/u/0/embed?src=2dt8cfnagsr93u9io7jq6fg130@group.calendar.google.com&ctz=America/Los_Angeles"
          className="max-w-screen w-350 min-h-200 mx-auto border-2 border-[#003768] rounded-xl"          
        ></iframe>
      </div>
      <Footer/>
      </>
    )
}
export default Calender