import React,{ useState, useContext } from 'react'
import { Redirect } from "react-router-dom"

import "./login.styles.css"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"
import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import Heading from "../Heading/heading.component"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

export default function LogIn({ state }) {
    const { currentUser } = useContext(ShopProductsContext);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = login;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error)
        }

        setLogin({ email: "", password: "" });
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setLogin({...login, [name]: value});
    }

    const { email, password } = login;


    if(state !== undefined){
        if(state.previousPath === "/checkout" && currentUser){
            return <Redirect to="/checkout" />
        }else if(currentUser){
            return <Redirect to={state.previousPath} />
        }else{
            if(currentUser) return <Redirect to="/" />
        }
    }



    return (
        <div>
            <div className="heading-container-in-login">
                <Heading title="I already have an account" display="display-5" h1="heading-in-login-form" />
                <p className='my-3'>Sign In with your email and password</p>
            </div>
            <form className="mt-5" onSubmit={handleSubmit}>
                <FormInput name="email" handleChange={handleChange} value={email} type="email" placeholder="Email" />
                <FormInput name="password" handleChange={handleChange} value={password} type="password" placeholder="Password" />
                <div className="text-center d-md-flex justify-content-around both-buttons-container">
                    <div onClick={signInWithGoogle} className="google-login">
                        <CustomButton  type="button" title="Sign In With Google" button="login-button" />
                    </div>
                    <CustomButton title="Login" button="login-button" />
                </div>
                <div className="test-container text-center mt-5">
                    <h4 className="display-4">Test Credentails</h4>
                    <h5 className="display-4">Email: test@user.com</h5>
                    <h5 className="display-4">Password: 1234567</h5>
                </div>
            </form>
        </div>
    )
}
