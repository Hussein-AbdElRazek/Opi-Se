import React from 'react'
import { HeaderText } from '../ui/HeaderText'
import { Paragraph } from '../ui/Paragraph'
import classes from './styles/VectorAndText.module.css'
const VectorAndText = (props) =>
{
    const { img, h, p, isBig } = props
    return (
        <div
            className={`${classes.container} ${isBig ? classes.isBig : ""}`}
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

        </div>
    )
}

export default VectorAndText