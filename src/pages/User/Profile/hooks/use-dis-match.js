import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { authActions } from "../../../../store/auth-slice";
import { disMatch as disMatchSocketHandler } from "../../../../store/match-slice";
import { matchModulePath } from "../../../../config";
import { searchActions } from "../../../../store/search-slice";
import { chatActions } from "../../../../store/chat-slice";

const useDisMatch = () =>
{
    // useDisMatch hook to handle call DisMatch API

    const {
        sendRequest: disMatch,
        isLoading: isLoadingDisMatch,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const handleDisMatch = (values, closeModal) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                dispatch(disMatchSocketHandler());
                dispatch(authActions.updateUserData({ matchId: null, partnerId: null }));
                dispatch(searchActions.updateUserData({ matchId: null, partnerId: null, isAvailable:true }));
                dispatch(chatActions.clearMessages());
                closeModal();
            }
        };

        disMatch(
            {
                url: `${matchModulePath}/disMatchWithPartner?matchId=${matchId}`,
                method: "POST",
                body: values,
            },
            getResponse
        );
    }

    return {
        handleDisMatch,
        isLoadingDisMatch
    }
}

export default useDisMatch;