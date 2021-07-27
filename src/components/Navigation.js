import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
     return (
          <nav className='Navigation'>
               <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/feedbacks'>Feedbacks</Link>
                    <Link to='/feedbacks/new'>Add a feedback</Link>
               </ul>
          </nav>
     )
}

export default Navigation
