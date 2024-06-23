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

            // start: for mentor clear data
            let clearSkillsArray = clearArrayOfObjects(action.payload?.userData?.skills || []);
            let clearCertificatesArray = clearArrayOfObjects(action.payload?.userData?.certificates || []);
            let clearExperienceArray = clearArrayOfObjects(action.payload?.userData?.experience || []);
            // end: for mentor clear data

            const tempMainData = {
                ...action.payload.userData,
                languages: clearLanguagesArray,
            }

            let tempUserData = {
                ...tempMainData,
                userSkills: clearUserSkillsArray,
            }

            let tempMentorData = {
                ...tempMainData,
                skills: clearSkillsArray,
                certificates: clearCertificatesArray,
                experience: clearExperienceArray,
            }

            state.userData = tempMainData.role === "user" ? tempUserData : tempMentorData;
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
            let clearLanguagesArray = clearArrayOfObjects(action.payload?.languages || []);
            let clearUserSkillsArray = clearArrayOfObjects(action.payload?.userSkills || []);
            let tempUserData = {
                ...state.userData,
                ...action.payload,
                languages: clearLanguagesArray,
                userSkills: clearUserSkillsArray,
            }
            state.userData = tempUserData
            localStorage.setItem("userData", JSON.stringify(tempUserData))
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