import React from 'react'
import { HeaderText } from '../ui/HeaderText'
import { Paragraph } from '../ui/Paragraph'
import classes from './styles/VectorAndText.module.css'
const VectorAndText = (props) =>
{
    const { img, h, p, isBig, action, fullScreen } = props
    return (
        <div
            className={`${classes.container} 
            ${isBig ? classes.isBig : ""}
            ${fullScreen ? classes.fullScreen : ""}
            
            `}
        >
            <img src={img} alt='' />

            {h && (
                <HeaderText>
                    {h}
                </HeaderText>
            )}

            {p && (
                <Paragraph>
                    {p}
                </Paragraph>
            )}

            {action && (
                <div
                    className={`${classes.action} center-x`}
                >
                    {action}
                </div>
            )}

        </div>
    )
}

export default VectorAndText