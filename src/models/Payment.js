const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  booking: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Booking',
    required: true
  },
  customer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  nurse: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Nurse',
    required: true
  },
  amount: {
    base: Number,
    tax: Number,
    total: Number
  },
  paymentMethod: {
    type: String,
    enum: ['momo', 'vnpay', 'bank_transfer']
  },
  transactionId: String,
  status: {
    type: String,
    enum: ['pending', 'success', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);