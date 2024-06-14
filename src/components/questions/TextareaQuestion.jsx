import { FormikControl } from '../inputs'
import booleanClasses from './styles/BooleanQuestion.module.css'
import classes from './styles/TextareaQuestion.module.css'
import { HeaderText } from '../ui';
import { Points } from './Points'
import { FeedbackLabel } from './FeedbackLabel'

export const TextareaQuestion = (props) =>
{
    const { label, fullWidth, points, isFinished, answerType, disabled, ...rest } = props;

    return (
        <div
            className={`${classes.container} ${booleanClasses.container}`}
        >
            <HeaderText
                size="medium"
            >
                {label}
            </HeaderText>
            <div
                className={`
                    ${fullWidth ? classes.fullWidth : ""}
                    ${(isFinished && answerType) ? classes.marginBottom : ""}
                    `}
            >
                <FormikControl
                    control="input"
                    type="text"
                    multiline={true}
                    rows={3}
                    disabled={disabled || isFinished}
                    {...rest}
                />
            </div>
            <FeedbackLabel isFinished={isFinished} answerType={answerType} />

            {points && <Points points={points} />}
        </div>
    )
}
