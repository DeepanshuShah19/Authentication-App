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

    return (
        <div className = "LoginPage">
            <h1>Login</h1>
            {console.log("User",user)}
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password"  value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" >Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default LoginPage
