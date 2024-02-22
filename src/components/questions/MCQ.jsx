
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { ErrorMessage, Field } from 'formik';

import { HeaderText } from '../ui'
import classes from './styles/MCQ.module.css'
import booleanClasses from './styles/BooleanQuestion.module.css'
import { InputError } from '../inputs';
import { ReactComponent as CheckedIcon } from '../../assets/icons/checked.svg';
export const MCQ = (props) =>
{
    const {
        name,
        disabled,
        label,
        answers,
        onBlur,
    } = props;

    return (
        <div
            className={`${booleanClasses.container} ${classes.mcqContainer}`}
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
                                onBlur={onBlur}
                            >
                                {answers.map((answer, index) => (
                                    <FormControlLabel
                                        key={index}
                                        className={`
                                                ${classes.answer} 
                                                ${field.value === answer && classes.checked}
                                            `}
                                        value={answer}
                                        control={
                                            <Radio
                                                sx={{
                                                    color: "var(--secondary)"
                                                }}
                                                checkedIcon={<CheckedIcon />}
                                            />
                                        }
                                        label={answer}
                                    />
                                ))}
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
