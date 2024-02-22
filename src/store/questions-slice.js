import { createSlice } from '@reduxjs/toolkit';

import { firstSectionInitialValues, secondSectionInitialValues, thirdSectionInitialValues } from '../pages/User/MentalHealth/MentalHealthQuestions/questionsData';

const initialQuestionsState = {
    questions: !!localStorage.getItem("questions") ? JSON.parse(localStorage.getItem("questions")) :
        { 1: firstSectionInitialValues, 2: secondSectionInitialValues, 3: thirdSectionInitialValues }
}

const questionsSlice = createSlice({
    name: 'questions',
    initialState: initialQuestionsState,
    reducers: {
        updateQuestions(state, action)
        {
            state.questions[action.payload.currentStep] = { ...state.questions[action.payload.currentStep], ...action.payload.questions }
            localStorage.setItem("questions", JSON.stringify(state.questions))
        },
        clearQuestions(state)
        {
            localStorage.removeItem("questions")
            state.questions = initialQuestionsState;
        }
    }
})

export const questionsActions = questionsSlice.actions

export default questionsSlice.reducer;