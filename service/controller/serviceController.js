//path
const fs = require('fs')
const path = require("path");
const dirPath = path.join(__dirname, '../public');
// require model
const Service = require("../model/service");
// get all services
const getallServiceController = async (req, res) => {
    res.send(await (await Service.find()).reverse());
}
// get single services
const getSingleServiceController = async (req, res) => {
    const { id } = req.params;
    try {
        res.send(await Service.findById(id));
    } catch (error) {
        console.log(error)
    }
}
//  create service
const createServiceController = async (req, res) => {
    if (req.file) {
        const newService = new Service({
            title: req.body.title,
            description: req.body.description,
            service_icon: req.file.filename
        })
        res.send(await newService.save());
    }

}

// update service
const updateServiceController = async (req, res) => {

    const { id } = req.params;
    const { title, description } = req.body;
    const service = await Service.findById(id);
    service.title = title || service.title;
    service.description = description || service.description;
    if (req.file) {
        console.log(req.file);
        const { service_icon } = service;
        try {
            if (fs.existsSync(`${dirPath}/${service_icon}`)) {
                fs.unlinkSync(`${dirPath}/${service_icon}`);
                service.service_icon = req.file.filename;
            }
        } catch (error) {
            console.log(error)
        }
    }

    res.send(await service.save());
}

// delete service
const deleteServiceController = async (req, res) => {
    const { id } = req.params;
    const deleteService = await Service.findById(id);
    const { service_icon } = deleteService;
    try {
        if (fs.existsSync(`${dirPath}/${service_icon}`)) {
            fs.unlinkSync(`${dirPath}/${service_icon}`);
            res.send(await deleteService.remove());
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getallServiceController,
    getSingleServiceController,
    createServiceController,
    updateServiceController,
    deleteServiceController
}