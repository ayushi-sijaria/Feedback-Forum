import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Feedback from '../components/Feedback'
import { feedbackActions } from '../store/index'
const FeedbackPage = () => { 
  const isSignedInSelector = useSelector(state => state.isSignedIn) 
  const feedbackSelector = useSelector(state => state.feedbacks)
  const history = useHistory()
  const dispatch = useDispatch()
  const newFeedbackHandler = () =>
     {
          history.push('/feedbacks/new')
     }
  const deleteFeedbackHandler = (index) =>
  {
     dispatch(feedbackActions.delete(index))
  }
     return (
          <div className='Feedbacks'>
               
               {!isSignedInSelector? <p className='Text'>You have to sign in before adding and viewing feedbacks.</p>:<div><h1>Feedbacks</h1>
               <div className='FeedbackList'>
                    {!(feedbackSelector.length) && <p>No feedbacks available.<br/>Start adding!</p>}
                    {(feedbackSelector.length) && feedbackSelector.map((f, i) => <Feedback 
                                                  feedback={f}
                                                  delete={()=>deleteFeedbackHandler(i)} 
                                                  key={Math.random()*Math.random()}/>)} 
               </div></div>}
               <button className='AllFeedback' 
                       onClick={newFeedbackHandler}>Add a feedback</button>
          </div>
     )
}

export default FeedbackPage
