import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    givenPassword: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({givenPassword: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/movies')
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true, errorMsg: 'Invalid Credentials'})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, givenPassword} = this.state
    const details = localStorage.getItem('user')
    const {name, password} = JSON.parse(details)
    if (name === username && password === givenPassword) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  renderPasswordField = () => {
    const {givenPassword} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={givenPassword}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div>
        <Link to="/signup">
          <p className="sing-up">signup</p>
        </Link>
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
