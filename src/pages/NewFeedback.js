import React from 'react'
import { useSelector } from 'react-redux'
import FeedbackForm from '../components/FeedbackForm'
const NewFeedback = () => {
     const isSignedInSelector = useSelector(state => state.isSignedIn) 
     return (
          <div>
               {!isSignedInSelector ? <p className='Text'>You have to sign in before adding and viewing feedbacks.</p> : <FeedbackForm/>}
          </div>
     )
}

export default NewFeedback
