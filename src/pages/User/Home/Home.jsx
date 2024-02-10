import { useSelector } from 'react-redux';
import HomeUi from './HomeUi'

const Home = () =>
{
    const isHavePartner = !!useSelector(state => state.auth.userData?.partnerId?._id);
    const isNewMessage = useSelector(state => state?.chat?.newMessageMark);
    return (
        <HomeUi
            isHavePartner={isHavePartner}
            isNewMessage={isNewMessage}
        />
    )
}

export default Home