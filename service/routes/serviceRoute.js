const express = require('express');
const router = express.Router();
// all user controller require

const userController = require('../controller/serviceController');
const { upload } = require("../libs/upload");

// all router
router.get('/', userController.getallServiceController);
router.get('/:id', userController.getSingleServiceController);
router.post('/', upload.single('service'), userController.createServiceController);
router.put('/:id', upload.single('service'), userController.updateServiceController);
router.delete('/:id', userController.deleteServiceController);

module.exports = router;
