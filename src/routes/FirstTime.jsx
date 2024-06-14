import { Navigate, Route, Routes } from 'react-router-dom'

import About from '../pages/User/About/About'


const FirstTime = () =>
{
    // I make these routes for new user didn't send user prefers yet

    return (
        <Routes>
            <Route path='/prefers' element={<About />} />
            <Route path="*" element={<Navigate to="/prefers" replace={true} />} />
        </Routes>
    )
}

export default FirstTime