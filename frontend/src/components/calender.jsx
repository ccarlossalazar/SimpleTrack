import Footer from "./footer"
import {Link} from "react-router-dom"

const Calender = () => {
    return (
        <>        
        <div className="flex justify-center">
        <iframe
          src="https://calendar.google.com/calendar/u/0/embed?src=2dt8cfnagsr93u9io7jq6fg130@group.calendar.google.com&ctz=America/Los_Angeles"
          className="max-w-screen w-350 min-h-200 m-10 border-2 border-[#003768] rounded-xl bg-blue-50"          
        ></iframe>
      </div>
      </>
    )
}
export default Calender