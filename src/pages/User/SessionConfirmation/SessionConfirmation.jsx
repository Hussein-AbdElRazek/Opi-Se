import React from 'react'
import { ModalCard } from '../../../components/ui';
import { useDispatch, useSelector } from 'react-redux';
import { Btn } from '../../../components/inputs';
import { replyChatSession } from '../../../store/chat-slice';
import { useNavigate } from 'react-router-dom';

import classes from '../Chat/Session.module.css'
const SessionConfirmation = () =>
{
    const dispatch = useDispatch();

    const status = useSelector(state => state.chat.session.status);
    const isLoading = useSelector(state => state.chat.session.isLoading);

    const partnerData = useSelector(state => state.auth?.userData?.partnerId);
    const navigate = useNavigate();
    const handleAcceptSessionRequest = () =>
    {
        dispatch(replyChatSession({ accept: true }));
        navigate(`/chats/chat?id=${partnerData._id}&userName=${partnerData.userName}&profileImage=${partnerData.profileImage}`)
    }

    const handleRejectSessionRequest = () =>
    {
        dispatch(replyChatSession({ accept: false }));
    }

    return (
        <>
            {/* incoming new session request Modal */}
            {status === "newRequest" && (
                <ModalCard
                    open={status === "newRequest"}
                >
                    <p>{partnerData.userName} wants to start recording, <br />do you agree?</p>
                    <Btn
                        onClick={handleAcceptSessionRequest}
                        className={classes.startBtn}
                        isLoading={isLoading && status === "accepting"}
                    >
                        Accept
                    </Btn>
                    <Btn
                        onClick={handleRejectSessionRequest}
                        className={classes.stopBtn}
                        isLoading={isLoading && status === "rejecting"}
                    >
                        Reject
                    </Btn>
                </ModalCard>
            )}
        </>
    )
}

export default SessionConfirmation