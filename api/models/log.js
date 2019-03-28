const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  time: { type: Number, timestamp: true, default: Date.now() },
  odometer: { type: Number, required: true },
  chargeAmount: { type: Number, required: true },
  unitPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Log', logSchema);
