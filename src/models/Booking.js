const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
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
  serviceType: {
    type: String,
    enum: [
      'medical_care', 
      'daily_living_support', 
      'mental_support', 
      'medication_reminder',
      'physical_therapy'
    ],
    required: true
  },
  status: {
    type: String,
    enum: [
      'pending', 
      'accepted', 
      'rejected', 
      'in_progress', 
      'completed', 
      'cancelled'
    ],
    default: 'pending'
  },
  startTime: Date,
  endTime: Date,
  totalHours: Number,
  totalCost: Number,
  specialRequirements: String,
  nurseRemarks: String,
  customerRemarks: String
});

module.exports = mongoose.model('Booking', BookingSchema);