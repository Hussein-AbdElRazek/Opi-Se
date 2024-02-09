import { useDispatch } from "react-redux";
import useHttp from "../use-http";
import { useNavigate } from "react-router-dom";
import { searchActions } from "../../store/search-slice";
const useSearchForPartner = () =>
{
    const {
        isLoading: isLoadingSearchForPartner,
        sendRequest: searchForPartner
    } = useHttp();

    const navigate = useNavigate();
    const currentUrl = window.location.pathname;
    const dispatch = useDispatch();
    const handleSearchForPartner = ({ userId }) =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                dispatch(searchActions.setUserData(data))
                if (currentUrl !== "/profile") navigate(`/profile?userId=${userId}`)
            } else
            {
                navigate("/")
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