const mongoose = require('mongoose');
const Log = require('../models/log');

exports.getData = (req, res, next) => {
  Log.find({ user: req.userData.userId })
    .select('odometer chargeAmount unitPrice')
    .exec()
    .then(logs => {
      res.status(200).json({
        totalDistance: getTotalDistance(logs),
        co2Saved: getCo2Saved(logs),
        moneySaved: getMoneySaved(logs)
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

const getTotalDistance = (logs => {
  return (logs[logs.length - 1].odometer - logs[0].odometer);
});

const getCo2Saved = (logs => {
  return Math.round(getTotalDistance(logs) * 130 / 1000);
});

const getMoneySaved = (logs => {
  let sumPriceOfCharges = 0;
  for (let log of logs) {
    sumPriceOfCharges += log.chargeAmount * log.unitPrice;
  }
  let sumPriceOfGas = getTotalDistance(logs) / 100 * 5.6 * 330;
  return Math.round(sumPriceOfGas - sumPriceOfCharges);
});
