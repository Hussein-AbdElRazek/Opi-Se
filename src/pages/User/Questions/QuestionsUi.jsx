import { FormCard, HeaderText, Paragraph, ButtonGroup } from '../../../components/ui'
import classes from './Questions.module.css'
import QuestionItem from './QuestionItem'
import { Btn } from '../../../components/inputs'
import arrowRightIcon from '../../../assets/icons/arrowRight.svg'
import { BackOutlinedBtn } from '../../../components/common'
import questionList from "./questionsList.json"

const QuestionsUi = (props) =>
{
    const { handleNext, questionIndex, isLoadingSubmitUserPrefers } = props;
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
                action={
                    <ButtonGroup>
                        <BackOutlinedBtn
                            disabled={isLoadingSubmitUserPrefers}
                        />
                        <Btn
                            size="small"
                            endIcon={<img src={arrowRightIcon} alt="arrow right" />}
                            onClick={handleNext}
                            isLoading={isLoadingSubmitUserPrefers}
                        >
                            Next
                        </Btn>
                    </ButtonGroup>
                }
            >
                {/* Header text */}
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
                
                <QuestionItem
                    question={questionList[questionIndex]}
                    questionIndex={questionIndex}
                    key={questionIndex}
                />
            </FormCard>
        </div>
    )
}

export default QuestionsUi