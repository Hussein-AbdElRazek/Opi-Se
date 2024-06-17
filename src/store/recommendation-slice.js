import { createSlice } from '@reduxjs/toolkit';

const initialRecommendationState = {
    recommendations: [],
}

const recommendationSlice = createSlice({
    name: 'recommendation',
    initialState: initialRecommendationState,
    reducers: {
        setRecommendations(state, action)
        {
            state.recommendations = action.payload;
        },
        addPartner(state, action)
        {
            state.recommendations = state.recommendations.map(ele =>
            {
                if (ele._id === action.payload)
                {
                    return { ...ele, requestedHim: true }
                }
                else return ele;
            })
        },
    }
})


export const recommendationActions = recommendationSlice.actions

export default recommendationSlice.reducer;