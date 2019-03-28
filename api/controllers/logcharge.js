const mongoose = require('mongoose');
const Log = require('../models/log');

// exports.getChargeLog = (req, res, next) => {
//   Log.find({ user: req.userData.userId })
//     .select('odometer chargeAmount unitPrice')
//     .exec()
//     .then(docs => {
//       res.status(200).json({
//         count: docs.length,
//         orders: docs.map(doc => {
//           return {
//             id: doc._id,
//             product: doc.product,
//             quantity: doc.quantity,
//             request: {
//               type: 'GET',
//               url: 'http://localhost:3000/orders/' + doc._id
//             }
//           }
//         }),
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// }

exports.logCharge = (req, res, next) => {
  console.log('here I am at the controller');
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
