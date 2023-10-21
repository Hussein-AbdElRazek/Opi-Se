import { Navigate, Route, Routes } from 'react-router-dom'

import Login from '../pages/Guest/Login/Login'
import SignUp from '../pages/Guest/SignUp/SignUp'

const Guest = () =>
{
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
    )
}

export default Guest