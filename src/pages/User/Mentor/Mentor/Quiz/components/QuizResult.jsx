import React from 'react'
import { HeaderText, ModalCard, Paragraph } from '../../../../../../components/ui'
import { CircularProgress } from '@mui/material'
import mentalHealthClasses from '../../../../MentalHealth/MentalHealthResult/MentalHealthResultUi.module.css'
import { Btn } from '../../../../../../components/inputs'
import classes from './styles/QuizResult.module.css'
import useNavigateBack from '../../../../../../hooks/use-navigate-back'

const QuizResult = ({ open, score, title, paragraph }) =>
{
    const navigateBack = useNavigateBack("/mentor")

    return (
        <ModalCard open={open} >
            <div
                className={classes.container}
            >
                <div
                    className={`${mentalHealthClasses.score} ${mentalHealthClasses.scoreParent} center-x center-y ${classes.score}`}
                >
                    <CircularProgress
                        className={mentalHealthClasses.progress}
                        thickness={3}
                        sx={{
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                        }}
                        variant="determinate"
                        value={score}
                        size={160}
                    />

                    <CircularProgress
                        className={mentalHealthClasses.progressBG}
                        thickness={3}
                        variant="determinate"
                        value={100}
                        size={160}
                    />
                    <h4>{score} %</h4>
                </div>

                <div className={classes.info}>
                    <HeaderText size={'medium'}>
                        {title}
                    </HeaderText>
                    <Paragraph>
                        {paragraph}
                    </Paragraph>
                    <Btn
                        onClick={navigateBack}
                    >
                        Complete
                    </Btn>
                </div>
            </div>
        </ModalCard>
    )
}

export default QuizResult