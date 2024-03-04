import { useEffect, useRef, useState } from 'react'

const useTimer = (isRunning) =>
{
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const intervalRef = useRef(null);

    // update time every one second
    useEffect(() =>
    {
        if (isRunning)
        {
            intervalRef.current = setInterval(() =>
            {
                setTimeInSeconds((prevTimer) => prevTimer + 1);
            }, 1000); // Update timeInSeconds every 1000 milliseconds (1 Second)
        }
    }, [isRunning])

    // Format time for display
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const remainingSeconds = timeInSeconds % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    return {
        timeInSeconds,
        setTimeInSeconds,
        intervalRef,
        formattedTime,
    }
}

export default useTimer