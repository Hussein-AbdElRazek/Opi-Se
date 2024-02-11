import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useHttp from "../../../../hooks/use-http";
import { authActions } from "../../../../store/auth-slice";
import { disMatch as disMatchSocketHandler } from "../../../../store/match-slice";

const useDisMatch = () =>
{
    // useDisMatch hook to handle call DisMatch API

    const {
        sendRequest: disMatch,
        isLoading: isLoadingDisMatch,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDisMatch = (values, closeModal) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                dispatch(disMatchSocketHandler());
                dispatch(authActions.updateUserData({ matchId: null, partnerId: null }));
                closeModal();
                navigate("/")
            }
        };

        disMatch(
            {
                url: `disMatchWithPartner?matchId=${matchId}`,
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