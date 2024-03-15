import ActionsLayout from './ActionsLayout'
import { Btn } from '../../../../components/inputs'
import { ReactComponent as AddIcon } from '../../../../assets/icons/add.svg'
import classes from '../styles/Btns.module.css'
const RecommendationActions = () =>
{
    return (
        <ActionsLayout>
            <Btn
                startIcon={<AddIcon fill='var(--primary)'/>}
                className={classes.addBtn}
            >
                Add
            </Btn>
        </ActionsLayout>
    )
}

export default RecommendationActions