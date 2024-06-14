import classes from './styles/QuizAndAssignmentElement.module.css'
import defaultQuizAndAssignment from '../../assets/images/defaultQuizAndAssignment.svg'
import moment from 'moment';
import { Btn } from '../inputs';
export const QuizAndAssignmentElement = (props) =>
{
    const {
        title,
        text,
        deadline,
        img,
        to,
        isCompleted,
        grade,
        actionText
    } = props;

    const deadlineDateText = `Deadline: ${moment(deadline).format("DD/MM/YYYY")}`

    return (
        <div
            className={`space-between flex-nowrap ${classes.container} ${isCompleted ? classes.completed : ''}`}
        >
            <div
                className='center-y'
            >
                <div
                    className={`${classes.imgCard} center-x center-y ${!img ? classes.defaultImg : ''}`}
                >
                    <img src={!!img ? img : defaultQuizAndAssignment} alt="" />
                </div>

                <div className={classes.infoContainer}>
                    <h2>
                        {title}
                    </h2>
                    <span>
                        {text}
                    </span>
                    <span>
                        {deadlineDateText}
                    </span>
                </div>
            </div>

            <div className={classes.actionContainer}>
                {(grade === 0 || !!grade) && <div className={classes.grade}>Your grade <span>{grade}%</span></div>}
                <div className={classes.action}><Btn to={to}>{actionText}</Btn></div>
            </div>
        </div>
    )
}
