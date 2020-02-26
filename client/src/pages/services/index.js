// import package and project file
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { image_path } from "../../common";

import ServiceItem from "../../components/molecules/ServiceItems/ServiceItem";
// import page section
const ServiceContent = () => {
    const [services, setService] = useState([]);

    // delete service data
    const deleteService = async (id) => {
        const { data } = await axios.delete(`http://localhost:5050/api/services/${id}`);
        console.log(data);
        const remainingService = services.filter(service => service._id !== data._id);
        setService(remainingService);
    }

    // get user data from database
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5050/api/services');
                setService(data);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (
        <section className="service-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title text-center section-title-padding">
                            <h2>Our Services</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {services.map((single_service) => (
                        <ServiceItem single_service={single_service} deleteService={deleteService} />
                    ))}

                </div>
            </div>
        </section>
    )
}
export default ServiceContent;