import {
    GET_DUMMY_DATA,
    FILTER_DUMMY_DATA,
    CART_DATA,
    ADD_NAME_AGE,
    LOGIN
  } from '../actions/types';
  
  const initialState = {
    user: {}
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'inc':
        return { ...state, count: state.count + 1 };
      case CART_DATA:
        return { ...state, cart: [...state.cart, action.payload] };
      case FILTER_DUMMY_DATA:
        return { ...state, list: action.payload };
      case GET_DUMMY_DATA:
        return { ...state, list: action.payload };
    case ADD_NAME_AGE:
            return { ...state, name_age: action.payload };
    case LOGIN:
          return { ...state, user: action.payload };
      default:
        return state;
    }
  };