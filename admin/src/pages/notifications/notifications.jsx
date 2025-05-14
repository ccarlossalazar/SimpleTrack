import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"

const Notifications = () => {
    return(
        <div className="flex w-full">
        <Sidebar/>
        <div className="flex-6">
          <Navbar/>
          <div className="flex flex-col items-center">
        <div className="bg-red-200">
        <span>Notifications Page</span>
        </div>
          </div>
        </div>
      </div>
    )
}

export default Notifications