import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/User/Home/Home'
import Profile from '../pages/User/Profile/Profile'
import About from '../pages/User/QuestionsAndAbout/About'
import Questions from '../pages/User/QuestionsAndAbout/Questions'
import EditProfile from '../pages/User/EditProfile/EditProfile'
import ChangePassword from '../pages/User/ChangePassword/ChangePassword'
import Chats from '../pages/User/Chats/Chats'
import Chat from '../pages/User/Chat/Chat'
import VideoSession from '../pages/User/VideoSession/VideoSession'
import MatchRequests from '../pages/User/MatchRequests/MatchRequests'
import Notifications from '../pages/User/Notifications/Notifications'



const User = () =>
{
    return (
        <Routes>
            <Route path='/' element={<Home />} >
                <Route path='chats' element={<Chats />} />
                <Route path='chats/chat' element={<Chat />} />
                <Route path='requests' element={<MatchRequests />} />
                <Route path='notifications' element={<Notifications />} />
            </Route>
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/profile/change-password' element={<ChangePassword />} />
            <Route path='/about' element={<About />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/video/*' element={<VideoSession />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />

        </Routes>
    )
}

export default User