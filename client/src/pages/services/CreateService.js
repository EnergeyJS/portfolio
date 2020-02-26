// import package and project file
import React, { useState } from 'react';
import axios from 'axios';

// file export
import Button from "../../components/atoms/button/Button";
import Input from "../../components/atoms/input/Input";
import TextareaInput from "../../components/atoms/input/TextareaInput";

//  creaet service api
import { createService } from "../../api/service";


const CreateService = () => {
    const [title, setServiceTtitle] = useState('');
    const [description, setServiceDescription] = useState('');
    const [service_icon, setServiceIcon] = useState('');
    const submit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('description', description);
        formdata.append('service', service_icon);
        const service = await axios.post(createService, formdata);
        console.log(service);
    }
    return (
        <section className="pt-5 pb-5 content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title mb-3 text-center">
                            <h2>Add Service</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <form onSubmit={submit} encType="multipart/form-data">

                            <Input onChange={setServiceTtitle} placeholder="Service title" type="text" />
                            <TextareaInput onChange={setServiceDescription} placeholder="Service Description" />

                            <div className="form-group">
                                <input type="file" onChange={(e) => setServiceIcon(e.target.files[0])} className="form-control" />
                            </div>


                            <Button type="submit" value="Add Service" />

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default CreateService;