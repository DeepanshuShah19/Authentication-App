import React, {useState} from "react"
import "./RegistrationPage.css"

const RegistrationPage = () => {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    return (
        <div className="RegistrationPage">
            <h1>Register</h1>
            {console.log("User",user)}
            <input type="text" name="name" value={user.name}placeholder="Your Name" onChange={ handleChange } ></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" value={user.password} name="password" placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" value={user.reEnterPassword} name="reEnterPassword" placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default RegistrationPage