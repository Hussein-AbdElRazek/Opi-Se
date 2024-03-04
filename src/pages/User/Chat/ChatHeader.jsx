import { useContext } from 'react';
import { Avatar, ButtonBase, IconButton } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'

import classes from './Chat.module.css'
import Session from './Session';
import CallContext from '../../../callStore/call-context';

const ChatHeader = ({ userData }) =>
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const goBack = () =>
    {
        navigate("/chats")
    }
    const { setCallerId, setCall, establishStream } = useContext(CallContext);

    const navigateChatProfile = () =>
    {
        navigate(`/chats/chat/profile?${searchParams}`)
    }

    const handleVideoCall = () =>
    {
        navigate("/video")
        establishStream("video");
        setCallerId(searchParams.get('id'))
    }
    const handleVoiceCall = () =>
    {
        establishStream("voice");
        setCallerId(searchParams.get('id'))
        setCall(prev => ({ ...prev, name: searchParams.get('userName') }))
    }
    return (
        <div
            className={classes.header}
        >
            {/* back icon , userInfo*/}
            <div
                className={classes.left}
            >
                {/* back icon */}
                <ButtonBase
                    onClick={goBack}
                    className={classes.backBtn}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#000E08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </ButtonBase>
                {/* userInfo */}
                <ButtonBase
                    className={classes.userInfo}
                    onClick={navigateChatProfile}
                >
                    <Avatar
                        src={userData.profileImage}
                        className={classes.avatar}
                    />
                    <div
                        className={classes.headerText}
                        title={userData.userName}
                    >
                        <h6
                            className={classes.username}
                        >
                            {userData.userName}
                        </h6>
                        <p
                            className={classes.status}
                        >
                            {userData.status}
                        </p>
                    </div>
                </ButtonBase>
            </div>

            <div
                className='center-y'
            >
                <Session />



                {/* video icon */}
                <IconButton
                    title='Video call'
                    onClick={handleVideoCall}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.125 17.75H5.25C4.007 17.75 3 16.743 3 15.5V8.5C3 7.257 4.007 6.25 5.25 6.25H13.125C14.368 6.25 15.375 7.257 15.375 8.5V15.5C15.375 16.743 14.368 17.75 13.125 17.75Z" stroke="#000E08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.375 13.097L19.17 16.151C19.906 16.744 21 16.22 21 15.275V8.72498C21 7.77998 19.906 7.25598 19.17 7.84898L15.375 10.903" stroke="#000E08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </IconButton>

                {/* call icon */}
                <IconButton
                    title='Voice call'
                    onClick={handleVoiceCall}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z" stroke="#000E08" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </IconButton>
            </div>

        </div>
    )
}

export default ChatHeader