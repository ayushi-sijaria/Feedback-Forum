import { createStore } from 'redux'
const initialState={
     feedbacks: []
}
const reducer = (state=initialState, action) => 
{
     switch(action.type)
     {
          case 'ADD_FEEDBACK':
               {
                    const newFeedbacks = [...state.feedbacks]
                    newFeedbacks.push({data: action.payload})
                    return {
                        feedbacks: [...newFeedbacks]
                    }
               }
     }
}
const store = createStore(reducer)
export default store