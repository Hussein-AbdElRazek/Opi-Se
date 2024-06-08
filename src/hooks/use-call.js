import { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import CallContext from '../callStore/call-context';

const useCall = () =>
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const { setCallerId, setCall, establishStream, stream } = useContext(CallContext);
    const [callType, setCallType] = useState();
    const handleVideoCall = () =>
    {
        if (!stream) establishStream("video");
        setCallType("video")
    }

    const handleVoiceCall = () =>
    {
        if (!stream) establishStream("voice");
        setCallType("voice")
    }

    useEffect(() =>
    {
        console.log("usecall use effetc")
        if (stream && callType === 'video')
        {
            navigate("/video")
            setCallerId(searchParams.get('id'))
            setCall(prev => ({ ...prev, name: searchParams.get('userName'), profileImage: searchParams.get('profileImage') }))
        } else if (stream && callType === 'voice')
        {
            console.log("else call voice")
            setCallerId(searchParams.get('id'))
            setCall(prev => ({ ...prev, name: searchParams.get('userName'), profileImage: searchParams.get('profileImage') }))
        }
    }, [callType, navigate, searchParams, setCall, setCallerId, stream])
    return { handleVideoCall, handleVoiceCall }
}

export default useCall