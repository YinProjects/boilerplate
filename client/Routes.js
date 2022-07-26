import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
// import {me} from './store'

// class Routes extends Component {
// 	componentDidMount() {
// 		this.props.loadInitialData();
// 	}

// 	render() {
// 		const { isLoggedIn } = this.props;

// 		return (
// 			<div>
// 				{isLoggedIn ? (
// 					<Switch>
// 						<Route path="/home" component={Home} />
// 						<Redirect to="/home" />
// 					</Switch>
// 				) : (
// 					<Switch>
// 						<Route path="/" component={Home} />
// 						<Route path="/" exact component={Login} />
// 						<Route path="/login" component={Login} />
// 						<Route path="/signup" component={Signup} />
// 					</Switch>
// 				)}
// 			</div>
// 		);
// 	}
// }

// const mapState = state => {
//   return {
//     isLoggedIn: !!state.auth.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// export default withRouter(connect(mapState, mapDispatch)(Routes))

function Routes() {
	return (
		<div>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</div>
	);
}
export default Routes;
