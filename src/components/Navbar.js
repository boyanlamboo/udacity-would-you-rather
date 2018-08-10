import React, { Component } from 'react'
import '../css/navbar.css'
import brand from '../img/wydlogo.png'


class Navbar extends Component {
	render() {
		return(
			<div className='nav-container'>
				<div className='inner-container'>
					<img src={brand} alt='logo' className='nav-brand' />
					<ul className='nav-list'>
						<li className='nav-item'>Home</li>
						<li className='nav-item'>Leaderboard</li>
						<li className='nav-item log-out'>Log Out</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Navbar