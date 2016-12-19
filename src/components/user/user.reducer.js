import { GET } from './user.actionTypes';

const defaultState = {
	user: {
		name: null
	}
};
export default (state = defaultState, action) => {
	switch (action.type) {
	case GET:
		state = {...state, user: action.payload};
		break;
	default:

	}
	return state;
};
