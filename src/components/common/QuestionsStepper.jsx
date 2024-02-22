import { useSearchParams } from 'react-router-dom';
import { MobileStepper } from '@mui/material'

import { HeaderText } from '../ui'
import classes from './styles/QuestionsStepper.module.css';

export const QuestionsStepper = ({ steps }) =>
{
    const [searchParams] = useSearchParams();
    const initialStep = Number(searchParams.get("step")) || 1;

    return (
        <div
            className={classes.container}
        >
            <HeaderText>
                {`${initialStep === 1 ? 'Lets Start' :
                    initialStep === steps ? 'And we are done' :
                        'One More'}...`}
            </HeaderText>
            <MobileStepper
                variant="progress"
                // i add one bcs initial first step begin from zero
                //  and in design i begin from 1
                steps={steps + 1}
                position="static"
                activeStep={initialStep}
                className={classes.stepper}
                sx={{
                    ".MuiLinearProgress-bar": { backgroundColor: "var(--secondary)" },
                    ".MuiLinearProgress-root": {
                        background: "var(--stepper-bg)",
                        width: "100%",
                    },
                }}
            />
        </div>
    )
}
