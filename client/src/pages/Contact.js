import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            useremail: "",
            userphone: "",
            usersubject: "",
            userdescription: ""
        }
    }
    onChangeHandler = (e) => {
        let getusername = e.target.value;
        let getuseremail = e.target.value;
        let getuserphone = e.target.value;
        let getusersubject = e.target.value;
        let getuserdescription = e.target.value;
        this.setState(
            {
                username: getusername,
                useremail: getuseremail,
                userphone: getuserphone,
                usersubject: getusersubject,
                userdescription: getuserdescription
            }
        )
    }

    onSubmitHandler = () => {
        alert(this.state.username, this.state.useremail, this.state.userphone, this.state.usersubject, this.state.userdescription);
    }

    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center pb-4">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="name" id="" onChange={this.onChangeHandler} value={console.log(this.state.username)} className="form-control" placeholder="Name" aria-describedby="helpId" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" name="email" id="" onChange={this.onChangeHandler} value={console.log(this.state.useremail)} className="form-control" placeholder="Email" aria-describedby="helpId" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="phone" id="" onChange={this.onChangeHandler} value={console.log(this.state.userphone)} className="form-control" placeholder="Phone Number" aria-describedby="helpId" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="subject" id="" onChange={this.onChangeHandler} value={console.log(this.state.usersubject)} className="form-control" placeholder="Subject" aria-describedby="helpId" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea name="description" onChange={this.onChangeHandler} value={console.log(this.state.userdescription)} id="" cols="30" rows="10" className="form-control" placeholder="Description"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary d-block w-100" value="Send Message" />
                                    </div>
                                </div>

                            </div>
                        </form>



                    </div>
                </div>
            </section>
        )
    }
}
export default Contact