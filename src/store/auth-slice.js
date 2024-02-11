import { createSlice } from '@reduxjs/toolkit';
import { clearArrayOfObjects } from '../helpers/clearArrayOfObjects';


const initialAuthState = {
    token: localStorage.getItem("token"),
    userData: JSON.parse(localStorage.getItem("userData")),
    notifications: JSON.parse(localStorage.getItem("notifications")) ? JSON.parse(localStorage.getItem("notifications")) : [],
    isLoggedIn: !!localStorage.getItem("token"),
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action)
        {
            state.token = action.payload.token;
            let clearLanguagesArray = clearArrayOfObjects(action.payload.userData.languages);
            let clearUserSkillsArray = clearArrayOfObjects(action.payload.userData.userSkills);
            let tempUserData = {
                ...action.payload.userData,
                languages: clearLanguagesArray,
                userSkills: clearUserSkillsArray,
            }
            state.userData = tempUserData;

            state.isLoggedIn = true;
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("userData", JSON.stringify(tempUserData))
        },
        logout(state)
        {
            state.token = null;
            state.userData = null;
            state.isLoggedIn = false;
            localStorage.clear()
        },
        updateUserData(state, action)
        {
            state.userData = { ...state.userData, ...action.payload };
            localStorage.setItem("userData", JSON.stringify(state.userData))
        },
        updateUserNotifications(state, action)
        {
            console.log("new ", action.payload);
            state.notifications.unshift(action.payload)
            localStorage.setItem("notifications", JSON.stringify(state.notifications))
        },
    }
})


export const authActions = authSlice.actions

export default authSlice.reducer;