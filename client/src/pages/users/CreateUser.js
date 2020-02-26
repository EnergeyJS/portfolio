// import package and project file
import React, { useState } from 'react';
import axios from 'axios';
// file export
import Button from "../../components/atoms/button/Button";
import Input from "../../components/atoms/input/Input";
import TextareaInput from "../../components/atoms/input/TextareaInput";

import { createUser } from "../../api/user";

const CreateUser = () => {
    const [name, setUserName] = useState('');
    const [age, setUserAge] = useState('');
    const submit = async (e) => {
        e.preventDefault();
        const user = createUser({ name, age })
        console.log(user);
    }
    return (
        <section className="pt-5 pb-5 content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title mb-3 text-center">
                            <h2>Add User</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <form onSubmit={submit}>

                            <Input type="text" placeholder="User Name" onChange={setUserName} />
                            <Input type="number" placeholder="User Age" onChange={setUserAge} />
                            <Button type="submit" value="Add User" />

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default CreateUser;