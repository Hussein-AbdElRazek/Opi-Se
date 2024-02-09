import React, { useEffect, useState } from 'react'
import RecommendationListUi from './RecommendationListUi'
import useHttp from '../../../../hooks/use-http';
import { useSearchParams } from 'react-router-dom';

const RecommendationList = () =>
{
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        isLoading: isLoadingRecommendPartner,
        sendRequest: RecommendPartner
    } = useHttp();
    const [recommendedList, setRecommendedList] = useState([]);
    const [lastPage, setLastPage] = useState(-1);

    // get new data if page changed
    useEffect(() =>
    {
        const currentPage = searchParams.get("p") || 1;
        const handleRecommendPartner = () =>
        {
            const getResponse = ({ message, data, totalPages }) =>
            {
                if (message === "success")
                {
                    setRecommendedList(data);
                    if (totalPages !== Number(searchParams.get("l") || 1)) setSearchParams({ p: searchParams.get("p") || 1, l: totalPages })
                    setLastPage(currentPage);
                }
            };

            RecommendPartner(
                {
                    url: `getPartnerRecommendation?page=${currentPage}&limit=4`,
                },
                getResponse
            );
        }

        // to get new data only if page changed
        if (lastPage !== currentPage) handleRecommendPartner();
    }, [RecommendPartner, lastPage, searchParams, setSearchParams])

    return (
        <RecommendationListUi
            recommendedList={recommendedList}
            isLoadingRecommendPartner={isLoadingRecommendPartner}
        />
    )
}

export default RecommendationList