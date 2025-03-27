const mongoose = require('mongoose');

const NurseSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['customer', 'nurse', 'admin'],
    required: true 
  },
  profile: {
    fullName: String,
    avatar: String,
    address: String,
    dateOfBirth: Date,
    gender: String,
    identificationNumber: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'blocked'],
    default: 'active'
  },
  verificationStatus: {
    isVerified: { type: Boolean, default: false },
    verificationDocuments: [String]
  },
  specialties: [String],
  certifications: [{
    name: String,
    issuedBy: String,
    issuedDate: Date,
    expiryDate: Date
  }],
  workExperience: [{
    workplace: String,
    position: String,
    startDate: Date,
    endDate: Date
  }],
  availability: {
    workingDays: [String],
    workingHours: {
      start: String,
      end: String
    }
  },
  serviceRates: {
    hourlyRate: Number,
    serviceTypes: [{
      type: String,
      rate: Number
    }]
  },
  location: {
    latitude: Number,
    longitude: Number
  },
  ratings: {
    averageRating: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('Nurse', NurseSchema);