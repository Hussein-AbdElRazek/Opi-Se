import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ChatProfileUi from './ChatProfileUi'
import useHttp from '../../../hooks/use-http';

const ChatProfile = () =>
{
    const [searchParams] = useSearchParams();
    // convert searchParams to object
    const profileData = Object.fromEntries(searchParams.entries());

    // get chat media
    const {
        isLoading: isLoadingGetChatMedia,
        sendRequest: getChatMedia
    } = useHttp();
    const matchId = useSelector((state) => state.auth.userData.matchId);
    const [imageList, setImageList] = useState([]);

    const handleGetChatMedia = useCallback(() =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                setImageList(data);
            }
        };

        getChatMedia(
            {
                url: `getChatMedia?page=1&limit=50&matchId=${matchId}`,
            },
            getResponse
        );
    }, [getChatMedia, matchId])

    //TODO handle pagination
    useEffect(() =>
    {
        handleGetChatMedia();
    }, [])
    return (
        <ChatProfileUi
            profileData={profileData}
            imageList={imageList}
            isLoadingGetChatMedia={isLoadingGetChatMedia}
        />
    )
}

export default ChatProfile