import { useNavigate, useParams } from 'react-router-dom';

import useHttp from '../../../hooks/use-http';
import SignUpUi from './SignUpUi';
import { clearArrayOfObjects } from '../../../helpers/clearArrayOfObjects';
import { userModulePath } from '../../../config';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signupMentorActions } from '../../../store/signup-mentor-slice';
import { signUpInitialValues } from './signUpInputsData';

const SignUp = () =>
{
    const navigate = useNavigate();
    const { userType } = useParams();
    const dispatch = useDispatch();
    const mentorIntialData = useSelector(state => state?.signupMentor?.userData);
    const {
        isLoading: isLoadingSignUp,
        sendRequest: signUp
    } = useHttp();

    const cleanData = (values) =>
    {
        let submitData = { ...values };
        submitData.languages = clearArrayOfObjects(submitData.languages);
        return submitData
    }

    const handleSignUpForUser = (values, { resetForm }) =>
    {
        const submitData = cleanData(values)
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
        const submitData = cleanData(values);
        dispatch(signupMentorActions.updateData({ userData: submitData, lastSignupStep: 0 }))
        navigate('1')
    }

    return (
        <SignUpUi
            userType={userType}
            signupInitialValues={userType === "user" ? signUpInitialValues : mentorIntialData}
            isLoadingSignUp={isLoadingSignUp}
            handleSignUp={userType === "user" ? handleSignUpForUser : handleSignUpForMentor}
        />
    )
}

export default SignUp