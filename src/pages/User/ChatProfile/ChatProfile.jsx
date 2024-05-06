import {  useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ChatProfileUi from './ChatProfileUi'
import useHttp from '../../../hooks/use-http';
import useScrollingPagination from '../../../hooks/use-scrolling-pagination';
import { chatActions } from '../../../store/chat-slice';
import { chatModulePath } from '../../../config';
import useCall from '../../../hooks/use-call';

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

    // handle pagination 
    const initialTotalPages = useSelector(state => state.chat.totalPages) || 1;
    const dispatch = useDispatch();
    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingGetChatMedia, initialTotalPages);

    const [imageList, setImageList] = useState([]);

    useEffect(() =>
    {
        const getResponse = ({ message, data, totalPages }) =>
        {
            if (message === "success")
            {
                setImageList(prev => [...prev, ...data]);

                // set pages limit
                // update total pages in store
                dispatch(chatActions.updateTotalPages(totalPages))
            }
        };

        getChatMedia(
            {
                url: `${chatModulePath}/getChatMedia?page=${currentPage + 1}&limit=20&matchId=${matchId}`,
            },
            getResponse
        );
    }, [currentPage, dispatch, getChatMedia, matchId])

    // handle call hook
    const { handleVideoCall, handleVoiceCall } = useCall();

    return (
        <ChatProfileUi
            profileData={profileData}
            imageList={imageList}
            isLoadingGetChatMedia={isLoadingGetChatMedia}
            lastElementRef={lastElementRef}
            handleVideoCall={handleVideoCall}
            handleVoiceCall={handleVoiceCall}
        />
    )
}

export default ChatProfile