import {Component} from 'react'
import './index.css'

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    phoneNo: '',
    profession: '',
  }

  onChangeName = event => this.setState({name: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeEmail = event => this.setState({email: event.target.value})

  onChangePhoneNumber = event => this.setState({phoneNo: event.target.value})

  onChangeProfession = event => this.setState({profession: event.target.value})

  onSubmitData = event => {
    event.preventDefault()
    const {history} = this.props
    const {name, password, email, phoneNo, profession} = this.state
    const data = {
      name,
      password,
      email,
      phoneNo,
      profession,
    }
    const jsonData = JSON.stringify(data)
    localStorage.setItem('userData', jsonData)
    this.setState({
      name: '',
      password: '',
      email: '',
      phoneNo: '',
      profession: '',
    })
    history.replace('/login')
  }

  render() {
    const {name, password, email, phoneNo, profession} = this.state
    return (
      <div className="registration-route">
        <div className="registration-container">
          <h1 className="registration-heading">Sign Up Form</h1>
          <form onSubmit={this.onSubmitData}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={this.onChangeName}
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
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={this.onChangeEmail}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                id="phoneNumber"
                type="number"
                name="phoneNo"
                value={phoneNo}
                onChange={this.onChangePhoneNumber}
                required
              />
            </div>
            <div>
              <label htmlFor="profession">Profession:</label>
              <select
                id="profession"
                name="profession"
                value={profession}
                onChange={this.onChangeProfession}
                required
              >
                <option value="">Select Profession</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
