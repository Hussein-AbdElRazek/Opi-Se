import React from 'react'
import ProgressUi from './ProgressUi'
import { useSelector } from 'react-redux'

const Progress = () =>
{
    const userName = useSelector(state => state.auth.userData.userName);
    return (
        <ProgressUi 
            userName={userName}
        />
    )
}

export default Progress