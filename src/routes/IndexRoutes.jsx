
import { useSelector } from 'react-redux'

import Guest from './Guest'
import User from './User'
import FirstTime from './FirstTime'

const IndexRoutes = () =>
{
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const firstTime = useSelector((state) => state.auth.userData?.getUserPrefers);

    return (
        <>
            {
                // user has submitted user prefers
                isLoggedIn && !firstTime ?
                    <User /> :
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