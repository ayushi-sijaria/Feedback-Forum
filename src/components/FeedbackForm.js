import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { feedbackActions } from '../store/index'

const FeedbackForm = () => {
     const [feedback, setFeedback] = useState('')
     const dispatch = useDispatch()
     const history = useHistory()     

     const setFeedbackHandler = (e) =>
     {
          setFeedback(e.target.value)
     }
     const feedbackSubmitHandler = (e) =>
     {
          e.preventDefault()
          dispatch(feedbackActions.add(feedback))
          history.push('/feedbacks')

     }
     return (
          <form className='Form' onSubmit={feedbackSubmitHandler}>
                    <div className='FormControls'>
                         <span><label>Feedback:</label></span>
                         <textarea type='text' rows='8' cols='50' 
                              onChange={setFeedbackHandler} autoFocus/>
                    </div>
                    <button type='submit'>Submit</button>
          </form>
               
          
     )
}

export default FeedbackForm
