import { Avatar } from '@mui/material'
import React from 'react'
import maleAvatar from '../../../../../assets/icons/maleAvatar.svg'
import femaleAvatar from '../../../../../assets/icons/femaleAvatar.svg'
import { NavLink } from 'react-router-dom'

import classes from './styles/MentorAvatar.module.css'
const MentorAvatar = (props) =>
{
    const { to, img, name, gender } = props;
    return (
        <div
            className={`${classes.container} center-x center-y flex-wrap`}
        >
            <NavLink to={to}>
                <Avatar
                    className={`${classes.avatar} ${!img ? classes.defaultAvatar : ''}`}
                    src={!!img ? img : gender === 'male' ? maleAvatar : femaleAvatar}
                />
            </NavLink>
            <h3 title={name}>
                {name}
            </h3>
        </div>
    )
}

export default MentorAvatar