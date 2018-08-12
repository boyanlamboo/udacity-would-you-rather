import React, { Component } from 'react'
import '../css/login.css'
import { connect } from 'react-redux'


class LogInPage extends Component {
	render() {
    const {  } = this.props;
		return(
			<p>LogInPage loaded</p>
		)
	}
}

function mapStateToProps(state) {
    const {authedUser, users} = state
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(LogInPage)