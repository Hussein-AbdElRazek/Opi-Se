import { useSelector } from 'react-redux';

import classes from './Session.module.css'
import { Btn } from '../../../components/inputs'
import { ModalCard } from '../../../components/ui';

const SessionUi = (props) =>
{
    const {
        handleStartSession,
        handleEndSession,
        formattedTime,
        handleAcceptSessionRequest,
        handleRejectSessionRequest,
    } = props;

    // get data from store
    const isLoading = useSelector(state => state.chat.session.isLoading);
    const status = useSelector(state => state.chat.session.status);
    const partnerUserName = useSelector(state => state.auth?.userData?.partnerId?.userName);

    return (
        <>
            {/* Start/Stop Btn and timer */}
            <div
                className={classes.container}
                title={status === "waiting" ? "Waiting to respond..." : "Start focus session"}
            >
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
                        className={`${classes.btnBasics} ${classes.startBtn}`}
                        onClick={handleStartSession}
                        isLoading={isLoading}
                        disabled={status === "waiting"}
                    >
                        {status === "waiting" ? "Waiting..." : "Start"}
                    </Btn>
                )}
            </div>

            {/* incoming new session request Modal */}
            {status === "newRequest" && (
                <ModalCard
                    open={status === "newRequest"}
                >
                    <p>{partnerUserName} wants to start recording, <br />do you agree?</p>
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

export default SessionUi