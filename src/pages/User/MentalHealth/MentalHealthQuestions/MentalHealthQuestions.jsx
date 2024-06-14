import React, { useEffect } from 'react'
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import MentalHealthQuestionsUi from './MentalHealthQuestionsUi'
import useStepper from '../../../../hooks/use-stepper';
import { firstSectionQuestions, secondSectionQuestions, thirdSectionQuestions } from './questionsData';
import { firstSectionValidationSchema, secondSectionValidationSchema, thirdSectionValidationSchema } from './questionsValidationSchema';
import { questionsActions } from '../../../../store/questions-slice';
import useHttp from '../../../../hooks/use-http';
import { authActions } from '../../../../store/auth-slice';
import { useNavigate } from 'react-router-dom';

const MentalHealthQuestions = () =>
{
    const {
        handleNext,
        currentStep,
    } = useStepper();
    const dispatch = useDispatch();
    const {
        sendRequest: getMentalSuggestions,
        isLoading: isLoadingGetMentalSuggestion
    } = useHttp();
    const {
        sendRequest: getMentalScore,
        isLoading: isLoadingGetMentalScore
    } = useHttp();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const navigate = useNavigate();

    const questionsSections = {
        1: firstSectionQuestions,
        2: secondSectionQuestions,
        3: thirdSectionQuestions,
    }

    const validationSections = {
        1: firstSectionValidationSchema,
        2: secondSectionValidationSchema,
        3: thirdSectionValidationSchema,
    }
    const currentInitialValues = useSelector(state => state.questions.questions)[currentStep];
    const currentQuestions = questionsSections[currentStep];
    const currentValidationSchema = validationSections[currentStep];

    // scroll to top when click next
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, [currentStep, dispatch]);

    // store data in store on blur
    const onBlur = (e, handleBlur) =>
    {
        // check if not number put it as string if number put it as number
        const value = e.target.value && !isNaN(e.target.value) ? Number(e.target.value) : e.target.value;
        const name = e.target.name;
        if (typeof handleBlur === "function") handleBlur(e);
        dispatch(questionsActions.updateQuestions({ questions: { [name]: value }, currentStep }));
    }

    // get suggestions
    const questionsAnswers = useSelector(state => state.questions.questions);

    const handleGetSuggestions = () =>
    {
        const resBody = {
            ...questionsAnswers[1],
            ...questionsAnswers[2],
        }
        const getResponse = (res) =>
        {
            if (res?.error)
            {
                console.log('res?.error', res?.error)
                popMessage("Something went wrong", { variant: "error" })
                return;
            }
            console.log("res", res)
            if (res)
            {
                dispatch(authActions.updateUserData({ mentalSuggestions: res }))
                handleNext();
            }
        };

        getMentalSuggestions(
            {
                baseUrl: "https://mental-illness.onrender.com/",
                url: "mental_support",
                method: "POST",
                body: resBody,
            },
            getResponse
        );
    }

    const handleGetMentalScore = () =>
    {
        const resBody = {
            ...questionsAnswers[3],
        }
        const getResponse = (res) =>
        {
            if (res?.error)
            {
                console.log('res?.error', res?.error)
                popMessage("Something went wrong", { variant: "error" })
                return;
            }
            if (res)
            {
                dispatch(authActions.updateUserData({ mentalScore: res }))
                dispatch(questionsActions.clearQuestions())
                navigate("/mental-health");
            }
        };

        getMentalScore(
            {
                baseUrl: "https://mental-health-score.onrender.com/",
                url: "mental_health_score",
                method: "POST",
                body: resBody,
            },
            getResponse
        );
    }

    return (
        <MentalHealthQuestionsUi
            currentQuestions={currentQuestions}
            currentInitialValues={currentInitialValues}
            currentValidationSchema={currentValidationSchema}
            currentStep={currentStep}
            handleNext={handleNext}
            onBlur={onBlur}
            handleGetSuggestions={handleGetSuggestions}
            isLoadingGetMentalSuggestion={isLoadingGetMentalSuggestion}
            handleGetMentalScore={handleGetMentalScore}
            isLoadingGetMentalScore={isLoadingGetMentalScore}
        />
    )
}

export default MentalHealthQuestions