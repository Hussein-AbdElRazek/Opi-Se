import React from 'react'
import EditProfileUi from './EditProfileUi'
import { useDispatch, useSelector } from 'react-redux'
import useHttp from '../../../hooks/use-http';
import { clearArrayOfObjects } from '../../../helpers/clearArrayOfObjects';
import { compareObjects } from '../../../helpers/compareObjects';
import { useSnackbar } from 'notistack';
import { authActions } from '../../../store/auth-slice';

const EditProfile = () =>
{
    const userData = useSelector(state => state.auth.userData);
    // clean object for only data can edit
    const initialUserData = {
        userName: userData.userName,
        email: userData.email,
        age: userData.age,
        languages: userData.languages,
        userSkills: userData.userSkills,
        fieldOfStudy: userData.fieldOfStudy,
        specialization: userData.specialization,
    }
    const {
        sendRequest: editProfile,
        isLoading: isLoadingEditProfile
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
                url: "editProfile",
                method: "PATCH",
                body: submitData,
            },
            getResponse
        );
    }
    return (
        <EditProfileUi
            initialUserData={initialUserData}
            handleEditProfile={handleEditProfile}
            isLoadingEditProfile={isLoadingEditProfile}
        />
    )
}

export default EditProfile