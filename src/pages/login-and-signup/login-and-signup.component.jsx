import React from 'react'

import "./login-and-signup.styles.css"
import LogIn from '../../components/login/login.component'
import SignUp from '../../components/signup/signup.component'

export default function LoginAndSignupPage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <LogIn />
                </div>

                <div className="col-md-5 ml-5">
                    <SignUp />
                </div>
            </div>
        </div>
    )
}
