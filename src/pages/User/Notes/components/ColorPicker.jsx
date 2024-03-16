import { ButtonBase } from '@mui/material';
import React from 'react'
import classes from '../styles/ColorPicker.module.css'
import { ErrorMessage, Field } from 'formik';
import { InputError } from '../../../../components/inputs';
const ColorPicker = ({disabled}) =>
{
    const colors = ["--note1", "--note2", "--note3", "--note4", "--note5"];

    const pickColor = (color, form) =>
    {
        form.setFieldValue("noteColor", color)
    }

    return (
        <div
            className={classes.container}
        >
            <label>
                Note Color
            </label>
            <div
                className={classes.colorPicker}
            >
                <Field
                    name="noteColor"
                >
                    {({ field, form, meta: { touched, error } }) =>
                    {
                        const { value } = field;
                        return (
                            <>
                                {colors.map((color) => (
                                    <ButtonBase
                                        key={color}
                                        className={`${classes.color} ${value === color ? classes.chosenColor : ""}`}
                                        style={{ backgroundColor: `var(${color})` }}
                                        onClick={() => { pickColor(color, form) }}
                                        disabled={disabled}
                                    />
                                ))}
                                <div
                                    className={classes.errContainer}
                                >
                                    < ErrorMessage
                                        name={'noteColor'}
                                        component={InputError}
                                    />
                                </div>
                            </ >
                        )
                    }}
                </Field>
            </div>
        </div>
    )
}

export default ColorPicker