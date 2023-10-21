import React from 'react'
import { useNavigate } from 'react-router-dom';

import useHttp from '../../../hooks/use-http';
import SignUpUi from './SignUpUi';

const SignUp = () =>
{
    const navigate = useNavigate();
    const {
        isLoading: isLoadingSignUp,
        sendRequest: signUp
    } = useHttp();
    const handleSignUp = (values) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                navigate("/login", { replace: true });
            }
        };
        signUp(
            {
                url: "signUp",
                method: "POST",
                body: values,
            },
            getResponse
        );
    }
    return (
        <SignUpUi
            isLoadingSignUp={isLoadingSignUp}
            handleSignUp={handleSignUp}
        />
    )
}

export default SignUp