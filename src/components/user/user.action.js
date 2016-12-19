import { GET } from './user.actionTypes';

export function getUser() {
	return {
		type: GET,
		payload: {name: 'Developer'}
	};
}
