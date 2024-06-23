import { useDispatch } from "react-redux";

import useHttp from "../use-http";
import { mentorModulePath, userModulePath } from "../../config";
import { authActions } from "../../store/auth-slice";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const useGetMyProfile = () =>
{
    const {
        isLoading: isLoadingGetMyProfile,
        sendRequest: getMyProfile
    } = useHttp();

    const dispatch = useDispatch();
    const role = useSelector(state => state.auth.userData.role);

    const handleGetMyProfile = useCallback((onSuccess) =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                const updatedProfileData = { ...data.profileDetails, ...data, matchId: data?.matchId?._id }
                dispatch(authActions.updateUserData(updatedProfileData))
            }
        };

        getMyProfile(
            {
                url: role === 'user' ? `${userModulePath}/getUserProfile` : `${mentorModulePath}/getMentorProfile`,
            },
            getResponse
        );
    }, [dispatch, getMyProfile, role])

    return {
        handleGetMyProfile,
        isLoadingGetMyProfile,
    }
}

export default useGetMyProfile;