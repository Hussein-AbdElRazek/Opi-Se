import { createSlice } from '@reduxjs/toolkit';
import { clearArrayOfObjects } from '../helpers/clearArrayOfObjects';
import { mergeToUnique } from '../helpers/mergeToUnique';


const initialAuthState = {
    token: localStorage.getItem("token"),
    userData: JSON.parse(localStorage.getItem("userData")),
    notifications: [],
    isLoggedIn: !!localStorage.getItem("token"),
    notificationsTotalPages: 1
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action)
        {
            state.token = action.payload.token;
            let clearLanguagesArray = clearArrayOfObjects(action.payload?.userData?.languages || []);
            let clearUserSkillsArray = clearArrayOfObjects(action.payload?.userData?.userSkills || []);
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
        mergeUserNotifications(state, action)
        {
            state.notifications = mergeToUnique(state.notifications, action.payload);
        },
        updateNotificationsTotalPages(state, action)
        {
            state.notificationsTotalPages = action.payload;
        }
    }
})


export const authActions = authSlice.actions

export default authSlice.reducer;