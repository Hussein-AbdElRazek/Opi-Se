import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from '../pages/User/Home/Home'
import Profile from '../pages/User/Profile/Profile'
import EditProfile from '../pages/User/EditProfile/EditProfile'
import ChangePassword from '../pages/User/ChangePassword/ChangePassword'
import Chats from '../pages/User/Chats/Chats'
import Chat from '../pages/User/Chat/Chat'
import VideoSession from '../pages/User/VideoCall/VideoCall'
import MatchRequests from '../pages/User/MatchRequests/MatchRequests'
import Notifications from '../pages/User/Notifications/Notifications'
import ChatProfile from '../pages/User/ChatProfile/ChatProfile'
import Notes from '../pages/User/Notes/Notes'
import NotesTrash from '../pages/User/NotesTrash/NotesTrash'
import RecommendationList from '../pages/User/Home/RecommendationList/RecommendationList'
import MentalHealthQuestions from '../pages/User/MentalHealth/MentalHealthQuestions/MentalHealthQuestions'
import MentalHealthResult from '../pages/User/MentalHealth/MentalHealthResult/MentalHealthResult'
import TestVideo from '../pages/User/TestVideo/TestVideo'
import NoPartnerYet from '../pages/User/NoPartnerYet/NoPartnerYet'

const User = () =>
{
    const isHavePartner = useSelector(state => state?.auth?.userData?.matchId);

    return (
        <Routes>
            <Route path='/test' element={<TestVideo />} />

            <Route path='/' element={<Home />} >
                <Route path='chats' element={<Chats />} />
                {isHavePartner && (
                    <>
                        <Route path='chats/chat' element={<Chat />} />
                        <Route path='chats/chat/profile' element={<ChatProfile />} />
                    </>
                )}

                <Route path='requests' element={<MatchRequests />} />
                <Route path='notifications' element={<Notifications />} />
            </Route>

            <Route path='/recommendation' element={<RecommendationList />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/profile/change-password' element={<ChangePassword />} />

            <Route path='/mental-health' element={<MentalHealthResult />} />
            <Route path='/mental-health/questions' element={<MentalHealthQuestions />} />

            <Route path='/video/*' element={isHavePartner ? <VideoSession /> : <NoPartnerYet />} />
            <Route path='/notes' element={isHavePartner ? <Notes /> : <NoPartnerYet />} />
            <Route path='/notes/trash' element={isHavePartner ? <NotesTrash /> : <NoPartnerYet />} />

            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    )
}

export default User