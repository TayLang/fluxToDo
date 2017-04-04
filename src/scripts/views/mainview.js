import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Banner from './banner.js'

var MainView = React.createClass({
	componentWillMount : function() {
		ACTIONS.getAllTasks(this.props.userID)
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	getInitialState : function() {
		return STORE.data
	},

	render : function() {
		return (
			<div className="homeView">
				<Banner />
				<AllTasks />
			</div>
		)
	}
})

var AllTasks = React.createClass({

	_handleSubmit : function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target
		var formData = {
			task: formEl.task.value.toString()
		}
		ACTIONS.addTask(formEl.task.value)
		formEl.reset()
	},

	render : function() {
		return (
			<div className="allTasksView">
				<form onSubmit={this._handleSubmit}>
					<input type='text' name='task' placeholder='Enter New Task' />
				</form>
				<ul className="listToDo">
				
				</ul>
			</div>
		)
	} 
})

export default MainView