import axios from 'axios';
import {
  LOAD_ALL_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  START,
  SUCCESS,
  FAIL,
} from '../constants';

export function loadAllProducts() {
  return dispatch => {
    dispatch({
      type: LOAD_ALL_PRODUCTS + START,
    });

    axios
      .get('/api/products')
      .then(response => {
        dispatch({
          type: LOAD_ALL_PRODUCTS + SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: LOAD_ALL_PRODUCTS + FAIL,
        });
      });
  };
}

export function addProduct(name, colors) {
  return dispatch => {
    axios
      .post(`/api/products`, { name, colors })
      .then(response => {
        const { name, colors } = response.data;

        dispatch({
          type: CREATE_PRODUCT + SUCCESS,
          payload: { name, colors },
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: CREATE_PRODUCT + FAIL,
        });
      });
  };
}

export function deleteProduct(id) {
  return dispatch => {
    axios
      .delete(`/api/products/${id}`)
      .then(response => {
        dispatch({
          type: DELETE_PRODUCT + SUCCESS,
          payload: id,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: DELETE_PRODUCT + FAIL });
      });
  };
}
