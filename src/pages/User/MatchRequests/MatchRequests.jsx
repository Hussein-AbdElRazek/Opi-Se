import { useEffect } from 'react';
import useHttp from '../../../hooks/use-http';
import MatchRequestsUi from './MatchRequestsUi'
import { useDispatch, useSelector } from 'react-redux';
import { matchModulePath } from '../../../config';
import { uiActions } from '../../../store/ui-slice';
import { matchActions } from '../../../store/match-slice';

const MatchRequests = () =>
{
    const dispatch = useDispatch();
    const {
        isLoading: isLoadingGetRequests,
        sendRequest: getRequests
    } = useHttp();
    const requests = useSelector(state => state.match.requests)
    const uiId = "requests";
    const isRequestsOpen = !!useSelector(state => state.ui.isPopMenuOpened)[uiId]

    useEffect(() =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                dispatch(matchActions.mergeRequests(data.partnerRequests))
            }
        };

        if (isRequestsOpen) getRequests(
            {
                url: `${matchModulePath}/getMatchRequest`,
            },
            getResponse
        );
    }, [dispatch, getRequests, isRequestsOpen])

    const closeRequestsMenu = () =>
    {
        if (isRequestsOpen)
        { dispatch(uiActions.closePopMenu("requests")) }
    }

    return (
        <MatchRequestsUi
            requests={requests}
            isLoadingGetRequests={isLoadingGetRequests}
            uiId={uiId}
            closeRequestsMenu={closeRequestsMenu}
        />
    )
}

export default MatchRequests