const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const dataController = require('../controllers/data');

router.get('/', checkAuth, dataController.getData);

module.exports = router;
