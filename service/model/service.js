// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// user schema 
const serviceSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },
    service_icon: {
        type: String,
        required: true,
    },


});

module.exports = mongoose.model('service', serviceSchema);