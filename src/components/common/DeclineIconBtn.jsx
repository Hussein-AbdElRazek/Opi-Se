import { IconButton } from '@mui/material'

import { ReactComponent as DeclineIcon } from '../../assets/icons/phoneContainedBottom.svg';
import answerIconBtnClasses from './styles/AnswerIconBtn.module.css'
import declineIconBtnClasses from './styles/DeclineIconBtn.module.css'

export const DeclineIconBtn = ({ onClick }) =>
{
    return (
        <IconButton
            className={`${answerIconBtnClasses.container} ${declineIconBtnClasses.decline}`}
            onClick={onClick}
            title='Decline'
        >
            <DeclineIcon />
        </IconButton>
    )
}
