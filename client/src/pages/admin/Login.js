import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
    storeNameAge,
  } from '../../actions/dummyAction';

  import {
    ADD_NAME_AGE,
  } from '../../actions/types';

export const Login = () =>  {
    
    const dispatch = useDispatch();

    const addingToCart = (event) => {
        event.preventDefault();
        dispatch({type: ADD_NAME_AGE, payload: {name: 'Joyonto',age: 24}});
        // dispatch(storeNameAge({name: 'Joyonto',age: 24}));
      };

        return (
            <section className="section-padding login-register-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="login-form login-register-inner">
                                <h3 className="pb-3">Login</h3>
                                <form action="" onSubmit={addingToCart}>

                                    <div className="form-group">
                                        <input type="email" name="email" id="" className="form-control" placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" name="password" id="" className="form-control" placeholder="Password" />
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
