import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/question.css'
import { formatDate } from '../utils/_DATA'


class TakeVote extends Component {
	render() {
		const {users, questions, isAnswered, answer, authedUser, questionNotFound, totalVotes} = this.props
		return(
			<p>Would you rather</p>
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

export default connect(mapStateToProps)(TakeVote)