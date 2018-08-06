import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/question.css'
import { formatDate } from '../utils/_DATA'


class Question extends Component {
	render() {
		const { question, user } = this.props
		//console.log(this.props)
		console.log(user)
		
		if (question === null) {
			return <p>This question doesn't seem to exist!</p>
		}
		
		return(
			<div className='question'>
				<div className='question-title'>
					<img src={user.avatarURL} alt="{user.name}'s avatar!" className='avatar'/>
					<h4>{user.name} <small>{formatDate(question.timestamp)}</small></h4>
				</div>
				<div className='question-body'>
					<h5>Would you rather:</h5>
					<p>A: {question.optionOne.text}</p>
					<p>B: {question.optionTwo.text}</p>
				</div>
				<div className='question-footer'>
					<button className='vote-button'>TAKE A VOTE</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps ({questions, users}, { id }) {
	const question = questions[id]
	const user = users[question.author]
	
	return {
		question,
		user
	}
}

export default connect(mapStateToProps)(Question)