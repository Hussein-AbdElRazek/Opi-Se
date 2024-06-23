
import { useSelector } from 'react-redux'

import Guest from './Guest'
import User from './User'
import FirstTime from './FirstTime'
import Mentor from './Mentor'

const IndexRoutes = () =>
{
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const firstTime = useSelector((state) => state.auth.userData?.getUserPrefers);
    const role = useSelector(state => state?.auth?.userData?.role);

    return (
        <>
            {
                // user has submitted user prefers
                isLoggedIn && !firstTime ?
                    role && role === 'user' ?
                        <User /> :
                        <Mentor />
                    :
                    // user hasn't submit user prefers yet
                    isLoggedIn && firstTime ?
                        <FirstTime /> :
                        // guest
                        <Guest />
            }
        </>
    )
}

export default IndexRoutes