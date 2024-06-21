import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import MentorSignupCompletionUi from './MentorSignupCompletionUi'
import { signupMentorActions } from '../../../store/signup-mentor-slice';
import { useSelector } from 'react-redux';
import { signupCompletionInitialValues } from './inputsData/signupCompletionInputsData';

const MentorSignupCompletion = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialValues = useSelector(state => state.signupMentor.userData)

    const onSubmit = (values) =>
    {
        console.log("submit")
        dispatch(signupMentorActions.updateData({ userData: values, lastSignupStep: 1 }))
        navigate('/mentor/signup/2')
    }

    return (
        <MentorSignupCompletionUi
            onSubmit={onSubmit}
            initialValues={{ ...signupCompletionInitialValues, ...initialValues }}
        />
    )
}

export default MentorSignupCompletion