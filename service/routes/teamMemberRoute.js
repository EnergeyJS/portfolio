
const express = require('express');
const router = express.Router();
// all user controller require

const teamController = require('../controller/teamMemberController');

// all router
router.get('/', teamController.getallTeamController);
router.get('/:id', teamController.getSingleTeamController);
router.post('/', teamController.createTeamController);
router.delete('/:id', teamController.deleteTeamController);
module.exports = router;