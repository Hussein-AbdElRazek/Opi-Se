
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SessionUi from './SessionUi';
import
    {
        endChatSession,
        replyChatSession,
        startChatSession
    } from '../../../store/chat-slice';

const Session = () =>
{
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const intervalRef = useRef(null);
    const dispatch = useDispatch();

    const handleStartSession = () =>
    {
        // emit socket
        dispatch(startChatSession());
    };

    const handleAcceptSessionRequest = () =>
    {
        dispatch(replyChatSession({ accept: true }));
    }

    const handleRejectSessionRequest = () =>
    {
        dispatch(replyChatSession({ accept: false }));
    }

    // for get session end date
    const addMillisecondsToDate = (date, millisecondsToAdd) =>
    {
        const tempDate = new Date(date);
        const currentTimestamp = tempDate.getTime();
        const newTimestamp = currentTimestamp + millisecondsToAdd;

        const newDate = new Date();
        newDate.setTime(newTimestamp);
        console.log("currentTimestamp", currentTimestamp)
        console.log("newTimestamp", newTimestamp)
        return newDate;
    }

    const sessionData = useSelector(state => state.chat.session)
    const handleEndSession = () =>
    {
        //emit endChatSession
        const sessionSubmitData = {
            sessionDate: sessionData.startDate,
            sessionStartDate: sessionData.startDate,
            sessionEndDate: addMillisecondsToDate(sessionData.startDate, timeInSeconds * 1000),
            sessionTopic: "test",
            sessionPoints: "10"
        }
        dispatch(endChatSession(sessionSubmitData))

        //clear state data
        clearInterval(intervalRef.current);
        setTimeInSeconds(0);
    };

    const status = useSelector(state => state.chat.session.status);

    // update time every one second
    useEffect(() =>
    {
        if (status === "running")
        {
            intervalRef.current = setInterval(() =>
            {
                setTimeInSeconds((prevTimer) => prevTimer + 1);
            }, 1000); // Update timeInSeconds every 1000 milliseconds (1 Second)
        }
    }, [status])

    // Format time for display
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const remainingSeconds = timeInSeconds % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    return (
        <SessionUi
            handleStartSession={handleStartSession}
            handleEndSession={handleEndSession}
            formattedTime={formattedTime}
            handleAcceptSessionRequest={handleAcceptSessionRequest}
            handleRejectSessionRequest={handleRejectSessionRequest}
        />
    )
}

export default Session