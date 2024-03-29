import classes from '../styles/PartnersListItem.module.css'
import { ProfilePic } from '../../../../components/ui';

const PartnersListItem = (props) =>
{
    const { order, profileImage, userName, studyField, hours, coins, isMyPartnerShip } = props;
    return (
        <div
            className={`center-y flex-nowrap w-100 ${classes.container} ${isMyPartnerShip ? classes.myData : ""}`}
            disablePadding
        >
            <span
                title={order}
            >
                {order}
            </span>
            <div
                className={classes.profilePic}
            >
                <ProfilePic
                    profileImage={profileImage}
                    userName={userName}
                />
            </div>
            <p title={userName}>{userName}</p>
            <p title={studyField}> {studyField}</p>
            <p title={hours}>{hours} Hours</p>
            <span title={coins}>{coins} Coin</span>
        </div>
    )
}

export default PartnersListItem