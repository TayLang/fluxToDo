import React from 'react'
import Backbone from 'backbone'
import {Tasks} from './models/tasksModel.js'
import STORE from './store.js'
import User from './models/userModel.js'

const ACTIONS = {
	getAllTasks: function(id) {
		var taskColl = STORE.get('tasksCollection')
		taskColl.fetch({
			data: {
				user_id: id
			}
		})
			.then(function(){
				STORE.set({
					tasksCollection: tasksColl
				})
			})
	},

	registerUser: function(userData) {
		User.register(userData)
		.done(
			function(res){
				alert(`new user ${res.email} registered!`)
				ACTIONS.logUserIn(userData.email, userData.password)
			}
		)
		.fail(
			function(error){
				alert('problem registering user')
			}
		)
	},

	logUserIn: function(email, password) {
		User.login(email, password)
		.done(
			function(res){
				alert('Yay we got logged in!')
				location.hash = 'main'
			}
		)
		.fail(
			function(err){
				alert('Oh no! Error logging in!')
				location.hash = 'register'
			}
		)
	}
}

export default ACTIONS