import Backbone from 'backbone'
import {TasksCollection} from './models/tasksModel'


const STORE = Object.assign({}, Backbone.Events, {
	data: {
		tasksCollection: new TasksCollection()
	},

	set: function(attributes) {
		this.data = Object.assign(this.data, attributes)
		this.trigger('dataUpdated')
	},

	get: function(prop) {
		return this.data[prop]
	}
})

export default STORE