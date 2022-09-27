import React, { Component } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { getLoginCredentials, addNewUser } from '../utils/backend'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import HomePage from './HomePage/HomePage'
import { Redirect, Navigate } from 'react-router-dom';
import { Grid} from '@material-ui/core';

var eid;
var pwd;
var name;
var uname;
class LoginRegestration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            justifyActive: 'tab1',
            emailId: '',
            password: '',
            name: '',
            username: '',
            googleRegestration: false,
            googlelogin: false,
            loginSuccess: false,
            redirect: false,
        };
    }

    handleJustifyClick = (value) => {
        this.setState({
            justifyActive: value
        })
    };

    _handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    signIn = async () => {
        console.log("in signIn");
        const user = await getLoginCredentials(this.state.emailId, this.state.password);
        console.log("user details: ", user);
        if (user != null) {
            if (user.password === this.state.password) {
                console.log("successfully logged in");
                this.setState({ redirect: true })
            } else {
                console.log("Invalid emailId and password");
            }
        }
    }
    googleSignIn = async () => {
        console.log("in signIn");
        const user = await getLoginCredentials(eid, pwd);
        console.log("user details: ", user);
        if (user != null) {
            console.log("Successful")
            this.setState({ redirect: true })
        }
    }

    signUp = async () => {
        console.log("in signUp");
        var newUser = await addNewUser(this.state.emailId, this.state.password, this.state.name, this.state.username)
        if (newUser) {
            this.setState({ justifyActive: 'tab1' })
        }
    }
    googleSignUp = async () => {
        console.log("in signUp");
        var newUser = await addNewUser(eid, pwd, name, uname)
        if (newUser) {
            this.setState({ justifyActive: 'tab1' })
        }
    }

    render() {
        const loginSuccess = this.state.loginSuccess;
        return (
            <Grid>
                 { this.state.redirect ? (<HomePage/>) :
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                    <MDBTabs pills justify className='mb-3 flex-row justify-content-between'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => this.handleJustifyClick('tab1')} active={this.state.justifyActive === 'tab1'}>
                                Login
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => this.handleJustifyClick('tab2')} active={this.state.justifyActive === 'tab2'}>
                                Register
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>

                        <MDBTabsPane show={this.state.justifyActive === 'tab1'}>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='emailId' type='email' onChange={this._handleChange} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={this._handleChange} />


                            <MDBBtn className="mb-4 w-100 " onClick={this.signIn}>Sign in</MDBBtn>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <GoogleOAuthProvider clientId="635695181698-78ah1onbv4ncnla7n6o05k9a2faq7e6q.apps.googleusercontent.com">
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            console.log("Login Successful");
                                            console.log(credentialResponse.credential);
                                            const jwt = jwt_decode(credentialResponse.credential);
                                            console.log("EmailID: ", jwt)
                                            eid = jwt.email;
                                            pwd = 'google';
                                            this.googleSignIn();
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />
                                </GoogleOAuthProvider>
                            </div>

                        </MDBTabsPane>

                        <MDBTabsPane show={this.state.justifyActive === 'tab2'}>

                            <MDBInput wrapperClass='mb-4' label='Name' id='name' type='text' onChange={this._handleChange} />
                            <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' onChange={this._handleChange} />
                            <MDBInput wrapperClass='mb-4' label='Email' id='emailId' type='email' onChange={this._handleChange} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={this._handleChange} />

                            <MDBBtn className="mb-4 w-100" onClick={this.signUp} >Sign up</MDBBtn>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <GoogleOAuthProvider clientId="635695181698-78ah1onbv4ncnla7n6o05k9a2faq7e6q.apps.googleusercontent.com">
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            console.log("Regestration Successful");
                                            console.log(credentialResponse.credential);
                                            const jwt = jwt_decode(credentialResponse.credential);
                                            console.log("EmailID: ", jwt)
                                            eid = jwt.email;
                                            pwd = 'google';
                                            name = jwt.given_name;
                                            uname = jwt.family_name;
                                            this.googleSignUp()
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />
                                </GoogleOAuthProvider>
                            </div>
                        </MDBTabsPane>

                    </MDBTabsContent>

                </MDBContainer> }
            </Grid>

        );
    }
}

export default LoginRegestration;