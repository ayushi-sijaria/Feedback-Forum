import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialState={
     feedbacks: ['Test Feedback'],
     isSignedIn: false
}
const feedbackSlice = createSlice({
     name: 'feedback',
     initialState,
     reducers: {
          add(state, action) {
               state.feedbacks.push(action.payload)
          },
          delete(state, action) {
               state.feedbacks.splice(action.payload, 1)
          },
          signIn(state)
          {
               state.isSignedIn=true
          }
     }
})
const store = configureStore({
     reducer: feedbackSlice.reducer
})
export const feedbackActions = feedbackSlice.actions
export default store