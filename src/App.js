import React from 'react'
import './App.scss'
import Form from './components/Form'
import Navigation from './components/Navigation'
import Date from './UI/Date'
import Footer from './UI/Footer'

const App = () =>
 {  
  return (
      <div>
        <Navigation/>
        <p className='Heading'>Feedback Forum</p>
        <Date/>
        <p className='Text'>SignUp. Its free!</p>
        <Form/>
        <Footer/>
      </div>
  );
}
export default App;
