const mongoose = require('mongoose');
const Log = require('../models/log');

exports.getLog = (req, res, next) => {
  Log.find({ user: req.userData.userId })
    .select('odometer chargeAmount unitPrice')
    .exec()
    .then(logs => {
      res.status(200).json({
        count: logs.length,
        logs: logs.map(log => {
          return {
            odometer: log.odometer,
            chargeAmount: log.chargeAmount,
            unitPrice: log.unitPrice,
            totalPrice: log.chargeAmount * log.unitPrice
          }
        }),
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

exports.logCharge = (req, res, next) => {
  const log = new Log({
    _id: mongoose.Types.ObjectId(),
    user: req.userData.userId,
    odometer: req.body.odometer,
    chargeAmount: req.body.chargeAmount,
    unitPrice: req.body.unitPrice
  });
  log.save()
    .then(result => {
      res.status(201).json({
        message: 'Charging logged successfully.'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    }); 
}
// exports.logCharge = (req, res, next) => {
//   const log = new Log({
//     _id: mongoose.Types.ObjectId(),
//     user: req.userData.userId,
//     odometer: req.body.odometer,
//     chargeAmount: req.body.chargeAmount,
//     unitPrice: req.body.unitPrice
//   });
//   log.save()
//     .then(result => {
//       res.status(201).json({
//         message: 'Charging logged successfully.'
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     }); 
// }

exports.logCharge = (req, res, next) => {
  Log.find({ user: req.userData.userId })
    .exec()
    .then(logs => {
      const log = new Log({
        _id: mongoose.Types.ObjectId(),
        user: req.userData.userId,
        odometer: req.body.odometer,
        chargeAmount: req.body.chargeAmount,
        unitPrice: req.body.unitPrice
      });
      if (logs.length = 1 && req.body.odometer < 500) {
        log.save()
          .then(result => {
            res.status(201).json({
              message: 'Charging logged successfully.'
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          }); 
      } else {
        Log.findOneAndUpdate({ user: req.userData.userId }, { $set: { 
          odometer: req.body.odometer,
          chargeAmount: req.body.chargeAmount,
          unitPrice: req.body.unitPrice }
        }, (err, log) => {
          if (err) {
            reject(err);
          } else {
            fulfill(log);
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}


