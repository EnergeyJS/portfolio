// required express
const express = require('express');
const app = express();
const path = require("path");
app.use(express.json());
let cors = require('cors');
app.use(cors());
// add request
const request = require('request');
// require mongoose
const mongoose = require('mongoose');
// require router
const userRoute = require('./routes/userRoute');
const authRoute = require('./src/api/auth/auth.route');
const serviceRoute = require('./routes/serviceRoute');
const teamRoute = require('./routes/teamMemberRoute');
// import database file
const config = require("./config/index");
const PORT = process.env.PORT || 5050;
// request moddleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// database connect 
(async () => {
    try {
        await mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected");
    } catch (error) {
        console.log(error)
    }
})()
// get all data
app.use('/api/users', userRoute);
// get all data
app.use('/api/auth', authRoute);
app.use('/api/services', serviceRoute);
app.use('/api/team', teamRoute);
app.use('/image', express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
    console.log('server running');
})