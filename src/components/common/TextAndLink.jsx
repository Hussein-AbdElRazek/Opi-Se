import React from 'react'
import { Link, useParams } from 'react-router-dom';
import classes from './styles/TextAndLink.module.css'
export const TextAndLink = (props) =>
{
    const { type } = props;
    const { userType } = useParams();

    return (
        <div className={classes.container}>
            {type === "login" ? (
                <>
                    <span>Don't have an account yet?</span>
                    <Link to={`/${userType}/signup`}>Sign up</Link>
                </>
            ) :
                type === "signup" ? (
                    <>
                        <span>Already have an account?</span>
                        <Link to={`/${userType}/login`}>Sign in</Link>
                    </>
                ) :
                    <>
                        <span>Back to</span>
                        <Link to={`/${userType}/login`}>Sign in</Link>
                    </>
            }
        </div>
    )
}