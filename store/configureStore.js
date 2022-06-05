import { createStore, combineReducers } from 'redux';
import permissionReducer from '../reducers/permissionReducer';

const rootReducer = combineReducers(
{ cameraPerm: permissionReducer }
);

const configureStore = () => {
return createStore(rootReducer);
}

export default configureStore;