import React, { useState } from 'react';

import './login.scss';
import Button from '../../ui/button/uiButton';

const Login = (props: any) => {

    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
    const [enteredPassword, setEnteredPassword] = useState<string>('');
    const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    const emailChangeHandler = (event: any) => {
        console.log('emailChangeHandler');
        setEnteredEmail(event.target.value);

        setFormIsValid(
        event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const passwordChangeHandler = (event: any) => {
        console.log('passwordChangeHandler')
        setEnteredPassword(event.target.value);

        setFormIsValid(
        event.target.value.trim().length > 6 && enteredEmail.includes('@')
        );
    };

    const validateEmailHandler = () => {
        console.log('validateEmailHandler')
        console.log('set enteredEmail', enteredEmail)
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        console.log('validatePasswordHandler')
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event: any) => {
        console.log('submitHandler')
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <div className="login">
        <form onSubmit={submitHandler}>
            <div
            className={`control ${
                emailIsValid === false ? 'invalid' : ''
            }`}
            >
            <label htmlFor="email">E-Mail</label>
            <input
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
            />
            </div>
            <div
            className={`control ${
                passwordIsValid === false ? 'invalid' : ''
            }`}
            >
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
            />
            </div>
            <div className='actions'>
            <Button 
                type="submit" className='btn'
                disabled={!formIsValid}
            >
                Login
            </Button>
            </div>
        </form>
        </div>
    );
};

export default Login;
