import { NavLink } from 'react-router-dom'
import { ButtonBase } from '@mui/material'

import { PopChatCard } from '../../../components/ui'
import ChatProfileHeader from './ChatProfileHeader'
import { ReactComponent as CallIcon } from '../../../assets/icons/call.svg'
import { ReactComponent as VideoIcon } from '../../../assets/icons/video.svg'
import { ProfilePic } from '../../../components/ui'
import classes from './styles/ChatProfileHeader.module.css'
import ChatProfileTabs from './ChatProfileTabs'
import MediaList from './MediaList'

const ChatProfileUi = (props) =>
{
    const {
        profileData,
        imageList,
        isLoadingGetChatMedia,
        lastElementRef,
        handleVideoCall,
        handleVoiceCall,
    } = props;

    return (
        <PopChatCard
            header={<ChatProfileHeader />}
            type="mediaPage"
        >
            <div
                className={classes.container}
            >
                <NavLink
                    to={`/profile?userId=${profileData?.id}`}
                >
                    <div className={classes.profilePic}
                    >
                        <ProfilePic
                            userName={profileData?.userName}
                            profileImage={profileData?.profileImage}
                        />
                    </div>

                </NavLink>
                <h6
                    className={classes.userName}
                >
                    {profileData?.userName}
                </h6>

                {/* stroke to change color of border of icon */}
                <ButtonBase
                    className={classes.iconBtn}
                    onClick={handleVideoCall}
                >
                    <VideoIcon stroke='var(--primary)' />
                </ButtonBase>

                {/* stroke to change color of border of icon */}
                <ButtonBase
                    className={classes.iconBtn}
                    onClick={handleVoiceCall}
                >
                    
                    <CallIcon stroke='var(--primary)' />
                </ButtonBase>
            </div>

            <ChatProfileTabs />
            <MediaList
                imageList={imageList}
                isLoadingGetChatMedia={isLoadingGetChatMedia}
                lastElementRef={lastElementRef}
            />
        </PopChatCard>
    )
}

export default ChatProfileUi