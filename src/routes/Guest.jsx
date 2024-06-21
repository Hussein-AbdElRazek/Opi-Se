import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Login from '../pages/Guest/Login/Login'
import SignUp from '../pages/Guest/SignUp/SignUp'
import ForgetPassword from '../pages/Guest/ForgetPassword/ForgetPassword'
import ResetPassword from '../pages/Guest/ResetPassword/ResetPassword'
import ResendEmail from '../pages/Guest/ResendEmail/ResendEmail'
import ContactUs from '../pages/Guest/ContactUs/ContactUs'
import Features from '../pages/Guest/Feauters/Features'
import AboutUs from '../pages/Guest/AboutUs/AboutUs'
import Landing from '../pages/Guest/Landing/Landing'
import { useSelector } from 'react-redux'
import MentorSignupCompletion from '../pages/Guest/MentorSignupCompletion/MentorSignupCompletion'
import MentorSignupCompletion2 from '../pages/Guest/MentorSignupCompletion/MentorSignupCompletion2'
import MentorVerification from '../pages/Guest/MentorVerification/MentorVerification'

const Guest = () =>
{
    const location = useLocation();
    const lastSignupStep = Number(useSelector(state => state.signupMentor?.lastSignupStep))
    const isUser = location.pathname.includes("user")
    const isMentor = location.pathname.includes("mentor")

    return (
        <Routes>

            <Route path='/:userType/signup' element={<SignUp />} >
                {/* For user only*/}
                {isUser && <Route path='resend-email' element={<ResendEmail />} />}
                {/*  */}
            </Route>

            {/* For mentor only*/}
            {(isMentor && lastSignupStep >= 0) && <Route path='/:userType/signup/1' element={<MentorSignupCompletion />} />}
            {(isMentor && lastSignupStep >= 1) && <Route path='/:userType/signup/2' element={<MentorSignupCompletion2 />} />}
            {(isMentor && lastSignupStep >= 2) && <Route path='/mentor/verification/*' element={<MentorVerification />} />}
            {/*  */}

            <Route path='/:userType/login' element={<Login />} />
            <Route path='/:userType/reset-password/*' element={<ResetPassword />} />
            <Route path='/:userType/forgot-password' element={<ForgetPassword />} />

            <Route path='/contact' element={<ContactUs />} />
            <Route path='/features' element={<Features />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/' element={<Landing />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    )
}

export default Guest