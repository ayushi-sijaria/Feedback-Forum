import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

const Navigation = () => {
     return (
          <nav className='Navigation'>
               <ul>
                    <Link to='/feedbacks'>Feedbacks</Link>
                    <Link to='/feedbacks/new'>Add a feedback</Link>
               </ul>
          </nav>
     )
}

export default Navigation
