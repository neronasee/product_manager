import {
  LOAD_ALL_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  START,
  SUCCESS,
  FAIL,
} from '../constants';

const initialState = {
  entities: [],
  loading: false,
  loaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_PRODUCTS + START:
      return { ...state, loading: true };
    case LOAD_ALL_PRODUCTS + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: action.payload,
      };
    case LOAD_ALL_PRODUCTS + FAIL:
      return { ...state, loading: false };
    case CREATE_PRODUCT + SUCCESS:
      return {
        ...state,
        loaded: false,
      };
    case DELETE_PRODUCT + SUCCESS:
      return {
        ...state,
        entities: state.entities.filter(entity => entity._id !== action.payload),
      };
    default:
      return state;
  }
};
