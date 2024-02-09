import { useSnackbar } from "notistack";

import useHttp from "../../../../../hooks/use-http";
import { useNavigate } from "react-router-dom";

const useSendPartnerRequest = () =>
{
    // useSendPartnerRequest hook to handle call sendPartnerRequest API

    const {
        sendRequest: sendPartnerRequest,
        isLoading: isLoadingSendPartnerRequest,
    } = useHttp();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const navigate = useNavigate();

    const handleSendPartnerRequest = (userData) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Request sent successfully")
                navigate("/");
            }
        };

        sendPartnerRequest(
            {
                url: `sendPartnerRequest?userId=${userData._id}`,
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