import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../user/user.action';

@connect((state)=> {
	return {
		user: state.user.user
	};
})
export default class User extends React.Component {
  componentWillMount() {
    this.props.dispatch(getUser());
  }
  render() {
    return (<h2>Welcome, {this.props.user.name}</h2>);
  }
}
