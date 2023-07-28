import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Registration from './components/Registration'
import Login from './components/Login'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
