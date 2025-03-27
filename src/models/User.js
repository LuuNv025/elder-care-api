import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;