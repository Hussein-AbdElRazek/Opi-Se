import { useSelector } from 'react-redux';

import classes from './Session.module.css'
import { Btn } from '../../../components/inputs'

const SessionUi = (props) =>
{
    const {
        handleStartSession,
        handleEndSession,
        formattedTime,
    } = props;

    // get data from store
    const isLoading = useSelector(state => state.chat.session.isLoading);
    const status = useSelector(state => state.chat.session.status);

    return (
        <div
            className={classes.container}
            title={status === "waiting" ? "Waiting to respond..." : "Start focus session"}
        >
            {/*  Start/Stop/waiting Btn and timer  */}
            {status === "running" ? (
                <Btn
                    className={`${classes.btnBasics} ${classes.stopBtn}`}
                    onClick={handleEndSession}
                    isLoading={isLoading}
                >
                    Stop
                    <span
                        className={classes.timer}
                    >
                        {formattedTime}
                    </span>
                </Btn>
            ) : (
                <Btn
                    className={`${classes.btnBasics} ${classes.startBtn} ${status === "waiting" ? classes.waitBtn : ""}`}
                    onClick={handleStartSession}
                    isLoading={isLoading}
                    disabled={status === "waiting"}
                >
                    {status === "waiting" ? "Waiting" : "Start"}
                </Btn>
            )}
        </div>
    )
}

export default SessionUi