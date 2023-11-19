import React from 'react'
import { FormCard, HeaderText, Paragraph } from '../../../components/ui'
import classes from './Questions.module.css'
import QuestionItem from './QuestionItem'
import { Btn } from '../../../components/inputs'
import arrowRightIcon from '../../../assets/icons/arrowRight.svg'
const Questions = () =>
{
    return (
        <div
            className="
            center-x 
            center-y
            height-100vh
            "
        >
            <FormCard
                size="full"
            >

                <div
                    className={classes.header}
                >
                    <HeaderText>
                        Behavioral Questions
                    </HeaderText>
                    <Paragraph>
                        We wil ask you some questions about you, fell free to
                        answer and take your time
                    </Paragraph>
                </div>
                <QuestionItem />
                <div
                className={classes.action}
                >
                    <Btn
                        size="small"
                        endIcon={<img src={arrowRightIcon} alt="arrow right" />}
                    >
                        Next
                    </Btn>
                </div>
            </FormCard>
        </div>


    )
}

export default Questions