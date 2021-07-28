import React from 'react'
const Feedback = (props) => {
     return (
          <div className='Feedback'>
               {props.feedback}   
               <button onClick={props.delete}>Delete</button>            
          </div>
     )
}

export default Feedback
