import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { feedbackActions } from '../store/index'

const Form = () => {
     const [enteredName, setenteredName] = useState('')
     const [enteredEmailAddress, setenteredEmailAddress] = useState('')
     const [enteredComments, setenteredComments] = useState('')
     const [invalidName, setinvalidName] = useState(false)
     const [invalidEmailAddress, setinvalidEmailAddress] = useState(false)
     const history = useHistory()
     const dispatch = useDispatch()

     const setNameHandler = (e) =>
     {
          setenteredName(e.target.value)
     }

     const setEmailHandler = (e) =>
     {
          setenteredEmailAddress(e.target.value)
     }

     const setCommentHandler = (e) =>
     {
          setenteredComments(e.target.value)
     }

     const signupHandler = (e) =>
     {
          e.preventDefault()
          if(enteredName.trim().length<=0)
          {
               setinvalidName(true)
               return
          }
          if(!enteredEmailAddress.includes('@'))
          {
               setinvalidEmailAddress(true)
               return
          }
          alert('Sign in successfull!')
          dispatch(feedbackActions.signIn())
          history.push('/feedbacks')
          
     }

     return (
          <form className='Form' onSubmit={signupHandler}>
               <div className='FormControls'>
                    <span><label>Name:</label></span>
                    <input type='text' autoFocus onChange={setNameHandler}/>
               </div>
                    {invalidName? <p className='Error'>Enter a valid name.</p>:null}
               
               <div className='FormControls'>
                    <span><label>Email Address:</label></span>
                    <input type='text' onChange={setEmailHandler}/>
               </div>
                    {invalidEmailAddress? <p className='Error'>Enter a valid Email Address.</p>:null} 
               <div className='FormControls'>
                    <span><label>Comments:</label></span>
                    <textarea type='text' rows='4' cols='32' onChange={setCommentHandler}/>
               </div>
               <button type='submit'>Sign Up</button>
          </form>
     )
}

export default Form
