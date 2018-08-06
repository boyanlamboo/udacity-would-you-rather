import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import '../css/dashboard.css'

class Dashboard extends Component {
	render(){
		return (
			<div>
				<ul className='questions'>
					{this.props.questionIds.map((id) => (
						<li key={id} className='question'>
							<Question id={id}/>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({ questions }) {
	return {
		questionIds: Object.keys(questions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(Dashboard)