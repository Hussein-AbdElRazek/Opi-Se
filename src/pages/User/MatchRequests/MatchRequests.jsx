import { useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';
import MatchRequestsUi from './MatchRequestsUi'
import { useSelector } from 'react-redux';
import { matchModulePath } from '../../../config';

const MatchRequests = () =>
{
    const {
        isLoading: isLoadingGetRequests,
        sendRequest: getRequests
    } = useHttp();
    const [requests, setRequests] = useState([]);
    const uiId = "requests";
    const isRequestsOpen = !!useSelector(state => state.ui.isPopMenuOpened)[uiId]

    useEffect(() =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                setRequests(data.partnerRequests)
            }
        };

        if (isRequestsOpen) getRequests(
            {
                url: `${matchModulePath}/getMatchRequest`,
            },
            getResponse
        );
    }, [getRequests, isRequestsOpen])

    return (
        <MatchRequestsUi
            requests={requests}
            isLoadingGetRequests={isLoadingGetRequests}
            uiId={uiId}
        />
    )
}

export default MatchRequests