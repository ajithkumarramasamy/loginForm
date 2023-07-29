import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Movies from './components/Movies'
import NotFound from './components/NotFound'
import SignupForm from './components/SignupForm'
import CompanyInfo from './components/CompanyInfo'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/company-info" component={CompanyInfo} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
