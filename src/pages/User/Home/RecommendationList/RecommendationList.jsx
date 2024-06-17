import React, { useEffect, useState } from 'react'
import RecommendationListUi from './RecommendationListUi'
import useHttp from '../../../../hooks/use-http';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { recommendationModulePath } from '../../../../config';
import { recommendationActions } from '../../../../store/recommendation-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const RecommendationList = () =>
{
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        isLoading: isLoadingRecommendPartner,
        sendRequest: RecommendPartner
    } = useHttp();
    const recommendedList = useSelector(state => state.recommendation.recommendations);
    const [lastPage, setLastPage] = useState(-1);

    const { enqueueSnackbar: popMessage } = useSnackbar();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // get new data if page changed
    useEffect(() =>
    {
        const currentPage = searchParams.get("p") || 1;
        const handleRecommendPartner = () =>
        {
            const getResponse = ({ message, data, totalPages }) =>
            {
                if (message === "there is no recommendations yet !")
                {
                    popMessage("There is no recommendations yet for you come back later.");
                    navigate("/");
                }
                if (message === "success")
                {
                    dispatch(recommendationActions.setRecommendations(data))
                    if (totalPages !== Number(searchParams.get("l") || 1)) setSearchParams({ p: searchParams.get("p") || 1, l: totalPages })
                    setLastPage(currentPage);
                }
            };

            RecommendPartner(
                {
                    url: `${recommendationModulePath}/getPartnerRecommendation?page=${currentPage}&limit=4`,
                },
                getResponse
            );
        }

        // to get new data only if page changed
        if (lastPage !== currentPage) handleRecommendPartner();
        
    }, [RecommendPartner, dispatch, lastPage, navigate, popMessage, searchParams, setSearchParams])

    return (
        <RecommendationListUi
            recommendedList={recommendedList}
            isLoadingRecommendPartner={isLoadingRecommendPartner}
        />
    )
}

export default RecommendationList