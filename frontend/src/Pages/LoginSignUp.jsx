import React from 'react';
import './CSS/LoginSignUp.css';

function LoginSignUp(props) {
    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input type='text' placeholder='Your Full Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
                <div className='loginsignup-agree'>
                    <input type='checkbox' id='agree'/>
                    <label htmlFor='agree'></label>
                    <p>I agree to the Terms & Conditions</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;