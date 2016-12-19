import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import User from './user/user.component';

const App = () => (
	<Provider store={store}>
		<User />
	</Provider>
);

export default App;
