import generalClasses from './styles/QuestionGeneral.module.css'
import { ReactComponent as CheckedOutlinedIcon } from '../../assets/icons/checkedOutlined.svg';

export const FeedbackLabel = ({ isFinished, answerType }) =>
{
    return (
        <>
            {(isFinished && answerType) && (
                <div className={`
                                ${generalClasses.feedbackLabel} 
                                center-y
                                ${answerType === "Correct" ? generalClasses.feedbackLabelCorrect : ''}
                                ${answerType === "Wrong" ? generalClasses.feedbackLabelWrong : ''}
                                `}>
                    <CheckedOutlinedIcon />
                    {answerType}
                </div>
            )}
        </>
    )
}
