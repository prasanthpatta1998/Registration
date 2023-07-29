import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const userName = localStorage.getItem('userData')
  console.log(userName)
  if (userName === null) {
    return <Redirect to="/" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
