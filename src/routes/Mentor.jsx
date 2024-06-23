import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from '../pages/Mentor/Home/Home'
import Profile from '../pages/User/Profile/Profile'
import EditProfile from '../pages/User/EditProfile/EditProfile'
import ChangePassword from '../pages/User/ChangePassword/ChangePassword'
import Chats from '../pages/User/Chats/Chats'
import Chat from '../pages/User/Chat/Chat'
import VideoSession from '../pages/User/VideoCall/VideoCall'
import ChatProfile from '../pages/User/ChatProfile/ChatProfile'
import NoPartnerYet from '../pages/User/NoPartnerYet/NoPartnerYet'
import PageNotFound from '../pages/User/PageNotFound/PageNotFound'


const Mentor = () =>
{
    const isHavePartner = useSelector(state => state?.auth?.userData?.matchId);

    return (
        <Routes>
            <Route path='/' element={<Home />} >
                <Route path='chats' element={<Chats />} />
                {isHavePartner && (
                    <>
                        <Route path='chats/chat' element={<Chat />} />
                        <Route path='chats/chat/profile' element={<ChatProfile />} />
                    </>
                )}
            </Route>

            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/profile/change-password' element={<ChangePassword />} />

            <Route path='/video/*' element={isHavePartner ? <VideoSession /> : <NoPartnerYet />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Mentor