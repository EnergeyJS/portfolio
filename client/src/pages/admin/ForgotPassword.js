import React, { Component } from 'react';

class ForgotPassword extends Component {
    render() {
        return (
            <section className="forgot-password-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="login-form login-register-inner">
                                <h3 className="pb-3">Reset Password</h3>
                                <form action="">

                                    <div class="form-group">
                                        <input type="text" name="email" id="" class="form-control" placeholder="Email" />
                                    </div>

                                    <div class="form-group">
                                        <input type="submit" value="Send Reset Link" className="btn btn-primary w-100" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ForgotPassword