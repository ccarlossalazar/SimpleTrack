import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react"
import {Link} from 'react-router-dom'
import axios from 'axios'


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, userInfo] = useState({})
 
  const handleChange = (e) => {
    userInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
  }

  const handleClick = async (e) => {
    e.preventDefault();
  
    let imageUrl = null;
  
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
  
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dhslsmpkl/image/upload",
          data
        );
        imageUrl = uploadRes.data.url;
      } catch (err) {
        console.error("Image upload failed:", err.message);
        return; 
      }
    }
  
    const newUser = {
      ...info,
      img: imageUrl,
    };
  
    try {
      console.log("New User Payload:", newUser);
      await axios.post("http://localhost:5000/auth/register", newUser);
      window.location.href = "/users";
    } catch (err) {
      console.error("Register Error:", err.message);
    }
  };
  


  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form className="relative">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input className="focus-within:outline-none" onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id}/>
                </div>
              ))}
                          <div className="formInput">
             <label>Role:</label>
              <select className="border-b border-b-gray-400 focus-within:outline-none focus:border-b-blue-500 focus:border-b-2" id="role" onChange={handleChange} defaultValue="">
               <option value="" disabled>Select condition</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
              <div className="absolute right-5 bottom-0 border-2 p-2 text-green-500 rounded-lg hover:bg-green-200" onClick={handleClick}>Send</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
