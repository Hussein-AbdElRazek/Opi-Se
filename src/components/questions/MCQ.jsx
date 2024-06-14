
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { ErrorMessage, Field } from 'formik';

import { HeaderText } from '../ui'
import classes from './styles/MCQ.module.css'
import booleanClasses from './styles/BooleanQuestion.module.css'
import generalClasses from './styles/QuestionGeneral.module.css'
import { InputError } from '../inputs';
import { ReactComponent as CheckedIcon } from '../../assets/icons/checked.svg';
import { Points } from './Points';
import { FeedbackLabel } from './FeedbackLabel';
export const MCQ = (props) =>
{
    const {
        name,
        disabled,
        label,
        answers,
        onBlur,
        fullWidth,
        points,
        isFinished,
        rightAnswer,
        userAnswer,
        answerType,
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
                                                ${!isFinished ? classes.hover : ''} 
                                                ${field.value === answer && classes.checked}
                                                ${fullWidth ? generalClasses.fullWidth : ""}
                                                ${(isFinished && rightAnswer === answer) ? generalClasses.rightAnswer : ""}
                                                ${(isFinished && userAnswer === answer) ? generalClasses.wrongAnswer : ""}
                                            `}
                                        value={answer}
                                        checked={(isFinished && rightAnswer === answer) || (isFinished && userAnswer === answer)}
                                        control={
                                            <Radio
                                                sx={{
                                                    color: "var(--secondary)"
                                                }}
                                                checkedIcon={<CheckedIcon />}
                                                disabled={disabled || isFinished}
                                                disableRipple={(isFinished && rightAnswer === answer) || (isFinished && userAnswer === answer)}
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

            <FeedbackLabel isFinished={isFinished} answerType={answerType} />

            <Points points={points} />
        </div>
    )
}
