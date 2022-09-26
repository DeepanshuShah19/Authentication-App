import React from "react"
import "./HomePage.css"

const HomePage = () => {    
    return (
        <div className = "HomePage">
            <h1>Profile</h1>
            <input type="text" name="Name" placeholder="Enter your Name"></input>
            <input type="text" name="Bio"  placeholder="Enter your Information" ></input>
            <input type="text" name="Phone Number"  placeholder="Enter your Phone Number" ></input>
            <input type="text" name="Email ID" placeholder="Email ID"></input>
            <input type="Password" name="Password" placeholder="Password"></input>
            <div className="button">Edit</div>
            <div className="button">Logout</div>
        </div>
    )
}

export default HomePage