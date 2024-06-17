import { useDispatch } from "react-redux";
import useHttp from "../use-http";
import { useNavigate } from "react-router-dom";
import { searchActions } from "../../store/search-slice";
import { matchModulePath } from "../../config";
import { useCallback } from "react";
const useSearchForPartner = () =>
{
    const {
        isLoading: isLoadingSearchForPartner,
        sendRequest: searchForPartner
    } = useHttp();

    const navigate = useNavigate();
    const currentUrl = window.location.pathname;
    const dispatch = useDispatch();
    const handleSearchForPartner = useCallback(({ userId }) =>
    {
        const getResponse = ({ message, data, profileDetails }) =>
        {
            if (message === "success")
            {
                dispatch(searchActions.setUserData({ ...profileDetails,...data}))
                if (currentUrl !== "/profile") navigate(`/profile?userId=${userId}`)
            } else
            {
                navigate("/")
            }
        };

        searchForPartner(
            {
                url: `${matchModulePath}/searchForSpecificPartner?userId=${userId}`,
            },
            getResponse
        );

    },[currentUrl, dispatch, navigate, searchForPartner])
    return {
        handleSearchForPartner,
        isLoadingSearchForPartner,
    }
}

export default useSearchForPartner;