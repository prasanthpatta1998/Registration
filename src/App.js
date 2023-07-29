import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
