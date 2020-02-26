// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// team members schema 
const teamMemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
    },
    memberSocial: [
        {
            social_name: {
                type: String
            }
        }
    ]
});

module.exports = mongoose.model('team', teamMemberSchema);