import React from "react";
import LogoComponent from '../../components/logo/logo'
import './signup.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
const SignUp = () =>{
    return(
        <div className="container-signup">
            <div className="signup-header">
                <LogoComponent/>
            </div>
            <div className="signup-content">
            <div className="signup-title">
                <p className="main-title">
                    Sign Up
                </p>
                <p className="sub-title">Create an account to continue and connect with the people.</p>
            </div>
            <div>
             <div className="signup-Oauth2">
                <div className="container-signup-Oauth2">
                    <div className="signup-facebook">
                        <div className="container-signup-facebook">
                        <FontAwesomeIcon icon={faFacebook} className="icon-facebook"/> &emsp;
                        <p className="facebook">Log in with  Facebook</p>
                        </div>
                    </div>
                    <div className="signup-google">
                        <div className="container-signup-google">
                        <FontAwesomeIcon icon={faGoogle} className="icon-google"/> &emsp;
                        <p className="google">Log in with  Google</p>
                        </div>
                    </div>
                </div>
             </div>
            </div>
            </div>
        </div>
    )
}
export default SignUp