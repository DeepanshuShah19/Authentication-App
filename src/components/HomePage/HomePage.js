import { Grid } from "@material-ui/core";
import React, { Component } from "react"
import "./HomePage.css"
import LoginRegestration from '../Loginregestration';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            uname: '',
            phone: '',
            email: '',
            logout: false
        }
    }
    async componentDidMount() {
        this.setState({
            name: this.props.name,
            uname: this.props.username,
            email: this.props.email
        })
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        }, () => {
            // this.handleFormValidation();  
        });
    };

    edit = async () => {
        this.setState({
            phone : this.state.phone
        })
    }

    logout = async () => {
        this.setState({ logout: true })
    }

    render() {
        return (
            <Grid>
                {this.state.logout ? (<LoginRegestration />) :
                    <div className="HomePage" align="center" position="center">
                        <h1>Profile</h1>

                        <input type="text" id="name" value={this.state.name} disabled></input>
                        <input type="text" id="uname" value={this.state.uname} disabled></input>
                        {/* <input type="text" name="Bio"  placeholder="Enter your Information" ></input> */}
                        <input type="text" id="phone" placeholder="Enter your Phone Number" value={this.state.phone} onChange={this._handleChange}></input>
                        <input type="text" id="email" value={this.state.email} disabled></input>
                        {/* <input type="Password" name="Password" placeholder="Password"></input> */}
                        <div className="button" onClick={this.edit}>Edit</div>
                        <div className="button" onClick={this.logout}>Logout</div> 
                    </div>
                }
            </Grid>
                    
        )
    };

};

export default HomePage;