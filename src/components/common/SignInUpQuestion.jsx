import React from 'react'
import { Link } from 'react-router-dom';
import classes from './styles/SignInUpQuestion.module.css'
const SignInUpQuestion = (props) =>
{
    const { type } = props;
    return (
        <div className={classes.container}>
            {type === "login" ? (
                <>
                    <span>Don't have an account yet?</span>
                    <Link to="/signup">Sign up</Link>
                </>

            ) : (<>
                <span>Already have an account?</span>
                <Link to="/login">Sign in</Link>
            </>)}

        </div>
    )
}

export default SignInUpQuestion