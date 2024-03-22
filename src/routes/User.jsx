import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from '../pages/User/Home/Home'
import Profile from '../pages/User/Profile/Profile'
import EditProfile from '../pages/User/EditProfile/EditProfile'
import ChangePassword from '../pages/User/ChangePassword/ChangePassword'
import Chats from '../pages/User/Chats/Chats'
import Chat from '../pages/User/Chat/Chat'
import VideoSession from '../pages/User/VideoCall/VideoCall'
import ChatProfile from '../pages/User/ChatProfile/ChatProfile'
import Notes from '../pages/User/Notes/Notes'
import NotesTrash from '../pages/User/NotesTrash/NotesTrash'
import RecommendationList from '../pages/User/Home/RecommendationList/RecommendationList'
import MentalHealthQuestions from '../pages/User/MentalHealth/MentalHealthQuestions/MentalHealthQuestions'
import MentalHealthResult from '../pages/User/MentalHealth/MentalHealthResult/MentalHealthResult'
import NoPartnerYet from '../pages/User/NoPartnerYet/NoPartnerYet'
import TasksHome from '../pages/User/Tasks/TasksHome'
import Tasks from '../pages/User/Tasks/Tasks/Tasks'
import AddTask from '../pages/User/Tasks/Tasks/components/AddTask'
import EditTask from '../pages/User/Tasks/Tasks/components/EditTask'
import PageNotFound from '../pages/User/PageNotFound/PageNotFound'
import AddNote from '../pages/User/Notes/components/AddNote'
import EditNote from '../pages/User/Notes/components/EditNote'
import Calender from '../pages/User/Tasks/Calender/Calender'
import DayEventsModal from '../pages/User/Tasks/Calender/components/DayEventsModal'

const User = () =>
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

            <Route path='/recommendation' element={<RecommendationList />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/profile/change-password' element={<ChangePassword />} />

            <Route path='/mental-health' element={<MentalHealthResult />} />
            <Route path='/mental-health/questions' element={<MentalHealthQuestions />} />

            <Route path='/video/*' element={isHavePartner ? <VideoSession /> : <NoPartnerYet />} />

            <Route path='/notes' element={isHavePartner ? <Notes /> : <NoPartnerYet />} >
                <Route path='new' element={<AddNote />} />
                <Route path='edit' element={<EditNote />} />
            </Route>
            <Route path='/notes/trash' element={isHavePartner ? <NotesTrash /> : <NoPartnerYet />} />

            <Route path='/tasks' element={isHavePartner ? <TasksHome /> : <NoPartnerYet />} >
                {/* for handle all paths for tasks page  */}
                {['', 'todo', 'inprogress', 'done'].map((tasksPath, index) => (
                    <Route key={index} path={tasksPath} element={<Tasks />}>
                        <Route path='new' element={<AddTask />} />
                        <Route path='edit' element={<EditTask />} />
                    </Route>
                ))}
                <Route path='calender' element={<Calender />} >
                    <Route path=':day' element={<DayEventsModal />} />
                </Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default User