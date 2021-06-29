import React, { useEffect } from 'react'
import "../Css/Login.css"
import ReactGoogleLogin from "react-google-login";
import {googleLogin} from '../req'


function Login() {


    function responseGoogle(response) {
        console.log(response)
        localStorage.setItem('author',response.profileObj.email)
        googleLogin(response.accessToken);
        
      }

    return (

        <div className="login">
            <div className="contain">
                <div className="header-text">
                    <p>Login to <span className="logo">LineMaro</span> Chat app</p>
                </div>
                <div className="login-with">
                    <ReactGoogleLogin
                        clientId="1077743590467-8k4pec4emqdmmo2j8aoi78ndcnkcpfcr.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </div>
            </div>
        </div>

    )
}

export default Login