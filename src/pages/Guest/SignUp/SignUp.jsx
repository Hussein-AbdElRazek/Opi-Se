import { useNavigate } from 'react-router-dom';

import useHttp from '../../../hooks/use-http';
import SignUpUi from './SignUpUi';
import { clearArrayOfObjects } from '../../../helpers/clearArrayOfObjects';

const SignUp = () =>
{
    const navigate = useNavigate();

    const {
        isLoading: isLoadingSignUp,
        sendRequest: signUp
    } = useHttp();

    const handleSignUp = (values, { resetForm }) =>
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