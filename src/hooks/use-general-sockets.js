import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { joinMatchRoom } from "../store/match-slice";
import { joinUserRoom } from "../store/user-slice";
import { listenToEndToSessionRequest, listenToReceiveMedia, listenToReceiveMessage, listenToReplyToSessionRequest, listenToStartChatSession } from "../store/chat-slice";

const useGeneralSocket = () =>
{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isHavePartner = !!useSelector((state) => state.auth?.userData?.partnerId?._id);
    const partnerId = useSelector((state) => state.auth?.userData?.partnerId?._id);

    // handle all general sockets (app root sockets)
    useEffect(() =>
    {
        console.log("useGeneralSocket-----")

        //if logged in sockets
        if (isLoggedIn)
        {
            // join user room
            dispatch(joinUserRoom());

        }

        //if have partner sockets
        if (isHavePartner)
        {
            // join match room
            dispatch(joinMatchRoom());

            // chat
            //Messages listener
            dispatch(listenToReceiveMessage());

            //Media listener
            dispatch(listenToReceiveMedia(partnerId));

            //Session listener
            dispatch(listenToStartChatSession());
            dispatch(listenToReplyToSessionRequest());
            dispatch(listenToEndToSessionRequest());
        }



    }, [dispatch, isHavePartner, isLoggedIn, partnerId])
}
export default useGeneralSocket