import { Avatar, ButtonBase } from '@mui/material';
import React from 'react'
import classes from './styles/PollOption.module.css'
import { getTypingDirection } from '../../helpers/getTypingDirection';
export const PollOption = (props) =>
{
    const { optionContent } = props;
    const textDirection = getTypingDirection(optionContent);

    return (
        <div
            className={classes.container}
        >
            <ButtonBase
                className={classes.optionBtn}
            >
                <p
                    style={{ direction: textDirection, textAlign: textDirection === "rtl" ? "right" : "left" }}
                >
                    {optionContent}
                </p>
                <Avatar className={classes.avatar} />
            </ButtonBase>
            <span
                className={classes.ratio}
            >
                0%
            </span>
        </div>
    )
}
