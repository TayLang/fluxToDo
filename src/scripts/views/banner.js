import React from 'react'
import User from '../models/userModel.js'
import ACTIONS from '../actions.js'

var Banner = React.createClass({
	render: function() {
		return (
			<header>
				<div className='headerBar'>
					`Welcome to your To Do List, ${User.getCurrentUser().get('name')}!`
				</div>
				<div className='listHead'>
					<Head tasks={this.props.tasks} />
				</div>

			</header>
		)
	}
})

var Head = React.createClass({
	render: function() {
		return (
			<nav>
				<a href>All</a>
				<a href={'#doneTask'}>Done</a>
				<a href={'#undoneTask'}>Undone</a>

			</nav>
		)
	}
})

export default Banner