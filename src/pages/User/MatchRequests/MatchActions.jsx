import React from 'react'
import MatchActionsUi from './MatchActionsUi'
import useHttp from '../../../hooks/use-http';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import { notifyUserRoom } from '../../../store/user-slice';
import { acceptPartnerRequest, joinMatchRoom, matchActions } from '../../../store/match-slice';
import { authActions } from '../../../store/auth-slice';
import { matchModulePath } from '../../../config';
import { uiActions } from '../../../store/ui-slice';

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
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const dispatch = useDispatch();
    const myData = useSelector(state => state.auth.userData)
    const handleAcceptMatch = () =>
    {
        const getResponse = ({ message, matchId }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Match Accepted Successfully", { variant: "success" })
                dispatch(uiActions.closePopMenu("requests"))

                const socketReqBody = {
                    notifiedPartner: requestData._id,
                    matchId: matchId,
                    partnerUserName: myData.userName,
                    partnerImage: myData.profileImage,
                    partnerId: myData._id,
                }
                dispatch(acceptPartnerRequest(socketReqBody))
                console.log("req socketReqBody ", socketReqBody)
                // notify user
                dispatch(notifyUserRoom(requestData._id));

                // update match data and join match room
                dispatch(authActions.updateUserData({
                    matchId: matchId,
                    alreadyRequestedMe: false,
                    alreadyRequestedHim: false,
                    partnerId: {
                        _id: requestData._id,
                        userName: requestData.userName,
                        profileImage: requestData.profileImage
                    }
                }))

                dispatch(joinMatchRoom());

                dispatch(matchActions.removeRequest(requestData._id))
            }
        };

        acceptMatch(
            {
                url: `${matchModulePath}/acceptMatchRequest?partner2Id=${requestData._id}&nationalId=${"12345678912345"}`,
                method: "POST"
            },
            getResponse
        );
    }

    const handleDeclineMatch = () =>
    {
        const body = {
            rejectedUserId: requestData._id,
            email: requestData.email,
        }

        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                dispatch(matchActions.removeRequest(requestData._id))
                popMessage("Request Declined Successfully", { variant: "success" })
                // notify user
                dispatch(notifyUserRoom(requestData._id));
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