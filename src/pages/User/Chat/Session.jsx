
import { useDispatch, useSelector } from 'react-redux';

import SessionUi from './SessionUi';
import { endChatSession, startChatSession } from '../../../store/chat-slice';
import useTimer from '../../../hooks/use-timer';

const Session = () =>
{
    const dispatch = useDispatch();
    const status = useSelector(state => state.chat.session.status);

    const {
        timeInSeconds,
        setTimeInSeconds,
        intervalRef,
        formattedTime
    } = useTimer(status === "running");

    const handleStartSession = () =>
    {
        // emit socket
        dispatch(startChatSession());
    };

    // for get session end date
    const addMillisecondsToDate = (date, millisecondsToAdd) =>
    {
        const tempDate = new Date(date);
        const currentTimestamp = tempDate.getTime();
        const newTimestamp = currentTimestamp + millisecondsToAdd;
        const newDate = new Date();
        newDate.setTime(newTimestamp);
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

    return (
        <SessionUi
            handleStartSession={handleStartSession}
            handleEndSession={handleEndSession}
            formattedTime={formattedTime}
        />
    )
}

export default Session