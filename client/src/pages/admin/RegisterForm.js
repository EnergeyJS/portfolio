import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
const RegisterForm = () => {

    const auth = useSelector(state => state.auth);
    const history = useHistory();
    
    useEffect(()=>{
        auth.isAuthenticated && history.push('/');
    }, [])
    
        return (
            <section className="register-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="login-form login-register-inner">
                                <h3 className="pb-3">Register Form</h3>
                                <form action="">

                                    <div class="form-group">
                                        <input type="text" name="firstname" id="" class="form-control" placeholder="First Name" />
                                    </div>

                                    <div class="form-group">
                                        <input type="text" name="lastname" id="" class="form-control" placeholder="Last Name" />
                                    </div>

                                    <div class="form-group">
                                        <input type="email" name="email" id="" class="form-control" placeholder="Email" />
                                    </div>

                                    <div class="form-group">
                                        <input type="password" name="password" id="" class="form-control" placeholder="Password" />
                                    </div>

                                    <div class="form-group">
                                        <input type="password" name="confirmpassword" id="" class="form-control" placeholder="Confirm Password" />
                                    </div>

                                    <div class="form-group">
                                        <input type="submit" value="Register" className="btn btn-primary" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    
}
export default RegisterForm