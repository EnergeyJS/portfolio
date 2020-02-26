import React from 'react';
import { image_path } from "../../../common";
import { Link } from "react-router-dom";

const ServiceItem = ({ single_service, deleteService }) => {
    return (
        <div className="col-lg-4" key={single_service._id}>
            <div className="single-service-content text-center">
                <img src={`${image_path}${single_service.service_icon}`} alt="service icon" />
                <h3>{single_service.title}</h3>
                <p>{single_service.description}</p>

                <Link to={`${process.env.PUBLIC_URL}/update-service/${single_service._id}`} className="btn btn-sm btn-success mr-3">Update Service</Link>
                <button onClick={() => deleteService(single_service._id)} className="btn btn-sm btn-danger">Delete Service</button>

            </div>
        </div>
    )
}
export default ServiceItem