import { IconButton } from '@mui/material'

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import classes from './styles/ProfileItem.module.css'

export const ProfileItem = ({ onEdit, Action, title, text, secText }) =>
{
    return (
        <div className={`${classes.container} space-between flex-wrap`}>
            <div>
                <h4>
                    {title}
                </h4>
                <p>
                    {text}
                </p>
                <p>
                    {secText}
                </p>
            </div>
            <IconButton className={classes.editBtn}>
                <EditIcon />
            </IconButton>
        </div>
    )
}
