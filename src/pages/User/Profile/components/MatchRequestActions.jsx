import ActionsLayout from './ActionsLayout'
import classes from '../styles/ActionsLayout.module.css'
import MatchActions from '../../MatchRequests/MatchActions'
import { useSearchParams } from 'react-router-dom'

const MatchRequestActions = ({ requestData }) =>
{
    const [searchParams] = useSearchParams();
    const requestId = searchParams.get("requestId");

    return (
        <ActionsLayout>
            <div
                className={classes.fromMatch}
            >
                <MatchActions requestData={{
                    partnerId: requestData._id,
                    partnerUserName: requestData.partnerUserName,
                    nationalId: requestData.nationalId,
                    _id: requestId,
                }} />
            </div>

        </ActionsLayout>
    )
}

export default MatchRequestActions