import React from 'react'
import MatchActionsUi from './MatchActionsUi'
import useHttp from '../../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import { notifyUserRoom } from '../../../store/user-slice';
import { acceptPartnerRequest, joinMatchRoom } from '../../../store/match-slice';
import { authActions } from '../../../store/auth-slice';
import { matchModulePath } from '../../../config';

const MatchActions = ({ requestData, smallBtn }) =>
{
    const {
        isLoading: isLoadingAcceptMatch,
        sendRequest: acceptMatch
    } = useHttp();
    const {
        isLoading: isLoadingDeclineMatch,
        sendRequest: declineMatch
    } = useHttp();
    const navigate = useNavigate()
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const dispatch = useDispatch();
    const myData = useSelector(state=>state.auth.userData)
    const handleAcceptMatch = () =>
    {
        const getResponse = ({ message, matchId }) =>
        {
            if (message.includes("success") || message.includes("unexpected error !"))
            {
                //TODO make slice for requests and remove it after it 
                // for now i just navigate to home and pop success
                popMessage("Match Accepted Successfully", { variant: "success" })
                navigate("/");

                // TODO ask zezo to send partnerImage in request list
                const socketReqBody = {
                    notifiedPartner: requestData.partnerId,
                    matchId: matchId,
                    partnerUserName: myData.userName,
                    partnerImage: myData.profileImage,
                    // partnerId: myData._id,
                }
                console.log("socketReqBody", socketReqBody)
                dispatch(acceptPartnerRequest(socketReqBody))

                // notify user
                dispatch(notifyUserRoom(requestData.partnerId));

                // TODO fetch user data for update user data in any place have partenr

                // update match data and join match room
                dispatch(authActions.updateUserData({
                    matchId: matchId,
                    partnerId: { _id: requestData.partnerId, userName: requestData.partnerUserName, profileImage: "default.png" }
                }))
                dispatch(joinMatchRoom());
            }
        };

        acceptMatch(
            {
                url: `${matchModulePath}/acceptMatchRequest?partner2Id=${requestData.partnerId}&nationalId=${requestData.nationalId}`,
                method: "POST"
            },
            getResponse
        );

    }
    const userEmail = useSelector((state) => state.auth.userData.email)

    const handleDeclineMatch = () =>
    {
        const body = {
            rejectedUserId: requestData.partnerId,
            email: userEmail,
            requestId: requestData._id
        }
        const getResponse = ({ message }) =>
        {
            // TODO ask zezo for notification doesn't make it send error
            if (message.includes("success") || message.includes("notification"))
            {
                //TODO make slice for requests and remove it after it 
                // for now i just navigate to home and pop success
                popMessage("Request Declined Successfully", { variant: "success" })
                navigate("/");
            }
        };

        declineMatch(
            {
                url: `${matchModulePath}/declineMatchRequest`,
                method: "POST",
                body
            },
            getResponse
        );

    }

    return (
        <MatchActionsUi
            handleAcceptMatch={handleAcceptMatch}
            isLoadingAcceptMatch={isLoadingAcceptMatch}
            handleDeclineMatch={handleDeclineMatch}
            isLoadingDeclineMatch={isLoadingDeclineMatch}
            smallBtn={smallBtn}
        />
    )
}

export default MatchActions