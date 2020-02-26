// import package and project file
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from "../../components/atoms/button/Button";
import Input from "../../components/atoms/input/Input";
import TextareaInput from "../../components/atoms/input/TextareaInput";


const UpdateUser = (props) => {
    const { match } = props;
    let { id } = match.params;
    const [name, setUserName] = useState('');
    const [age, setUserAge] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:5050/api/users/${id}`);
                setUserName(data.name);
                setUserAge(data.age);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);


    const submit = async (e) => {
        e.preventDefault();
        const user = await axios.put(`http://localhost:5050/api/users/${id}`, { name, age },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                    'Access-Control-Allow-Methods': 'GET POST PUT DELETE',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
                }
            });
        console.log(user);
    }

    return (
        <section className="pt-5 pb-5 content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title mb-3 text-center">
                            <h2>Update User</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <form onSubmit={submit}>

                            <Input type="text" placeholder="User Name" onChange={setUserName} value={name} />
                            <Input type="number" placeholder="User Age" onChange={setUserAge} value={age} />
                            <Button type="submit" value="Update User" />

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default UpdateUser;