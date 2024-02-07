import { IconButton } from '@mui/material'

import { ReactComponent as AnswerIcon } from '../../assets/icons/phoneContainedBottom.svg';
import classes from './styles/AnswerIconBtn.module.css'

export const AnswerIconBtn = ({ onClick }) =>
{
    return (
        <IconButton
            className={`${classes.container} ${classes.answer}`}
            onClick={onClick}
            title='Answer'
        >
            <AnswerIcon />
        </IconButton>
    )
}
