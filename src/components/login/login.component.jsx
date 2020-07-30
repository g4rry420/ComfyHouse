import React from 'react'

import "./login.styles.css"
import { signInWithGoogle } from "../../firebase/firebase.utils"
import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import Heading from "../Heading/heading.component"

export default function LogIn() {
    return (
        <div>
            <div className="heading-container-in-login">
                <Heading title="I already have an account" display="display-5" h1="heading-in-login-form" />
                <p className='my-3'>Sign In with your email and password</p>
            </div>
            <form className="mt-5">
                <FormInput type="email" placeholder="Email" />
                <FormInput type="password" placeholder="Password" />
                <div className="text-center d-flex justify-content-around">
                    <div onClick={signInWithGoogle} className="google-login">
                        <CustomButton  type="button" title="Sign In With Google" button="login-button" />
                    </div>
                    <CustomButton title="Login" button="login-button" />
                </div>
            </form>
        </div>
    )
}
