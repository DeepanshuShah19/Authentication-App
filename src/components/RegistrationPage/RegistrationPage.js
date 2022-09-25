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

    const signUp = async () => {
        console.log("in signUp");
        const newUser = await addNewUser(this.state.emailId,this.state.password,this.state.name,this.state.username)
        // console.log("Added details: ",newUser);
        if (newUser != null && newUser.statuscode === 200) {
          this.setState({justifyActive:'tab1'})
        } else {
          console.log("already regestered");
        }
      }
    
    return (
        <div className="RegistrationPage">
            <h1>Register</h1>
            {console.log("User",user)}
            <input type="text" name="name" value={user.name}placeholder="Your Name" onChange={ handleChange } ></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" value={user.password} name="password" placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" value={user.reEnterPassword} name="reEnterPassword" placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={signUp}>Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default RegistrationPage