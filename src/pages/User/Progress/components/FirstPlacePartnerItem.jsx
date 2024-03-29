import { ProfilePic } from '../../../../components/ui'
import classes from '../styles/FirstPlacePartnerItem.module.css'

const FirstPlacePartnerItem = (props) =>
{
    const { profileImage, userName, coins, badge } = props;
    return (
        <div
            className={`center-x center-text flex-wrap ${classes.container}`}
        >
            <div
                className={classes.profilePic}
            >
                <ProfilePic
                    profileImage={profileImage}
                    userName={userName}
                />
            </div>
            <h6>{userName}</h6>
            <span>{coins} Coin</span>
            <p>{badge}</p>
        </div>
    )
}

export default FirstPlacePartnerItem