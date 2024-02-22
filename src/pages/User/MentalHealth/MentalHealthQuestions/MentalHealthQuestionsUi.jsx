import { BackOutlinedBtn, QuestionsStepper } from '../../../../components/common';
import { Btn, FormikContainer } from '../../../../components/inputs';
import { ReactComponent as ArrowRightIcon } from '../../../../assets/icons/arrowRight.svg';
import { QuestionControl } from '../../../../components/questions/QuestionControl';
import { QuestionsLayout } from '../../../../components/questions';
import classes from './MentalHealthQuestionsUi.module.css'

const MentalHealthQuestionsUi = (props) =>
{
    const {
        currentQuestions,
        currentInitialValues,
        currentValidationSchema,
        currentStep,
        handleNext,
        onBlur,
        handleGetSuggestions,
        isLoadingGetMentalSuggestion,
        handleGetMentalScore,
        isLoadingGetMentalScore,
    } = props;

    return (
        <>
            {/* header section */}
            <QuestionsStepper steps={3} />

            {/* Questions */}
            {currentStep === 1 && (
                <FormikContainer
                    initialValues={currentInitialValues}
                    validationSchema={currentValidationSchema}
                    onSubmit={handleNext}
                >
                    <QuestionsLayout>
                        {currentQuestions.map((question, index) => (
                            <QuestionControl key={index} onBlur={onBlur} {...question} />
                        ))}
                    </QuestionsLayout>

                    {/* action btn*/}
                    <div
                        className={`flex-end  ${classes.actions}`}
                    >
                        <Btn
                            endIcon={
                                <ArrowRightIcon fill="white" />
                            }
                            size="small"
                            type="submit"
                        >
                            Next
                        </Btn>
                    </div>
                </FormikContainer>
            )}

            {currentStep === 2 && (
                <FormikContainer
                    initialValues={currentInitialValues}
                    validationSchema={currentValidationSchema}
                    onSubmit={handleGetSuggestions}
                >
                    <QuestionsLayout>
                        {currentQuestions.map((question, index) => (
                            <QuestionControl key={index} onBlur={onBlur} {...question} />
                        ))}
                    </QuestionsLayout>

                    {/* actions btns*/}
                    <div
                        className={`space-between  ${classes.actions}`}
                    >
                        <BackOutlinedBtn />

                        <Btn
                            endIcon={
                                <ArrowRightIcon fill={isLoadingGetMentalSuggestion ? "none" : "white"} />
                            }
                            size="small"
                            type="submit"
                            isLoading={isLoadingGetMentalSuggestion}
                        >
                            Next
                        </Btn>
                    </div>
                </FormikContainer>
            )}

            {currentStep === 3 && (
                <FormikContainer
                    initialValues={currentInitialValues}
                    validationSchema={currentValidationSchema}
                    onSubmit={handleGetMentalScore}
                >
                    <QuestionsLayout>
                        {currentQuestions.map((question, index) => (
                            <QuestionControl key={index} onBlur={onBlur} {...question} />
                        ))}
                    </QuestionsLayout>

                    {/* actions btns*/}
                    <div
                        className={`space-between ${classes.actions}`}
                    >
                        <BackOutlinedBtn />

                        <Btn
                            size="small"
                            type="submit"
                            isLoading={isLoadingGetMentalScore}
                        >
                            Finish
                        </Btn>
                    </div>
                </FormikContainer>
            )}
        </>
    )
}

export default MentalHealthQuestionsUi