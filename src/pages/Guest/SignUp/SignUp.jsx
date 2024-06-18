import { useNavigate, useParams } from 'react-router-dom';

import useHttp from '../../../hooks/use-http';
import SignUpUi from './SignUpUi';
import { clearArrayOfObjects } from '../../../helpers/clearArrayOfObjects';
import { userModulePath } from '../../../config';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SignUp = () =>
{
    const navigate = useNavigate();
    const { userType } = useParams();
    const dispatch = useDispatch();
    const lastSignupStep = useSelector(state => state.signupMentor.lastSignupStep)
    const {
        isLoading: isLoadingSignUp,
        sendRequest: signUp
    } = useHttp();

    const handleSignUpForUser = (values, { resetForm }) =>
    {
        let submitData = { ...values };
        submitData.languages = clearArrayOfObjects(submitData.languages)
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                resetForm();
                navigate(`resend-email?email=${values.email}`)
            }
        };
        signUp(
            {
                url: `${userModulePath}/signUp`,
                method: "POST",
                body: submitData,
            },
            getResponse
        );
    }
    
    const handleSignUpForMentor = (values) =>
    {

    }

    // useEffect(()=>{

    // },[])
    // console.log("userType", userType)
    return (
        <SignUpUi
            isLoadingSignUp={isLoadingSignUp}
            handleSignUp={userType === "user" ? handleSignUpForUser : handleSignUpForMentor}
        />
    )
}

export default SignUp