import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'

export default class Root extends Component {
	render() {
		let { store } = this.props
		return (
		<Provider store={ store }>
			{() => <TodoApp />}
		</Provider>
		)
	}
}