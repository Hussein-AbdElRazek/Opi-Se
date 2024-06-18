import ActionsLayout from './ActionsLayout'
import classes from '../styles/ActionsLayout.module.css'
import MatchActions from '../../MatchRequests/MatchActions'

const MatchRequestActions = ({ requestData }) =>
{

    return (
        <ActionsLayout>
            <div
                className={classes.fromMatch}
            >
                <MatchActions requestData={requestData} />
            </div>
        </ActionsLayout>
    )
}

export default MatchRequestActions