import React from 'react'
import Form from '../components/Form'
import { useSelector } from 'react-redux'

const HomePage = () => {
     const isSignedIn = useSelector(state => state.isSignedIn)
     return (
          <div>
               
               {isSignedIn && <p className='Text'>You have successfully signed in. <br/>Get access to all the feedbacks now.</p>}
               {!isSignedIn && <p className='Text'>Sign up. It's free !</p>}
               {!isSignedIn && <Form/>}               
          </div>
     )
}

export default HomePage
