import React from 'react'

const Form = () => {
     return (
          <form className='Form'>
               <div className='FormControls'>
                    <span><label>Name:</label></span>
                    <input type='text'/>
               </div>
               <div className='FormControls'>
                    <span><label>Email Address:</label></span>
                    <input type='text'/>
               </div>
               <div className='FormControls'>
                    <span><label>Comments:</label></span>
                    <textarea type='text' rows='4' cols='28'/>
               </div>
               <button>Sign Up</button>
          </form>
     )
}

export default Form
