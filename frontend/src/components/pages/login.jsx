import React from 'react'
import './login.css'
import {Mail, Lock, User} from 'lucide-react'

function Login() {
     return (
        <div className="login">
            <div className="top">
            <div className="text">Sign In</div>
            <div className="underline"></div>
            </div>  
            <div className="inputs">
                <div className="input">
                    <User />
                    <img src="" alt=""></img>
                    <input type="text" placeholder="Username" />
                </div> 
                <div className="input">
                    <Mail />
                    <img src="" alt=""></img>
                    <input type="email" placeholder="Email"  />
                </div> 
                <div className="input">
                    <Lock />
                    <img src="" alt=""></img>
                    <input type="password" placeholder="Password"  />
                </div> 
            </div>
            <div className="submit-container">
            <div className="submit">Login</div>
            </div>        
        </div>
     )
}
export default Login