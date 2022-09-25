import React, {useState} from "react"
import "./LoginPage.css"


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
        const user = await getLoginCredentials(this.state.emailId,this.state.password);
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
        </div>
    )
}

export default LoginPage
