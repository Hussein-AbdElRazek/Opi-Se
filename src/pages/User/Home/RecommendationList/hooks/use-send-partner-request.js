import { useSnackbar } from "notistack";

import useHttp from "../../../../../hooks/use-http";
import { matchModulePath } from "../../../../../config";
import { useDispatch } from "react-redux";
import { recommendationActions } from "../../../../../store/recommendation-slice";
import { notifyUserRoom } from "../../../../../store/user-slice";
import { authActions } from "../../../../../store/auth-slice";
import { searchActions } from "../../../../../store/search-slice";

const useSendPartnerRequest = () =>
{
    // useSendPartnerRequest hook to handle call sendPartnerRequest API

    const {
        sendRequest: sendPartnerRequest,
        isLoading: isLoadingSendPartnerRequest,
    } = useHttp();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const dispatch = useDispatch();

    const handleSendPartnerRequest = (userData) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Request sent successfully")
                dispatch(recommendationActions.addPartner(userData._id))
                dispatch(authActions.updateUserData({ alreadyRequestedHim: true }))
                dispatch(searchActions.updateUserData({ alreadyRequestedHim: true }))
                // notify user
                dispatch(notifyUserRoom(userData._id));
            }
        };

        sendPartnerRequest(
            {
                url: `${matchModulePath}/sendPartnerRequest?userId=${userData._id}`,
                method: "POST",
            },
            getResponse
        );
    }

    return {
        handleSendPartnerRequest,
        isLoadingSendPartnerRequest,
    }
}

export default useSendPartnerRequest;