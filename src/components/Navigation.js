import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
     return (
          <nav className='Navigation'>
               <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/feedbacks'>Feedback</Link>
               </ul>
          </nav>
     )
}

export default Navigation
