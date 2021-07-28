import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
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
               <div>
                    {feedbacks.map((f) => <p key={Math.random()*Math.random()}>{f.data}</p>)} 
               </div>
               <button className='AllFeedback' 
                       onClick={newFeedbackHandler}>Add a feedbacks</button>
          </div>
     )
}

export default FeedbackPage
