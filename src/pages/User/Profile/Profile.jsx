import { useSelector } from 'react-redux';
import ProfileUi from './ProfileUi'
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Profile = () =>
{
    const userData = useSelector((state) => state.auth.userData);
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const [profileData, setProfileData] = useState({});
    useEffect(() =>
    {
        if (type === "MY_PROFILE")
        {
            setProfileData(userData);
        } else
        {
            setProfileData(Object.fromEntries(searchParams.entries()));
        }
    }, [type, userData, searchParams])
    return (
        <ProfileUi
            profileData={profileData}
            type={type}
        />
    )
}

export default Profile