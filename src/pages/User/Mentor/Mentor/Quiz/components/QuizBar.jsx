import { Button } from '@mui/material';

import { HeaderText } from '../../../../../../components/ui'
import { ReactComponent as ClockIcon } from '../../../../../../assets/icons/clock.svg'
import { ReactComponent as BackIcon } from '../../../../../../assets/icons/backArrow.svg'
import classes from './styles/QuizBar.module.css';
import useNavigateBack from '../../../../../../hooks/use-navigate-back';

const QuizBar = (props) =>
{
    const { title, isFinished, time, grade } = props;

    const navigateBack = useNavigateBack('/mentor');

    return (
        <div className={`${classes.quizBar} center-y space-between`}>

            {/* back btn of finished quiz */}
            {(isFinished) && (
                <div className={`${classes.backBtn} center-y`}>
                    <Button
                        startIcon={<BackIcon />}
                        onClick={navigateBack}
                    >
                        Back
                    </Button>
                </div>
            )}

            <HeaderText>
                {title}
            </HeaderText>

            {/* Time of running quiz */}
            {(!isFinished && time) && (
                <div className={`${classes.time} center-y`}>
                    <ClockIcon />
                    <div>
                        {time}
                    </div>
                </div>
            )}

            {/* Grade of finished quiz */}
            {(isFinished && grade) && (
                <div className={`${classes.grade} center-y`}>
                    Grade
                    <span>
                        {grade}%
                    </span>
                </div>
            )}

        </div>
    )
}

export default QuizBar