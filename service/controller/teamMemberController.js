//path
const fs = require('fs')
const path = require("path");
const dirPath = path.join(__dirname, '../public');
// require model
const Team = require("../model/team");
// get all team members
const getallTeamController = async (req, res) => {
    res.send(await (await Team.find()).reverse());
}

// get single team member
const getSingleTeamController = async (req, res) => {
    const { id } = req.params;
    try {
        res.send(await Team.findById(id));
    } catch (error) {
        console.log(error)
    }
}

//  create team member
const createTeamController = async (req, res) => {
    const newTeamMember = new Team({
        name: req.body.name,
        designation: req.body.designation,
        memberSocial: req.body.memberSocial,
    })
    res.send(await newTeamMember.save());
}


// delete single team member
const deleteTeamController = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteSingleMember = await Team.findById(id);
        res.send(await deleteSingleMember.remove());
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getallTeamController,
    getSingleTeamController,
    createTeamController,
    deleteTeamController
}