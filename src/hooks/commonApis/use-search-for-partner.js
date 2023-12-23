import useHttp from "../use-http";
import { useNavigate } from "react-router-dom";
const useSearchForPartner = () =>
{
    const {
        isLoading: isLoadingSearchForPartner,
        sendRequest: searchForPartner
    } = useHttp();

    const navigate = useNavigate();

    const handleSearchForPartner = ({ userId }) =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                const searchData = { ...data };
                searchData.id = userId;
                searchData.type = "SEARCH_PROFILE";
                navigate(`/profile?${new URLSearchParams(searchData)}`);
            }
        };

        searchForPartner(
            {
                url: `searchForSpecificPartner?userId=${userId}`,
            },
            getResponse
        );

    }
    return {
        handleSearchForPartner,
        isLoadingSearchForPartner,
    }
}

export default useSearchForPartner;