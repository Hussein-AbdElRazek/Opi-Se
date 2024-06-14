import React from 'react'
import { Btn, FormikContainer } from '../../../../../components/inputs'
import { QuestionControl, QuestionsLayout } from '../../../../../components/questions'
import classes from './Quiz.module.css'
import QuizBar from './components/QuizBar'
// import QuizResult from './components/QuizResult'
const QuizUi = () =>
{
    const q = [{
        label: "1. How old are you?",
        name: "age",
        control: "textarea",
        placeholder: "Your answer....",
        type: "number"
    },
    {
        label: "3. What is your education?",
        name: "education",
        control: "mcq",
        answers: [
            "phD",
            "Master",
            "Undergraduate",
            "High School",
        ],
        rightAnswer: "Master",
        userAnswer: "Undergraduate",
        answerType: "Correct",
    },
    {
        label: "4. What is your education?",
        name: "education",
        control: "mcq",
        answers: [
            "phD",
            "Master",
            "Undergraduate",
            "High School",
        ],
        rightAnswer: "Master",
        userAnswer: "Undergraduate",
        answerType: "Wrong",
    },
    {
        label: "4. What is your education?",
        name: "education",
        control: "mcq",
        answers: [
            "phD",
            "Master",
            "Undergraduate",
            "High School",
        ],
        rightAnswer: "Master",
        answerType: "No Answer",
    },
    {
        label: "5. What is your income?",
        name: "income",
        control: "textarea",
        placeholder: "Your answer....",
        answerType: "No Answer",
    },

    {
        label: "14. How many days were you hospitalized for the mental illness?",
        name: "days_hosp",
        control: "textarea",
        placeholder: "Your answer....",
        answerType: "Wrong",
    },
    {
        label: "14. How many days were you hospitalized for the mental illness?",
        name: "days_hosp",
        control: "textarea",
        placeholder: "Your answer....",
        answerType: "Correct",
    },
    ]

    return (
        <div>
            <QuizBar
                title='UX/UI QUIZ'
                time='50.00 Min'
                isFinished={true}
                grade={56}
            />

            <FormikContainer
                initialValues={{}}
            // validationSchema={currentValidationSchema}
            // onSubmit={handleNext}
            >
                <QuestionsLayout>
                    {q.map((question, index) => (
                        <QuestionControl key={index}  {...question}
                            points='1 Point'
                            fullWidth={true}
                            isFinished={true}
                        />
                    ))}
                </QuestionsLayout>

                {/* action btn*/}
                <div
                className={`flex-end`}
                >
                    <Btn
                        size="small"
                        type="submit"
                        className={classes.action}
                    >
                        Finish
                    </Btn>
                </div>
            </FormikContainer>
            
        </div>
    )
}

export default QuizUi