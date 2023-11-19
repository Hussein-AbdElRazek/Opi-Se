import { useSelector } from 'react-redux';
import ProfileUi from './ProfileUi'

const Profile = () =>
{
    const userData = useSelector((state) => state.auth.userData);

    return (
        <ProfileUi
            userData={userData}
        />
    )
}

export default Profile