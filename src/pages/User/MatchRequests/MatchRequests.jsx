import { useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';
import MatchRequestsUi from './MatchRequestsUi'

const MatchRequests = () =>
{
    const {
        isLoading: isLoadingGetRequests,
        sendRequest: getRequests
    } = useHttp();
    const [requests, setRequests] = useState([]);

    useEffect(() =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                setRequests(data.partnerRequests)
            }
        };

        getRequests(
            {
                url: `getMatchRequest`,
            },
            getResponse
        );
        console.log("useEff")
    }, [getRequests])
    return (
        <MatchRequestsUi
            requests={requests}
            isLoadingGetRequests={isLoadingGetRequests}
        />
    )
}

export default MatchRequests