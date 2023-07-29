import {Component} from 'react'

import './index.css'

class SignupForm extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: '',
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  emailChange = event => {
    this.setState({email: event.target.value})
  }

  phoneChange = event => {
    this.setState({phoneNumber: event.target.value})
  }

  professionChange = event => {
    this.setState({profession: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    // Save the data to local storage
    const {name, password, email, phoneNumber, profession} = this.state
    const formData = {
      name,
      password,
      email,
      phoneNumber,
      profession,
    }
    console.log(formData)
    localStorage.setItem('user', JSON.stringify(formData))
    alert('Signup successful!')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {name, email, phoneNumber, password, profession} = this.state
    return (
      <div className="total-container">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.nameChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.passwordChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.emailChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={this.phoneChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="profession">Profession:</label>
            <select
              id="profession"
              value={profession}
              onChange={this.professionChange}
              placeholder="Select Profession"
              required
            >
              <option value="">Select Profession</option>
              <option value="Engineer">Engineer</option>
              <option value="Lawyer">Lawyer</option>
              <option value="chemist">chemist</option>
            </select>
          </div>
          <button type="submit" className="sign-in-button">
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default SignupForm
