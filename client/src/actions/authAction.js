import axios from "axios";
import {
    LOGIN,
    AUTH_TOKEN
} from './types';

import setAuthToken from '../utils/setAuthToken';


export const login = async(dispatch, {email, password}, history) => {
    try {
        const response = await axios.post('/api/auth/login', {email, password});
        const { data : {user, token} } = response;
        localStorage.setItem(AUTH_TOKEN, token);
        dispatch(setCurrentUser(user));
        history && history.push('/');
      } catch (error) {
        console.log(error);
    }
  };


  // Set logged in user
export const setCurrentUser = decoded => {
    return { type: LOGIN, payload: decoded };
  };
  
  // Log user Out
export const logoutUser = (dispatch, history = null)=> {
    // remove token from localstorage
    localStorage.removeItem(AUTH_TOKEN);
    // remove auth header for further request
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    history && history.push('/login');

  };