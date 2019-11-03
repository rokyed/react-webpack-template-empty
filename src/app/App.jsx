import React from 'react'
import style from './App.scss'

export default class App extends React.Component {
	render() {
		return (
			<div className={style.component}>
				<div className="content">
					{this.props.content}
				</div>
			</div>
		)
	}
}
