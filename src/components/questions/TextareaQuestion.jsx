import React from 'react'
import { FormikControl } from '../inputs'
import booleanClasses from './styles/BooleanQuestion.module.css'
import classes from './styles/TextareaQuestion.module.css'
import { HeaderText } from '../ui';
export const TextareaQuestion = (props) =>
{
    const { label, ...rest } = props;
    return (
        <div
            className={`${classes.container} ${booleanClasses.container}`}
        >
            <HeaderText
                size="medium"
            >
                {label}
            </HeaderText>
            <FormikControl
                control="input"
                type="text"
                multiline={true}
                rows={3}
                {...rest}
            />
        </div>
    )
}
