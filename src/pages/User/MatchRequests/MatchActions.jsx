import React from 'react'
import MatchActionsUi from './MatchActionsUi'
import useHttp from '../../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

const MatchActions = ({ requestData }) =>
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

    const handleAcceptMatch = (partner2Id, nationalId) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                //TODO make slice for requests and remove it after it 
                // for now i just navigate to home and pop success
                popMessage("Match Accepted Successfully", { variant: "success" })
                navigate("/");
            }
        };

        acceptMatch(
            {
                url: `acceptMatchRequest?partner2Id=${requestData.partnerId}&nationalId=${requestData.nationalId}`,
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
            if (message === "success")
            {
                //TODO make slice for requests and remove it after it 
                // for now i just navigate to home and pop success
                popMessage("Request Declined Successfully", { variant: "success" })
                navigate("/");
            }
        };

        declineMatch(
            {
                url: `declineMatchRequest`,
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
        />
    )
}

export default MatchActions