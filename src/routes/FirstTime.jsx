import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/User/About/About'
import Questions from '../pages/User/Questions/Questions'
import { useSelector } from 'react-redux'

const FirstTime = () =>
{
    // I make these routes for new user didn't send user prefers yet
    const isCompleteAboutData = !!useSelector(state => state.auth.userData.isCompleteAboutData);

    return (
        <Routes>
            <Route path='/about' element={<About />} />
            {isCompleteAboutData && (
                <Route path='/questions' element={<Questions />} />
            )}
            <Route path="*" element={<Navigate to="/about" replace={true} />} />
        </Routes>
    )
}

export default FirstTime