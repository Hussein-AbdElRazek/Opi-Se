import React from 'react'
import { PopChatCard } from '../../../components/ui'
import ChatProfileHeader from './ChatProfileHeader'
import { ButtonBase } from '@mui/material'

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
        isLoadingGetChatMedia
    } = props;

    return (
        <PopChatCard
            header={<ChatProfileHeader />}
            type="mediaPage"
        >
            <div
                className={classes.container}
            >
                <div
                    className={classes.profilePic}
                >
                    <ProfilePic
                        userName={profileData?.userName}
                        profileImage={profileData?.profileImage}
                    />
                </div>
                <h6
                    className={classes.userName}
                >
                    {profileData?.userName}
                </h6>
                <ButtonBase
                    className={classes.iconBtn}
                >
                    {/* stroke to change color of border of icon */}
                    <VideoIcon stroke='var(--primary)' />
                </ButtonBase>
                <ButtonBase
                    className={classes.iconBtn}
                >
                    {/* stroke to change color of border of icon */}
                    <CallIcon stroke='var(--primary)' />
                </ButtonBase>
            </div>
            <ChatProfileTabs />
            <MediaList
                imageList={imageList}
                isLoadingGetChatMedia={isLoadingGetChatMedia}
            />
        </PopChatCard>
    )
}

export default ChatProfileUi