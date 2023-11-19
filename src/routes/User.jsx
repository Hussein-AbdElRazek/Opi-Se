import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/User/Home/Home'
import Profile from '../pages/User/Profile/Profile'
import About from '../pages/User/QuestionsAndAbout/About'
import Questions from '../pages/User/QuestionsAndAbout/Questions'



const User = () =>
{
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
            <Route path='/questions' element={<Questions />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />

        </Routes>
    )
}

export default User