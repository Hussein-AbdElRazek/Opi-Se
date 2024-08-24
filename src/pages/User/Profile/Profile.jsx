import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import ProfileUi from './ProfileUi'
import useSearchForPartner from '../../../hooks/commonApis/use-search-for-partner';
import { LoadingFullScreen } from '../../../components/ui';
import useGetMyProfile from '../../../hooks/commonApis/use-get-my-profile';
import useChangeProfilePic from './hooks/use-change-profile-pic';

const Profile = () =>
{
    const [searchParams] = useSearchParams();
    const myData = useSelector((state) => state?.auth?.userData);
    const myId = useSelector((state) => state?.auth?.userData)?._id;
    console.log("myID", myId)
    const userId = searchParams.get("userId");
    const userData = useSelector((state) => state?.search?.userData);
    const isMyProfile = myId === userId;
    const isMyPartner = userId === myData?.partnerId?._id;
    const havePartner = !!(myData?.partnerId?._id);
    const navigate = useNavigate();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const currentUrl = window.location.href;
    // to handle where i come from like come from partners requests
    const from = searchParams.get("from");
    const {
        handleSearchForPartner,
        isLoadingSearchForPartner,
    } = useSearchForPartner();
    const {
        handleGetMyProfile,
        isLoadingGetMyProfile,
    } = useGetMyProfile();

    const {
        handleChangeProfilePic,
        isLoadingChangeProfilePic
    } = useChangeProfilePic();

    const onCopy = () =>
    {
        popMessage("Copied successfully")
    }

    useEffect(() =>
    {
        console.log("profile use eff")
        // in case no id
        if (!userId) navigate("/");

        // in case if id equal my id then my profile 
        if (isMyProfile)
        {
            handleGetMyProfile();
        } else 
        {
            handleSearchForPartner({ userId: userId });
        }
    }, [handleGetMyProfile, handleSearchForPartner, isMyProfile, navigate, userId])

    return (
        <>
            {(isLoadingSearchForPartner || isLoadingGetMyProfile || (!myData && !userData)) ?
                (<LoadingFullScreen />) : (
                    <ProfileUi
                        profileData={isMyProfile ? myData || {} : userData || {}}
                        isMyProfile={isMyProfile}
                        isMyPartner={isMyPartner}
                        from={from}
                        havePartner={havePartner}
                        currentUrl={currentUrl}
                        onCopy={onCopy}
                        handleChangeProfilePic={handleChangeProfilePic}
                        isLoadingChangeProfilePic={isLoadingChangeProfilePic}
                    />
                )}
        </>
    )
}

export default Profile