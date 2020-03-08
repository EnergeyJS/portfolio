import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import {
    login,
} from '../../actions/authAction';


export const Login = () =>  {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    
    const dispatch = useDispatch();

    useEffect(()=>{
        auth.isAuthenticated && history.push('/');
    }, [])

    const loginSubmit = (event) => {
        event.preventDefault();
        login(dispatch, { email, password}, history);
      };

        return (
            <section className="section-padding login-register-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="login-form login-register-inner">
                                <h3 className="pb-3">Login</h3>
                                <form action="" onSubmit={loginSubmit}>

                                    <div className="form-group">
                                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" id="" className="form-control" placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn btn-primary" />
                                    </div>

                                    <div className="login-register-bottom">
                                        <Link to={`${process.env.PUBLIC_URL}/forgot`} className="mr-4 forgot-password-btn">Forgot Password</Link>
                                        <Link to={`${process.env.PUBLIC_URL}/register`} className="register-btn">Register Here</Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    
}
