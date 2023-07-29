import {BrowserRouter, Switch} from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={Signup} />
      <ProtectedRoute exact path="/login" component={Login} />
      <ProtectedRoute exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
