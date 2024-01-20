import { useNavigate, useSearchParams } from 'react-router-dom';
import QuestionsUi from './QuestionsUi'
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../../hooks/use-http';
import { authActions } from '../../../store/auth-slice';

const Questions = () =>
{
    const [searchParams] = useSearchParams();
    //for get page question
    const questionIndex = Number(searchParams.get("questionIndex")) || 0;

    const navigate = useNavigate();
    const questions = useSelector(state => state.auth.userData.questions);

    const {
        isLoading: isLoadingSubmitUserPrefers,
        sendRequest: submitUserPrefers
    } = useHttp();
    const aboutData = useSelector(state => state.auth.userData.about);
    const dispatch = useDispatch();
    
    // fetch api submitUserPrefers
    const handleSubmitUserPrefers = () =>
    {
        const userPrefers = {
            ...aboutData,
            userQuestions: questions
        }
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                //to update store data to make it update routes and navigate to home 
                dispatch(authActions.updateUserData({ getUserPrefers: false }))
                navigate("/", { replace: true });
            }
        };

        submitUserPrefers(
            {
                url: "submitUserPrefers",
                method: "POST",
                body: userPrefers,
            },
            getResponse
        );
    }

    const handleNext = () =>
    {
        // validate  when no answer
        if (!questions || !questions[questionIndex]?.answer) return;

        // validate  number of questionIndex doesn't overflow
        if (questionIndex < 3)
        {
            navigate(`/questions?questionIndex=${questionIndex + 1}`)
        }
        //when finish questions
        //submit all user prefers (about + questions)
        if (questionIndex === 3)
        {
            handleSubmitUserPrefers();
        }
    }

    return (
        <QuestionsUi
            questionIndex={questionIndex}
            handleNext={handleNext}
            isLoadingSubmitUserPrefers={isLoadingSubmitUserPrefers}
        />
    )
}

export default Questions