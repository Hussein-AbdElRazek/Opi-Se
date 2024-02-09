import { useSelector } from 'react-redux';
import HomeUi from './HomeUi'

const Home = () =>
{
    const isHavePartner = !!useSelector(state => state.auth.userData?.partnerId?._id)
    return (
        <HomeUi
            isHavePartner={isHavePartner}
        />
    )
}

export default Home