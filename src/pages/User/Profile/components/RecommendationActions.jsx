import ActionsLayout from './ActionsLayout'
import { Btn } from '../../../../components/inputs'
import { ReactComponent as AddIcon } from '../../../../assets/icons/add.svg'
import classes from '../styles/Btns.module.css'
import useSendPartnerRequest from '../../Home/RecommendationList/hooks/use-send-partner-request'
import { useSearchParams } from 'react-router-dom'
const RecommendationActions = () =>
{
    const [searchParams] = useSearchParams();
    const {
        handleSendPartnerRequest,
        isLoadingSendPartnerRequest,
    } = useSendPartnerRequest();
    const userData = { _id: searchParams.get("userId") }
    
    return (
        <ActionsLayout>
            <Btn
                startIcon={<AddIcon fill='var(--primary)' />}
                className={classes.addBtn}
                isLoading={isLoadingSendPartnerRequest}
                onClick={() => { handleSendPartnerRequest(userData) }}
            >
                Add Partner
            </Btn>
        </ActionsLayout>
    )
}

export default RecommendationActions