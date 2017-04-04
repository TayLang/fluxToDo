import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import MainView from  './views/mainview.js'
import RegisterView from './views/registerview.js'

const app = function() {
	var ListRouter = Backbone.Router.extend({
		routes : {
			"register" : "handleRegister",
			"main" : "handleMain",
			"*splat" : "redirect"
		},
		handleRegister : function() {
			ReactDOM.render(<RegisterView />, document.querySelector('.container'))
		},
		handleMain : function() {
			ReactDOM.render(<MainView />, document.querySelector('.container'))
		},
		redirect : function() {
			location.hash = "register"
		}
	})
	new ListRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..