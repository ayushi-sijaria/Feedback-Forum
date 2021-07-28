import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialState={
     feedbacks: ['Test Feedback']
}
const feedbackSlice = createSlice({
     name: 'feedback',
     initialState,
     reducers: {
          add(state, action) {
               state.feedbacks.push(action.payload)
          }
     }
})
const store = configureStore({
     reducer: feedbackSlice.reducer
})
export const feedbackActions = feedbackSlice.actions
export default store