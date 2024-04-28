import React from 'react'
import AboutUi from './AboutUi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { authActions } from '../../../store/auth-slice';
import useHttp from '../../../hooks/use-http';
import { recommendationModulePath } from '../../../config';

const About = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        isLoading: isLoadingSubmitUserPrefers,
        sendRequest: submitUserPrefers
    } = useHttp();

    // fetch api submitUserPrefers
    const handleSubmitUserPrefers = (aboutData) =>
    {
        const userPrefers = aboutData;

        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                //to update store data to make it update routes and navigate to home
                //  + update user data
                dispatch(authActions.updateUserData({ getUserPrefers: false, ...userPrefers }))
                navigate("/", { replace: true });
            }
        };

        submitUserPrefers(
            {
                url: `${recommendationModulePath}/submitUserPrefers`,
                method: "POST",
                body: userPrefers,
            },
            getResponse
        );
    }

    return (
        <AboutUi
            handleSubmitUserPrefers={handleSubmitUserPrefers}
            isLoadingSubmitUserPrefers={isLoadingSubmitUserPrefers}
        />
    )
}

export default About