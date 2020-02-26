// import package and project file
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// file export
import Button from "../../components/atoms/button/Button";
import Input from "../../components/atoms/input/Input";
import TextareaInput from "../../components/atoms/input/TextareaInput";

// get single service api
import { updateService } from "../../api/service";

const UpdateService = (props) => {
    const { match } = props;
    let { id } = match.params;
    const [title, setServiceTitle] = useState('');
    const [description, setServiceDescription] = useState('');
    const [service_icon, setServiceIcon] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:5050/api/services/${id}`);
                setServiceTitle(data.title);
                setServiceDescription(data.description);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);


    const submit = async (e) => {
        console.log("fsdfdsf");
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('description', description);
        formdata.append('service', service_icon);

        const service = await axios.put(`http://localhost:5050/api/services/${id}`, formdata);
        console.log(service);
    }

    return (
        <section className="pt-5 pb-5 content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title mb-3 text-center">
                            <h2>Update Service</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <form onSubmit={submit}>

                            <Input onChange={setServiceTitle} placeholder="Service title" type="text" value={title} />
                            <TextareaInput onChange={setServiceDescription} placeholder="Service Description" value={description} />

                            <div className="form-group">
                                <input type="file" onChange={(e) => setServiceIcon(e.target.files[0])} className="form-control" />
                            </div>

                            <Button type="submit" value="Update Service" />


                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default UpdateService;