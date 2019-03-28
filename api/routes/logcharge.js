const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const logChargeController = require('../controllers/logcharge');

router.put('/', checkAuth, logChargeController.logCharge);

module.exports = router;
