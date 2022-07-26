import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { user } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
	<div>
		<h1>To Do List</h1>
		<nav>
			{isLoggedIn ? (
				<div>
					<Link to="/home">Home</Link>
					<a href="#" onClick={handleClick}>
						Logout
					</a>
				</div>
			) : (
				<div>
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
				</div>
			)}
		</nav>
		<hr />
	</div>
);

const mapState = (state) => {
	return {
		isLoggedIn: !!state.user.id,
	};
};

const mapDispatch = (dispatch) => {
	return {
		handleClick() {
			alert('logout clicked');
		},
	};
};

export default connect(mapState, mapDispatch)(Navbar);
