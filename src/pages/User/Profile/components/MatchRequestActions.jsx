import ActionsLayout from './ActionsLayout'
import { Btn } from '../../../../components/inputs'
import classes from '../styles/Btns.module.css'

const MatchRequestActions = () =>
{
    return (
        <ActionsLayout>
            <Btn>
                Accept
            </Btn>

            <Btn
                className={classes.lightBtn}
            >
                Delete
            </Btn>
        </ActionsLayout>
    )
}

export default MatchRequestActions