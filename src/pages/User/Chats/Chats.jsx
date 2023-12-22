import React from 'react'
import ChatsUi from './ChatsUi'
import { useSelector } from 'react-redux';
const Chats = () =>
{
    const partner = useSelector(state=>state.auth.userData.partnerId);
    return (
        <ChatsUi 
            partner={partner}
        />
    )
}

export default Chats