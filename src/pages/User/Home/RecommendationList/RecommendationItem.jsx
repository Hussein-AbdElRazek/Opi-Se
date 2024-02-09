import { LoadingButton } from '@mui/lab';
import { NavLink } from 'react-router-dom';

import classes from './RecommendationListUi.module.css'
import { ProfilePic } from '../../../../components/ui';
import useSendPartnerRequest from './hooks/use-send-partner-request';
const RecommendationItem = ({ userData }) =>
{
    const {
        handleSendPartnerRequest,
        isLoadingSendPartnerRequest,
    } = useSendPartnerRequest();
    
    return (
        <div
            className={classes.btnContainer}
        >
            <div
                className={classes.item}
            >
                <NavLink
                    className={classes.profilePic}
                    to={`/profile?userId=${userData._id}`}
                >
                    <ProfilePic
                        userName={userData.userName}
                        profileImage={userData.profileImage}
                    />
                </NavLink>

                <div
                    className={classes.about}
                >
                    <h3>
                        {userData.userName}
                    </h3>
                    <p>
                        {userData.email}
                    </p>
                    <p>
                        {userData.age} Years
                    </p>
                </div>
                <div
                    className={classes.action}
                >
                    <LoadingButton
                        loading={isLoadingSendPartnerRequest}
                        onClick={() => { handleSendPartnerRequest(userData) }}
                    >
                        Take First Step
                    </LoadingButton>
                </div>
            </div>

        </div>
    )
}

export default RecommendationItem