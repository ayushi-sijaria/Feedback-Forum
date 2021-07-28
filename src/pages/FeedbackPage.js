import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Feedback from '../components/Feedback'
const FeedbackPage = () => {     
  const feedbacks = useSelector((state) => state.feedbacks)
  const history = useHistory()
  const newFeedbackHandler = () =>
     {
          history.push('/feedbacks/new')
     }
     return (
          <div className='Feedbacks'>
               <h1>Feedbacks</h1>
               {console.log(feedbacks)}
               <div>
                    {feedbacks.map((f) => <Feedback feedback={f} 
                                                    key={Math.random()*Math.random()}/>)} 
               </div>
               <button className='AllFeedback' 
                       onClick={newFeedbackHandler}>Add a feedback</button>
          </div>
     )
}

export default FeedbackPage
