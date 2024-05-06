import  { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import CallContext from '../callStore/call-context';

const useCall = () =>
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const { setCallerId, setCall, establishStream, stream } = useContext(CallContext);

    const handleVideoCall = () =>
    {
        navigate("/video")
        if (!stream) establishStream("video");
        setCallerId(searchParams.get('id'))
        setCall(prev => ({ ...prev, name: searchParams.get('userName'), profileImage: searchParams.get('profileImage') }))
    }

    const handleVoiceCall = () =>
    {
        if (!stream) establishStream("voice");
        setCallerId(searchParams.get('id'))
        setCall(prev => ({ ...prev, name: searchParams.get('userName'), profileImage: searchParams.get('profileImage') }))
    }

    return { handleVideoCall, handleVoiceCall }
}

export default useCall