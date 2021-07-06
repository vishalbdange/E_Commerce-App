import { combineReducers, applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import productReducer from './reducers/productReducers';
import loadingReducer from './reducers/loadingReducers';


const reducer = combineReducers({
	loading: loadingReducer,
	messages: messageReducer,
	categories: categoryReducer,
	products: productReducer,
});

const initialState = {};

// const middleware = [thunk];
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
	reducer,
	initialState,
	composedEnhancer
);

export default store;