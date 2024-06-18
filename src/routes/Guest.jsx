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

const Guest = () =>
{
    const location = useLocation();
    const isUser = location.pathname.includes("user")
    console.log("isUser", isUser)

    return (
        <Routes>


            <Route path='/:userType/signup' element={<SignUp />} >
                {/* For user only*/}
                {isUser && <Route path='resend-email' element={<ResendEmail />} />}
                {/*  */}
            </Route>

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