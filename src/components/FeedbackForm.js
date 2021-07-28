import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

const FeedbackForm = () => {
     const [feedback, setFeedback] = useState('')
     const dispatch = useDispatch()

     

     const setFeedbackHandler = (e) =>
     {
          setFeedback(e.target.value)
     }
     const feedbackSubmitHandler = (e) =>
     {
          e.preventDefault()
          dispatch({type:'ADD_FEEDBACK', payload:feedback})
     }
     return (
          <form className='Form' onSubmit={feedbackSubmitHandler}>
                    <div className='FormControls'>
                         <span><label>Feedback:</label></span>
                         <textarea type='text' rows='4' cols='32' 
                              onChange={setFeedbackHandler} autoFocus/>
                    </div>
                    <button type='submit'>Submit</button>
               </form>
               
          
     )
}

export default FeedbackForm
