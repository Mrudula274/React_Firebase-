import React, { useState } from 'react';

const SignInPage = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
         <div className='signin-page'>
            <h1>Sign In Page</h1>
            <label>Enter your email</label>
            <input type="email" placeholder="Enter your email here"/>
            <label>Enter your password</label>
            <input type="password" placeholder="Enter your password"/>
            <button>Sign me in</button>
         </div>
    );
};

export default SignInPage;