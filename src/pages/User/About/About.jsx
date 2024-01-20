import React from 'react'
import AboutUi from './AboutUi'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../store/auth-slice';
import { useNavigate } from 'react-router-dom';

const About = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialAboutData = useSelector(state => state.auth.userData.about);
    const isCompleteAboutData = !!useSelector(state => state.auth.userData.isCompleteAboutData);

    // store about data to send it with questions 
    const handleStoreAboutData = (aboutData) =>
    {
        const updatedData = {
            about: aboutData,
            isCompleteAboutData: true,
        }
        dispatch(authActions.updateUserData(updatedData))
    }

    // when click next after complete about data
    const handleNavigateToQuestions = (aboutData) =>
    {
        handleStoreAboutData(aboutData);
        navigate("/questions?questionIndex=0");
    }
    
    return (
        <AboutUi
            handleNavigateToQuestions={handleNavigateToQuestions}
            initialAboutData={initialAboutData}
            isCompleteAboutData={isCompleteAboutData}
        />
    )
}

export default About