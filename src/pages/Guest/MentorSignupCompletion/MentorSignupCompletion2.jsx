import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom';

import MentorSignupCompletion2Ui from './MentorSignupCompletion2Ui'
import useModal from '../../../hooks/use-modal';
import { experienceInitialValues } from './inputsData/experienceInputsData.js';
import { signupMentorActions } from '../../../store/signup-mentor-slice.js';
import useHttp from '../../../hooks/use-http.js';
import { mentorModulePath } from '../../../config.js';
import { clearArrayOfObjects } from '../../../helpers/clearArrayOfObjects.js';

const MentorSignupCompletion2 = () =>
{
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [experienceModalInitialValues, setExperienceModalInitialValues] = useState(experienceInitialValues);
    const experienceList = useSelector(state => state.signupMentor?.userData?.experience) || [];
    const signupMentorInitialData = useSelector(state => state.signupMentor?.userData);
    const navigate = useNavigate();
    const {
        openModal,
        closeModal,
        isModalOpened,
    } = useModal("addExperienceModal");
    const {
        isLoading: isLoadingSignUp,
        sendRequest: signUp
    } = useHttp();

    const onUpdateExperience = (values) =>
    {
        values.startDate = new Date(values.startDate).toISOString()
        values.endDate = new Date(values.endDate).toISOString()
        const openedIndex = searchParams.get("openedIndex");
        const updatedExpList = [...experienceList];
        updatedExpList[openedIndex] = values;
        const updatedData = {
            ...signupMentorInitialData,
            experience: updatedExpList
        }

        dispatch(
            signupMentorActions.updateData(
                { userData: updatedData, lastSignupStep: 1 }
            ))

        closeModal()
    }

    const onOpenExperienceModal = (index) => () =>
    {
        setSearchParams({ 'openedIndex': index })
        setExperienceModalInitialValues(!!experienceList[index] ? experienceList[index] : experienceInitialValues)
        openModal()
    }

    const onDelete = () =>
    {
        const openedIndex = Number(searchParams.get("openedIndex"));

        const updatedExpList = experienceList.filter((item, index) => index !== openedIndex);

        const updatedData = {
            ...signupMentorInitialData,
            experience: updatedExpList
        }

        dispatch(
            signupMentorActions.updateData(
                { userData: updatedData, lastSignupStep: 1 }
            ))

        closeModal()
    }

    const handleSignup = () =>
    {
        let signupData = { ...signupMentorInitialData };
        signupData.languages = clearArrayOfObjects(signupData.languages || []);
        signupData.skills = clearArrayOfObjects(signupData.skills || []);
        signupData.experience = clearArrayOfObjects(signupData.experience || []);
        signupData.bio = 'blank';

        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                navigate(`/mentor/verification/?email=${signupData.email}`)

                dispatch(
                    signupMentorActions.updateData(
                        { userData: signupData, lastSignupStep: 2 }
                    ))
            }
        };

        signUp(
            {
                url: `${mentorModulePath}/signUp`,
                method: "POST",
                body: signupData,
            },
            getResponse
        );
    }
    return (
        <MentorSignupCompletion2Ui
            openExperienceModal={onOpenExperienceModal}
            closeAddExperienceModal={closeModal}
            isExperienceModalOpened={isModalOpened}
            experienceModalInitialValues={experienceModalInitialValues}
            experienceList={experienceList}
            updateExperience={onUpdateExperience}
            onDelete={onDelete}
            handleSignup={handleSignup}
            isLoadingSignup={isLoadingSignUp}
        />
    )
}

export default MentorSignupCompletion2