/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { data } from '../services/data';
import axios from "axios";

import {
    GET_DUMMY_DATA,
    FILTER_DUMMY_DATA,
    ADD_NAME_AGE,
    LOGIN
} from './types';

// eslint-disable-next-line import/prefer-default-export
// export const getDummyData = () => {
//   const dispatch = useDispatch();

//   useCallback(() => dispatch({
//     type: GET_DUMMY_DATA,
//     payload: data,
//   }), [dispatch]);
// };

// export const getFilterDummyData = (dispatch, serachValue) => {
//   dispatch({
//     type: FILTER_DUMMY_DATA,
//     payload: data.filter(itm => itm.name === serachValue),
//   });
// };

export const storeNameAge = ({name, age}) => {
    return {
      type: ADD_NAME_AGE,
      payload: {name, age},
    };
  };

export const login = async({email, password}) => {
    const token = await axios('');
    return {
      type: LOGIN,
      payload: token,
    };
  };