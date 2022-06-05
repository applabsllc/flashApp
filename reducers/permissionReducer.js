import { PERM_CAMERA } from '../constants';

const initialState = {
	cameraPerm: false,
};

const permissionReducer = (state = initialState, action) => {
	switch(action.type) {
		case PERM_CAMERA:
		return {
			...state,
			cameraPerm:action.payload
		};
		default:
		return state;
	}
}
export default permissionReducer;