import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>
)

export default App
