import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import useScrollingPagination from "../../../../hooks/use-scrolling-pagination";
import { chatActions } from "../../../../store/chat-slice";
import { useSearchParams } from "react-router-dom";
import { chatModulePath } from "../../../../config";

const useGetChat = (setIsScrollToBottom) =>
{
    // useGetChat hook to handle call getPartnerChat API

    const {
        sendRequest: getChatData,
        isLoading: isLoadingGetChat,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const openedUserData = {
        userName: searchParams.get("userName"),
        profileImage: searchParams.get("profileImage"),
        id: searchParams.get("id"),
        status: ""
    }

    // handle pagination 
    const initialTotalPages = useSelector(state => state.chat.totalPages);
    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingGetChat, initialTotalPages);

    useEffect(() =>
    {
        const getResponse = ({ message, data, totalPages }) =>
        {
            if (message === "success")
            {
                // update store with chat
                dispatch(chatActions.updateMessages({ id: openedUserData.id, messages: data }));

                // update total pages in store
                dispatch(chatActions.updateTotalPages(totalPages))

                // scroll to bottom for first time
                if (currentPage === 0) setIsScrollToBottom(true);
            }
        };

        getChatData(
            {
                url: `${chatModulePath}/getPartnerChat?matchId=${matchId}&page=${currentPage + 1}&limit=20`,
            },
            getResponse
        );
    }, [currentPage, dispatch, getChatData, matchId, openedUserData.id, setIsScrollToBottom])

    return {
        isLoadingGetChat,
        lastElementRef,
    }
}

export default useGetChat;