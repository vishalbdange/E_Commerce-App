import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
	CREATE_PRODUCT,
	GET_PRODUCTS,
	GET_PRODUCT,
	DELETE_PRODUCT,
} from '../constants/productConstants';

export const createProduct = formData => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.post('/api/product', formData);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		console.log(response.data.product);
		dispatch({
			type: CREATE_PRODUCT,
			payload: response.data.product,
		});
	} catch (err) {
		dispatch({ type: STOP_LOADING });
		err && 
			dispatch({
				type: SHOW_ERROR_MESSAGE,
				payload: err.message,
			});
	}
};

export const getProducts = () => async dispatch => {
	console.log("In GET PRODUCTSS	")	
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/product');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});

	} catch (err) {
		 
		dispatch({ type: STOP_LOADING });
		// err && 
		// 	dispatch({
		// 		type: SHOW_ERROR_MESSAGE,
		// 		payload: err.response.data.errorMessage,
		// 	});
	}
};

export const getProduct = productId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		console.log("Before REq")
		const response = await axios.get(`/api/product/${productId}`);
		console.log("After REq")
	
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_PRODUCT,
			payload: response.data,
		});
	} catch (err) {
		console.log('getProducts api error: ', err.message);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			// payload: err.response.data.errorMessage,
			payload: err.message,

		});

	}
};

export const deleteProduct = productId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.delete(`/api/product/${productId}`);
		console.log(response.data);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: DELETE_PRODUCT,
			payload: response.data,
		});
	} catch (err) {
		console.log('deleteProduct api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};


// export const editProduct = productId => async dispatch => {
// 	try {
// 		dispatch({ type: START_LOADING });
// 		console.log("EDIT BEFORE")
// 		dispatch({ type: STOP_LOADING });
// 		dispatch({
// 			type: DELETE_PRODUCT,
// 			payload: response.data,
// 		});
// 	} catch (err) {
// 		console.log('deleteProduct api error: ', err);
// 		dispatch({ type: STOP_LOADING });
// 		dispatch({
// 			type: SHOW_ERROR_MESSAGE,
// 			payload: err.response.data.errorMessage,
// 		});
// 	}
// };











