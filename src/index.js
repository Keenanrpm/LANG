import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Option from './views/option'
import Register from './views/register'
import Intro1 from './views/intro-1'
import Login from './views/login'
import Intro2 from './views/intro-2'
import Intro5 from './views/intro-5'
import Home from './views/home'
import Course3 from './views/course-3'
import LandingPage from './views/landing-page'
import Course1 from './views/course-1'
import Learn from './views/learn'
import Course4 from './views/course-4'
import Course2 from './views/course-2'
import Intro3 from './views/intro-3'
import CourseFinish from './views/course-finish'
import CourseReward from './views/course-reward'
import CourseFalse from './views/course-false'
import Intro4 from './views/intro-4'
import CourseCorrect from './views/course-correct'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Option} exact path="/option" />
        <Route component={Register} exact path="/register" />
        <Route component={Intro1} exact path="/intro-1" />
        <Route component={Login} exact path="/login" />
        <Route component={Intro2} exact path="/intro-2" />
        <Route component={Intro5} exact path="/intro-5" />
        <Route component={Home} exact path="/home" />
        <Route component={Course3} exact path="/course-3" />
        <Route component={LandingPage} exact path="/" />
        <Route component={Course1} exact path="/course-1" />
        <Route component={Learn} exact path="/learn" />
        <Route component={Course4} exact path="/course-4" />
        <Route component={Course2} exact path="/course-2" />
        <Route component={Intro3} exact path="/intro-3" />
        <Route component={CourseFinish} exact path="/course-finish" />
        <Route component={CourseReward} exact path="/course-reward" />
        <Route component={CourseFalse} exact path="/course-false" />
        <Route component={Intro4} exact path="/intro-4" />
        <Route component={CourseCorrect} exact path="/course-correct" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
