import React from 'react'
import { useNavigate } from 'react-router-dom';

import useHttp from '../../../hooks/use-http';
import SignUpUi from './SignUpUi';
import { useSnackbar } from 'notistack';
import { clearArrayOfObjects } from '../../../helpers/clearArrayOfObjects';

const SignUp = () =>
{
    const navigate = useNavigate();
    const { enqueueSnackbar: popMessage } = useSnackbar();

    const {
        isLoading: isLoadingSignUp,
        sendRequest: signUp
    } = useHttp();
    const handleSignUp = (values) =>
    {
        let submitData = { ...values };
        submitData.languages = clearArrayOfObjects(submitData.languages)
        if (!submitData.nationalId)
        {
            popMessage("Please upload your national id image", { variant: "error" })
            return
        }
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Your account created successfully and verification email sent", { variant: "success" })
                navigate("/login", { replace: true });
            }
        };
        signUp(
            {
                url: "signUp",
                method: "POST",
                body: submitData,
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