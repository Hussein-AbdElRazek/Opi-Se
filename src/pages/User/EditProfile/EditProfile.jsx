import React, { useEffect } from 'react'
import EditProfileUi from './EditProfileUi'
import { useDispatch, useSelector } from 'react-redux'
import useHttp from '../../../hooks/use-http';
import { clearArrayOfObjects } from '../../../helpers/clearArrayOfObjects';
import { compareObjects } from '../../../helpers/compareObjects';
import { useSnackbar } from 'notistack';
import { authActions } from '../../../store/auth-slice';
import { recommendationModulePath, userModulePath } from '../../../config';
import useGetMyProfile from '../../../hooks/commonApis/use-get-my-profile';

const EditProfile = () =>
{
    const userData = useSelector(state => state.auth.userData);
    // clean object for only data can edit
    const initialUserData = {
        userName: userData.userName,
        email: userData.email,
        age: userData.age,
        languages: userData.languages,
        bio: userData.bio === "blank" ? "" : userData.bio,
    }

    const initialUserPrefers = {
        userSkills: userData.userSkills,
        fieldOfStudy: userData.fieldOfStudy,
        specialization: userData.specialization,
    }

    const {
        sendRequest: editProfile,
        isLoading: isLoadingEditProfile
    } = useHttp();

    const {
        sendRequest: editUserPrefers,
        isLoading: isLoadingEditUserPrefers
    } = useHttp();

    const { enqueueSnackbar: popMessage } = useSnackbar();
    const dispatch = useDispatch();

    const handleEditProfile = (values) =>   
    {
        values.languages = clearArrayOfObjects(values.languages)
        const submitData = compareObjects(initialUserData, values)

        if (!Object.keys(submitData).length)
        {
            popMessage("You didn't change anything to save")
            return
        }

        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Your data edited successfully", { variant: "success" })
                dispatch(authActions.updateUserData(values))
            }
        };

        editProfile(
            {
                url: `${userModulePath}/editProfile`,
                method: "PATCH",
                body: submitData,
            },
            getResponse
        );
    }

    const handleEditUserPrefers = (values) =>   
    {
        const submitData = compareObjects(initialUserPrefers, values)

        if (!Object.keys(submitData).length)
        {
            popMessage("You didn't change anything to save")
            return
        }

        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Your data edited successfully", { variant: "success" })
                dispatch(authActions.updateUserData(values))
            }
        };

        editUserPrefers(
            {
                url: `${recommendationModulePath}/editUserPrefers`,
                method: "PATCH",
                body: submitData,
            },
            getResponse
        );
    }
    const {
        handleGetMyProfile,
    } = useGetMyProfile();
    useEffect(() =>
    {
        handleGetMyProfile();
    }, [handleGetMyProfile])
    return (
        <EditProfileUi
            initialUserData={initialUserData}
            handleEditProfile={handleEditProfile}
            isLoadingEditProfile={isLoadingEditProfile}

            initialUserPrefers={initialUserPrefers}
            handleEditUserPrefers={handleEditUserPrefers}
            isLoadingEditUserPrefers={isLoadingEditUserPrefers}
        />
    )
}

export default EditProfile