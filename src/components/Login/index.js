import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    invalid: false,
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitData = event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const credentials = JSON.parse(localStorage.getItem('userData'))
    if (username === credentials.name && password === credentials.password) {
      history.replace('/home')
    } else {
      this.setState({invalid: true})
    }
  }

  render() {
    const {username, password, invalid} = this.state
    return (
      <div className="registration-route">
        <div className="registration-container">
          <h1 className="registration-heading">Login Form</h1>
          <form onSubmit={this.onSubmitData}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={this.onChangeUsername}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.onChangePassword}
                required
              />
            </div>
            <button type="submit">Login</button>
            {invalid && <p>Invalid Credentials</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
