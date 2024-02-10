import { Btn } from '../../../components/inputs'
import classes from './MatchActions.module.css'
export const MatchActionsUi = (props) =>
{
    const {
        handleAcceptMatch,
        isLoadingAcceptMatch,
        handleDeclineMatch,
        isLoadingDeclineMatch,
        smallBtn
    } = props;
    return (
        <div
            className={`${smallBtn ? classes.action : ""}`}
        >
            <Btn
                onClick={handleAcceptMatch}
                isLoading={isLoadingAcceptMatch}
            >
                Accept
            </Btn>
            <Btn
                className={classes.deleteBtn}
                onClick={handleDeclineMatch}
                isLoading={isLoadingDeclineMatch}
            >
                Delete
            </Btn>
        </div>
    )
}

export default MatchActionsUi;