import React, { useState } from 'react'
import HomeUi from './HomeUi'
import useHttp from '../../../hooks/use-http';
import { useSelector } from 'react-redux';

const Home = () =>
{
    const {
        isLoading: isLoadingRecommendPartner,
        sendRequest: RecommendPartner
    } = useHttp();
    const [recommendedList, setRecommendedList] = useState([])
    const handleRecommendPartner = () =>
    {
        const getResponse = ({ message, data }) =>
        {
            console.log("message", message)
            console.log("data", data)
            if (message === "success")
            {
                setRecommendedList(data);
            }
        };

        RecommendPartner(
            {
                url: "getPartnerRecommendation?page=1",
                method: "GET",
            },
            getResponse
        );
    }
    const isHavePartner = !!useSelector(state=>state.auth.userData?.partnerId?._id)
    return (
        <HomeUi
            handleRecommendPartner={handleRecommendPartner}
            isLoadingRecommendPartner={isLoadingRecommendPartner}
            recommendedList={recommendedList}
            setRecommendedList={setRecommendedList}
            isHavePartner={isHavePartner}
        />
    )
}

export default Home