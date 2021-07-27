import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Navigation from './components/Navigation'
import FeedbackPage from './pages/FeedbackPage'
import HomePage from './pages/HomePage'
import NewFeedback from './pages/NewFeedback'
import PageNotFound from './pages/PageNotFound'
import Date from './UI/Date'
import Footer from './UI/Footer'

const App = () =>
 {  
  return (
      <div>
        <Navigation/>
        <p className='Heading'>Feedback Forum</p>
        <Date/>
        <Switch>
          <Route path='/feedbacks/new' exact>
            <NewFeedback/>
          </Route>
          <Route path='/feedbacks' exact>
            <FeedbackPage/>
          </Route>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/:id'>
            <PageNotFound/>
          </Route>
        </Switch>
        <Footer/>
      </div>
  );
}
export default App;
