import React, {useState} from "react"
import "./LoginPage.css"
import { getLoginCredentials } from "../../utils/backend"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signIn = async () => {
        console.log("in signIn");
        const user = await getLoginCredentials(user.email,user.password);
        console.log("user details: ",user);
        if (user != null) {
          if (user.password === this.state.password) {
            console.log("successfully logged in");} else {
            console.log("Invalid emailId and password");
          }
        }
      }

    return (
        <div className = "LoginPage">
            <h1>Login</h1>
            {console.log("User",user)}
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password"  value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={signIn}>Login</div>
            <div>or</div>
            <div className="button" >Register</div>
            <GoogleOAuthProvider clientId="635695181698-78ah1onbv4ncnla7n6o05k9a2faq7e6q.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default LoginPage
