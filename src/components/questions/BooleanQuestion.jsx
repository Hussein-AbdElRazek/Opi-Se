
import { ButtonBase, FormControl, FormControlLabel, RadioGroup } from '@mui/material'
import { ErrorMessage, Field } from 'formik';

import { HeaderText } from '../ui'
import classes from './styles/BooleanQuestion.module.css'
import { InputError } from '../inputs';

export const BooleanQuestion = (props) =>
{
    const {
        name,
        disabled,
        label,
        firstRadio,
        secondRadio,
        onBlur,
    } = props;

    return (
        <div
            className={classes.container}
        >
            <HeaderText
                size="medium"
            >
                {label}
            </HeaderText>

            <Field
                name={name}
                disabled={disabled}
            >
                {({ field, form }) =>
                {
                    return (
                        <FormControl
                            fullWidth
                            className={classes.formControl}
                            name={name}
                        >
                            <RadioGroup
                                row
                                aria-labelledby={`${name}-label`}
                                id={name}
                                {...field}
                            >
                                {/* First button  */}
                                <FormControlLabel
                                    value={firstRadio}
                                    control={
                                        <ButtonBase
                                            onClick={() =>
                                            {
                                                form.setFieldValue(name, firstRadio);
                                                onBlur({ target: { value: firstRadio, name: name } })
                                            }}
                                            className={`
                                                    ${classes.checkBtn}
                                                    ${classes.firstCheckBtn}
                                                    ${field.value === firstRadio ?
                                                    classes.checkedBtn : ""}`}
                                            name={name}
                                        >
                                            {firstRadio}
                                        </ButtonBase>}
                                />

                                {/* Second button  */}
                                <FormControlLabel
                                    value={secondRadio}
                                    control={
                                        <ButtonBase
                                            onClick={() =>
                                            {
                                                form.setFieldValue(name, secondRadio)
                                                onBlur({ target: { value: secondRadio, name: name } })
                                            }}
                                            className={`
                                                    ${classes.checkBtn} 
                                                    ${classes.secondCheckBtn} 
                                                    ${field.value === secondRadio ?
                                                    classes.checkedBtn : ""}`}
                                            name={name}
                                        >
                                            {secondRadio}
                                        </ButtonBase>
                                    }
                                />
                            </RadioGroup>

                            <ErrorMessage
                                name={name}
                                component={InputError}
                            />
                        </FormControl>
                    )
                }}
            </Field>
        </div>
    )
}
