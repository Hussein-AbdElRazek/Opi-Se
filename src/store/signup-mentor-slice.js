import { createSlice } from '@reduxjs/toolkit';

const initialMentorState = {
    userData: JSON.parse(localStorage.getItem("userData")),
    lastSignupStep: JSON.parse(localStorage.getItem("lastSignupStep")),
}

const signupMentorSlice = createSlice({
    name: 'signupMentor',
    initialState: initialMentorState,
    reducers: {
        updateData(state, action)
        {
            state.userData = action.payload.userData;
            state.lastSignupStep = action.payload.lastSignupStep;
            
            localStorage.setItem("userData", JSON.stringify(state.userData))
            localStorage.setItem("lastSignupStep", JSON.stringify(state.lastSignupStep))
        },
    }
})


export const signupMentorActions = signupMentorSlice.actions

export default signupMentorSlice.reducer;