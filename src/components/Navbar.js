import React, { Component } from 'react'
import '../css/navbar.css'
import brand from '../img/wydlogo.png'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Navbar extends Component {
	render() {
    const { authedUser, users } = this.props;
		return(
			<div className='nav-container'>
				<div className='inner-container'>
					<img src={brand} alt='logo' className='nav-brand' />
					<ul className='nav-list'>
						<li className='nav-item'>Home</li>
						<li className='nav-item split'>Leaderboard</li>
            <li className='nav-item'>{ authedUser }</li>
						<li className='nav-item log-out'><Link to='/login'><button className='log-out-button'>Log Out</button></Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
    const {users, questions, authedUser} = state
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Navbar)