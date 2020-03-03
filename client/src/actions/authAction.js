import axios from "axios";
import {
    LOGIN
} from './types';

export const login = async(dispatch, {email, password}) => {
    try {
        const response = await axios.post('http://localhost:5050/api/auth/login', {email, password});
        const { data : {user, token} } = response;
        localStorage.setItem('authToken', token);
        dispatch({ 
            type: LOGIN,
            payload: user
        })
        window.location.href = "/";
    } catch (error) {
        console.log(error);
    }
  };