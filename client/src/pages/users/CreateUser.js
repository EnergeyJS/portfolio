// import package and project file
import React, { useState } from 'react';
import axios from 'axios';
// file export
import Button from "../../components/atoms/button/Button";
import Input from "../../components/atoms/input/Input";

import { createUser } from "../../api/user";

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const submit = async (e) => {
        e.preventDefault();
        const user = createUser({ username, name, email, password, check })
        console.log(user);
    }

    const checkUncheck = ()=>{
        setCheck(!check)
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

                            <Input type="text" placeholder="User Name" onChange={setUsername} />
                            <Input type="text" placeholder="Email" onChange={setEmail} />
                            <Input type="text" placeholder="Name" onChange={setName} />
                            <Input type="password" placeholder="Password" onChange={setPassword} />
                            <input name="check" type="checkbox" checked={check} onChange={checkUncheck} /> <label>Check</label>

                            <Button type="submit" value="Add User" />

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default CreateUser;