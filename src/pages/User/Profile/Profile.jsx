import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import ProfileUi from './ProfileUi'
import useSearchForPartner from '../../../hooks/commonApis/use-search-for-partner';
import { LoadingFullScreen } from '../../../components/ui';

const Profile = () =>
{
    const [searchParams] = useSearchParams();
    const [profileData, setProfileData] = useState(null);
    const myData = useSelector((state) => state.auth?.userData);
    const myId = useSelector((state) => state.auth?.userData)?._id;
    const userId = searchParams.get("userId");
    const userData = useSelector((state) => state.search?.userData);
    const isMyProfile = myId === userId;
    const isMyPartner = userId === myData?.partnerId?._id;

    const {
        handleSearchForPartner,
        isLoadingSearchForPartner,
    } = useSearchForPartner();
    const navigate = useNavigate();

    useEffect(() =>
    {
        // in case no id
        if (!userId) navigate("/");

        // in case if id equal my id then my profile 
        if (isMyProfile)
        {
            setProfileData(myData);
        } else 
        {
            //in case i have searched already and have data in store
            if (userData && userData._id === userId) setProfileData(userData);

            //in case no data in store
            //then search with id
            else handleSearchForPartner({ userId: userId });
        }
    }, [handleSearchForPartner, isMyProfile, myData, navigate, searchParams, userData, userId])

    // to handle where i come from like come from partners requests
    const from = searchParams.get("from");
    return (
        <>
            {(isLoadingSearchForPartner || !profileData) ?
                (<LoadingFullScreen />) : (
                    <ProfileUi
                        profileData={profileData}
                        isMyProfile={isMyProfile}
                        isMyPartner={isMyPartner}
                        from={from}
                    />
                )}
        </>

    )
}

export default Profile