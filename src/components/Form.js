import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {
     const [enteredName, setenteredName] = useState('')
     const [enteredEmailAddress, setenteredEmailAddress] = useState('')
     const [enteredComments, setenteredComments] = useState('')
     const history = useHistory()

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
          alert('Sign in successfull!')
          history.push('/feedbacks/new')
          
     }

     return (
          <form className='Form' onSubmit={signupHandler}>
               <div className='FormControls'>
                    <span><label>Name:</label></span>
                    <input type='text' autoFocus onChange={setNameHandler}/>
               </div>
               <div className='FormControls'>
                    <span><label>Email Address:</label></span>
                    <input type='text' onChange={setEmailHandler}/>
               </div>
               <div className='FormControls'>
                    <span><label>Comments:</label></span>
                    <textarea type='text' rows='4' cols='32' onChange={setCommentHandler}/>
               </div>
               <button type='submit'>Sign Up</button>
          </form>
     )
}

export default Form
