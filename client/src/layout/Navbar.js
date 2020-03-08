// import package and project file
import React, { Component } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { logoutUser } from '../actions/authAction';
import $ from "jquery";
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory();


        return (
            <nav id="mainMenu" className="navbar bg-dark  navbar-expand-lg navbar-light header-area">
                <div className="container">
                    <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand site-logo-header text-white">logo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                        aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navtogglerItemItem">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="main-menu">
                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/`}>Users</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/create-user`}>Add User</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/services`}>Service</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/create-service`}>Add Service</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/team`}>Team</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/contact`}>Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/login`}>Login</NavLink>
                            </li>

                            <li className="nav-item">
                                <button className="link-item" onClick={()=>{
                                    logoutUser(dispatch, history);
                                }}>Logout</button>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        );
    
}
export default Header;
