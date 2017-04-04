import React from 'react'
import ACTIONS from '../actions'
import Banner from './banner'
import STORE from '../store.js'

var RegisterView = React.createClass({
	render: function() {
		return (
			<div className='loginContainer'>
				<h1>Fluxifying Tasks</h1>
				<Register />
				<Login />
			</div>
		)
	}
})

var Register = React.createClass({
	_handleSubmit: function(evtObj) {
		console.log('submitting happening')
		evtObj.preventDefault()
		var formEl = evtObj.target
		var userData = {
			name: formEl.yourName.value,
			email: formEl.email.value,
			password: formEl.password.value
		}
		ACTIONS.registerUser(userData)
		formEl.reset()
	},

	render: function() {
		return (
			<div className='registerForm'>
				<h2>Register Here!</h2>
				<form onSubmit={this._handleSubmit}>
				<input className='registerInput' type='text' name='yourName' placeholder='Enter Your Name!' /><br />
				<input className='registerInput' type='text' name='email' placeholder='Enter Your E-mail!' /><br />
				<input className='registerInput' type='password' name='password' placeholder='Enter Your Password!' /> <br />
				<button className='loginButton' type='submit'>Submit</button>

				</form>
			</div>
		)
	}
})

var Login = React.createClass({
	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target
		ACTIONS.logIn(formEl.email.value, formEl.password.value)
	},

	render: function() {
		return (
			<div className='registerForm'>
				<h3>Login Here!</h3>
				<form onSubmit={this._handleSubmit}>
				<input className='registerInput' type='text' name='email' placeholder='Enter Your E-mail!' /><br />
				<input className='registerInput' type='password' name='password' placeholder='Enter Your Password!' /><br />
				</form>
			</div>
		)
	}
})

export default RegisterView